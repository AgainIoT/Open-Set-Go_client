import React, { useState, useEffect } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import { useRecoilState, useRecoilValue } from "recoil";
import TemplateTitle from "./TemplateTitle";
import { prTemplateState } from "../../../recoil/templateState";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// 여기부터 스크롤뷰
const renderRow = (props) => {
  const [data, setData] = useState([]);
  const url = "${process.env.REACT_APP_URL}/file/pr";
  const [selectValue, setSelectValue] = useRecoilState(prTemplateState);

  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios.get(url);
      if (!completed) setData(result.data);
    }
    get();
    return() => {
      completed = true;
    };
  }, []);

  return (
    <div>
      {data.map((it)=>(
        <div key = {it._id}>
          <ListItem component="div" disablePadding onClick={() => setSelectValue({_id:it._id, title: it.title, repoName: it.repoName, content:it.content})
          }>
            <ListItemButton>
              <ListItemText primary={it.title} id="PR-desc" variant="h6" gutterBottom color="textSecondary" m={2} />
            </ListItemButton>
          </ListItem>
        </div>

      ))
      }
    </div>
  );
};

export  function TemplateList(props) {
  return (
    <Item><Typography
      component="h1"
      id="modal-title"
      variant="h5"
      textColor="inherit"
      fontWeight="lg"
      mb={1}
    >
      <Box sx={{ fontWeight: "bold", m: 1 }}>PR Template</Box>
    </Typography>
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search Template"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
    <Box
      sx={{ width: "100%", height: "100%", maxWidth: 360, bgcolor: "background.paper", maxHeight: 400 }}
    >
      <FixedSizeList
        height={610} // 높이 모달창 사이즈에 맞게 유동적으로 조절할 수 있도록 수정하기
        width={360}
        itemSize={46}
        itemCount={1}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box></Item>
  );
}
