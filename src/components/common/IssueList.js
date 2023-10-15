import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { issueSelectedState, selectedTitle } from "../../recoil/issueState";
import styled from "styled-components";
import { Interweave, Markup } from "interweave";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import * as formSchema from "github-formschema-converter";
import IssueChip from "./IssueChip";
import { eachStepState, modalState } from "../../recoil/commonState";
import { COLOR } from "../../styles/color";

const IssueList = (props) => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  const [temTitle, setTemTitle] = useRecoilState(selectedTitle);
  const [modalValue, setModalValue] = useRecoilState(modalState("issue"));
  const [selectedInfo, setSelectedInfo] = useRecoilState(issueSelectedState({
    temTitle: "",
    uname: "",
    desc: "",
    title: "",
  }));

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
  const tmpIW = (c) => {
    return <Interweave content={c} />;
  };
  const handleCheck = async (temTitle, temId) => {
    const rst = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/file/issue/${temId}`,
    );
    // setContent(rst.data);
    setTemTitle(temTitle);
    const tmp = await formSchema.yaml2html(rst.data);
    setContent(tmp);
    console.log(selectedInfo);
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
                  <ListSubheader>{`${it[0][1]}`}</ListSubheader>
                  {it[1][1].map((item) => (
                    <ListItem
                      components="div"
                      onClick={() => {
                        handleCheck(item.title, item.id);
                      }}
                      key={item.title}
                    >
                      <ListItemButton>
                        <ListItemText primary={`${item.title}`} />
                      </ListItemButton>
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
            <div>{tmpIW(content)}</div>
          </PreviewWrapper>
          <BtnWrapper>
            <UseBtn variant="contained" onClick={handleOpen}>
              Use template
            </UseBtn>
          </BtnWrapper>
        </ContentDiv>
      </SelectDiv>
    </StIssueList>
  );
};

export default IssueList;

const StIssueList = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ChipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  height: 20%;
`;

const ChipP = styled.p`
  width: 100%;
  height: 30%;
  font-size: 1.3rem;
  padding: 1rem 0rem 0rem 1rem;
  margin-left: 1rem;
`;

const SelectDiv = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
`;

const ListBox = styled(Box)`
  height: 100%;
  width: 30%;
  max-width: 36rem;
  max-height: 90%;
`;

const ContentDiv = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-direction: column;
  border-left: 0.2rem solid ${COLOR.MAIN_HOVER};
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: left;
  width: 100%;
  border-bottom: 0.2rem solid ${COLOR.MAIN_HOVER};
`;

const TitleP = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
`;

const PreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  text-align: justify;
  line-height: 2rem;
  padding: 2rem;
  overflow-y: scroll;
`;
const BtnWrapper = styled.div``;

const UseBtn = styled(Button)`
  width: 17rem;
  height: 4.5rem;
  font-size: 1.5rem;
  border-radius: 0.8rem;
`;
