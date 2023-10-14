import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
// import dummy from "../../dummy/dummyIssueTemplate.json";
// import IssueChip from "./IssueChip";
import {
  templateContent,
  templatePreviewState,
  templateSelectState,
} from "../../recoil/templateState";
import { eachStepState, modalState } from "../../recoil/commonState";
import { COLOR } from "../../styles/color";
// import { style } from "@mui/system";

const IssueList = (props) => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState(" ");
  const [modalValue, setModalValue] = useRecoilState(modalState("issue"));

  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/file/issue`,
      );
      if (!completed) {
        const list = [];
        // console.log(result.data); //이건 잘 됨
        result.data.map((it) => {
          const tmp = Object.entries(it);
          list.push(tmp);
        });
        setData(list);
        console.log(data);
      }
    }
    get();
    return () => {
      completed = true;
    };
  }, []);

  const handleCheck = async (temTitle, temId) => {
    const content = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/file/issue/${temId}`,
    );
    setContent(content.data);
    console.log(typeof(content.data));
    setTitle(temTitle);
  };

  const handleOpen = () => setModalValue(true);

  return (
    <StIssueList>
      <ListBox
        sx={{
          width: "100%",
          height: "100%",
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
                      <ItemTxt primary={`${item.title}`} />
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
          <TitleP
            id="PR-title"
            variant="h2"
            textColor="inherit"
            fontWeight="lg"
            m={2}
          >
            {title}
          </TitleP>
        </TitleWrapper>
        <PreviewWrapper>
          <p>{content}</p>
        </PreviewWrapper>
        <BtnWrapper>
          <UseBtn variant="contained" onClick={handleOpen}>
            Use template
          </UseBtn>
        </BtnWrapper>
      </ContentDiv>
    </StIssueList>
  );
};

export default IssueList;

const StIssueList = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const ListBox = styled(Box)`
  height: 110%;
  width: 25%;
`;

const ItemTxt = styled(ListItemText)`
  font-size: 20rem;
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

const SelectedTemWrapper = styled.div`
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
`;
const BtnWrapper = styled.div``;

const UseBtn = styled(Button)`
  width: 17rem;
  height: 4.5rem;
  font-size: 1.5rem;
  border-radius: 0.8rem;
`;
