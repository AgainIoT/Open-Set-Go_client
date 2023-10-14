import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  templatePreviewState,
  templateSelectState,
} from "../../../recoil/templateState";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { ListItemData } from "../../../data/ListItem";

// props -> type(pr, readme, contributing)
export function TemplateList(props) {
  const [data, setData] = useState([]);
  let url = process.env.REACT_APP_SERVER_URL + "/file/" + props.type;

  const selectValue = useRecoilValue(templateSelectState(props.type));
  const [showValue, setShowValue] = useRecoilState(
    templatePreviewState(props.type),
  );
  const handleSelect = async (value) => {
    const content = await axios.get(url + "/" + value.id);
    value.content = content.data;
    setShowValue([value]);
  };

  useEffect(() => {
    let completed = false;

    async function get() {
      if (!completed) {
        // page query for only contributing and readme for now.
        url += "?page=1";
        const result = await axios.get(url);
        console.log(result);
        setData(refine(result.data));
      }
    }
    get();

    function refine(data) {
      const ret = [];
      data.map((value) => {
        const id = value._id;
        const subtitle = value.repoName;
        const star = value.star;
        let title;
        if (props.type === "pr") {
          title = value.title;
        } else {
          title = value.repoName;
        }
        ret.push(new ListItemData(id, title, subtitle, star));
      });
      console.log(ret);
      return ret;
    }
    return () => {
      completed = true;
    };
  }, []);

  return (
    <Item sx={{ bgcolor: "#F4F4FC", borderRadius: 2 }}>
      <Typography
        component="h1"
        id="modal-title"
        variant="h5"
        textColor="inherit"
        fontWeight="lg"
        mb={1}
      >
        <Box sx={{ fontWeight: "bold", m: 1 }}>{props.type}</Box>
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
          <div>
            {data.map((it) => (
              <div key={it.id}>
                <ListItem
                  component="div"
                  disablePadding
                  onClick={() => {
                    handleSelect(it);
                  }}
                >
                  <ListItemButton>
                    <ListItemText
                      primary={it.title}
                      id="PR-desc"
                      variant="h6"
                      gutterBottom
                      color="textSecondary"
                      m={2}
                    />
                    <StarIcon m={2} />
                    <Typography
                      id="PR-desc"
                      variant="h6"
                      paddingLeft={0.5}
                      disablePadding
                      color="textSecondary"
                    >
                      {it.star}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </div>
            ))}
          </div>
        </List>
      </Box>
    </Item>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  height: "100%",
  padding: theme.spacing(0, 2),
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    width: "100%",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  textAlign: "center",
}));
