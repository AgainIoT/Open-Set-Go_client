import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Button } from "@mui/material";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import dummy from "../../dummy/dummyIssueTemplate.json";
import {
  templateContent,
  templatePreviewState,
  templateSelectState,
} from "../../recoil/templateState";
import { eachStepState, modalState } from "../../recoil/commonState";
// import { style } from "@mui/system";

const IssueList = (props) => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");

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

  const handleCheck = (temTitle, temId) => {
    setContent(`${temTitle}`);
    // const preview = await axios.get(
    //   `${process.env.REACT_APP_SERVER_URL}/file/issue/${temId}`,
    // );
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
      <ContentBtnDiv>
        <ContentP>
          <p>{content}</p>
        </ContentP>
        <UseBtn variant="contained" onClick={handleOpen}>
          Use
        </UseBtn>
      </ContentBtnDiv>
    </StIssueList>
  );
};

export default IssueList;

const StIssueList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  background-color: aqua;
`;

const ListBox = styled(Box)`
  border: 1px solid green;
  height: 100%;
  width: 25%;
`;

const ItemTxt = styled(ListItemText)`
  font-size: 20rem;
`;

const ContentBtnDiv = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-direction: column;
`;

const ContentP = styled.div`
  width: 100%;
  height: 100%;
  font-size: 5rem;
  background-color: green;
`;

const UseBtn = styled(Button)`
  width: 10%;
`;
