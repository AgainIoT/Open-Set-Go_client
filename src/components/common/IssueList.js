import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useState, useEffect } from "react";
import { useRecoilState} from "recoil";
import { modalState } from "../../recoil/commonState";
import {
  selectedTitle,
  bodyState,
  selectedType,
  typesLst,
} from "../../recoil/issueState";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import IssueChip from "./IssueChip";

const IssueList = () => {
  const [types, setTypes] = useRecoilState(typesLst);
  const [temType, setTemType] = useRecoilState(selectedType);
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  const [temTitle, setTemTitle] = useRecoilState(selectedTitle);
  const [body, setBody] = useRecoilState(bodyState);
  const [modalValue, setModalValue] = useRecoilState(modalState("issue"));

  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/file/issue`,
      );
      if (!completed) {
        const list = [];
        result.data.map((it) => {
          const tmp = Object.entries(it);
          list.push(tmp);
        });
        setData(list);
      }
    }
    get();
    return () => {
      completed = true;
    };
  }, []);

  const handleCheck = async (temTitle, temId, temType) => {
    const rst = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/file/issue/${temId}`,
    );
    setBody(rst.data.content);
    setTemTitle(temTitle);
    setTemType(temType);
    setContent(rst.data.image);
  };

  const handleOpen = () => setModalValue(true);
  return (
    <StIssueList>
      <ChipWrapper>
        <ChipP>selected template</ChipP>
        <IssueChip />
      </ChipWrapper>
      <SelectDiv>
        <ListBox
          sx={{
            maxWidth: 360,
            bgcolor: "background.paper",
            maxHeight: "90%",
          }}
          style={{ overflowX: "hidden", overflowY: "auto" }}
        >
          <List
            sx={{
              height: "100%",
              width: 360,
              itemSize: 46,
              itemCount: 1,
              overscanCount: 5,
            }}
          >
            {data.map((it) => (
              <li key={it[0][1]}>
                <ul>
                  <ListSubheader
                    sx={{ fontSize: "1.5rem" }}
                  >{`${it[0][1]}`}</ListSubheader>
                  {it[1][1].map((item) => (
                    <ListItem
                      components="div"
                      onClick={() => {
                        handleCheck(item.title, item.id, it[0][1]);
                        setIsClicked(true);
                      }}
                      key={item.title}
                    >
                      {types.includes(it[0][1][0]) ? (
                        <ListItemButton disabled>
                          <ListItemText
                            primaryTypographyProps={{ fontSize: "1.2rem" }}
                            primary={`${item.title}`}
                          />
                        </ListItemButton>
                      ) : (
                        <ListItemButton>
                          <ListItemText
                            primaryTypographyProps={{ fontSize: "1.2rem" }}
                            primary={`${item.title}`}
                          />
                        </ListItemButton>
                      )}
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </ListBox>
        <ContentDiv>
          <TitleWrapper>
            <TitleP id="PR-title" variant="h2" fontWeight="lg" m={2}>
              {temTitle}
            </TitleP>
          </TitleWrapper>
          <PreviewWrapper>
            {isClicked ? (
              <div>
                <img src={"data:image/png;base64," + content} />
              </div>
            ) : (
              <div></div>
            )}
          </PreviewWrapper>
          <BtnWrapper>
            {isClicked ? (
              <UseBtn variant="contained" onClick={handleOpen}>
                Use template
              </UseBtn>
            ) : (
              <div></div>
            )}
          </BtnWrapper>
        </ContentDiv>
      </SelectDiv>
    </StIssueList>
  );
};

export default IssueList;

const StIssueList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ChipWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  width: 100%;
  height: 20%;
  border-bottom: 0.2rem solid ${COLOR.MAIN_BORDER};
`;

const ChipP = styled.p`
  width: 100%;
  height: 30%;
  padding: 1rem 0rem 0rem 1rem;
  margin-left: 1rem;
  font-size: 1.3rem;
  color: ${COLOR.MAIN_BLUE};
`;

const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80%;
`;

const ListBox = styled(Box)`
  width: 30%;
  height: 100%;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-direction: column;
  width: 75%;
  height: 100%;
  border-left: 0.1rem solid ${COLOR.MAIN_BORDER};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  width: 100%;
  height: 20%;
  margin-top: 0.5rem;
  border-bottom: 0.1rem solid ${COLOR.MAIN_BORDER};
`;

const TitleP = styled(Typography)`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: bold;
`;

const PreviewWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 2rem;
  border-bottom: 1px solid ${COLOR.MAIN_BORDER};
  font-size: 2rem;
  text-align: justify;
  line-height: 2rem;
  overflow-y: scroll;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 1rem;
`;

const UseBtn = styled(Button)`
  width: 17rem;
  height: 4.5rem;
  border-radius: 0.8rem;
  font-size: 1.5rem;
`;
