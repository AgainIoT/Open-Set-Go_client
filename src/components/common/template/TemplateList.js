import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  templatePreviewState,
  templateSelectState,
} from "../../../recoil/templateState";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { Pagination } from "@mui/material";
import axios from "axios";
import { ListItemData } from "../../../data/ListItemData";
import {
  Item,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ListWrapper,
  SearchWrapper,
} from "./TemplateComponents";

const DATAPERPAGE = 20;

// props -> type(pr, readme, contributing)
export function TemplateList(props) {
  const [data, setData] = useState([]);
  const [pageRange, setPageRange] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  let url = process.env.REACT_APP_SERVER_URL + "/file/" + props.type;

  const selectValue = useRecoilValue(templateSelectState(props.type));
  const [showValue, setShowValue] = useRecoilState(
    templatePreviewState(props.type),
  );

  const handlePageSelect = async (event, page) => {
    setCurrentPage(page);
    getData(false, page);
  };

  const handleSelect = async (value) => {
    const content = await axios.get(url + "/" + value.id);
    const tmp = JSON.parse(JSON.stringify(value));
    tmp.content = content.data;
    setShowValue([tmp]);
  };

  function refine(data) {
    const dataList = data.map((value) => {
      const id = value._id;
      const subtitle = value.repoName;
      const star = value.star;
      let title = "";
      if (props.type === "pr") {
        title = value.title;
      } else {
        title = value.repoName;
      }
      return new ListItemData(id, title, subtitle, star);
    });
    return dataList;
  }

  async function getData(validate, page) {
    if (!validate) {
      // page query for only contributing and readme for now.
      const result = await axios.get(url + "?page=" + page);
      setData(refine(result.data));
    }
  }

  async function getDataAmount() {
    const dataAmount = (await axios.get(url + "/amount")).data.amount;
    const pageCount = Math.ceil(dataAmount / DATAPERPAGE);
    setPageRange(pageCount);
  }

  useEffect(() => {
    let completed = false;
    getData(completed, 1);
    getDataAmount();

    return () => {
      completed = true;
    };
  }, []);

  return (
    <Item>
      <Typography
        component="h1"
        id="modal-title"
        variant="h5"
        textColor="inherit"
        fontWeight="bold"
        m={1}
      >
        {props.type}
      </Typography>
      {/* <div style={{ width: "100%" }}> */}
      <SearchWrapper>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Template"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </SearchWrapper>
      {/* </div> */}
      <ListWrapper>
        <List
          sx={{
            height: "100%",
            width: 360,
            itemSize: 46,
            itemCount: length,
            overscanCount: 5,
          }}
        >
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
        </List>
      </ListWrapper>
      <Pagination
        count={pageRange}
        defaultPage={1}
        siblingCount={1}
        page={currentPage}
        onChange={handlePageSelect}
        color="primary"
      />
    </Item>
  );
}
