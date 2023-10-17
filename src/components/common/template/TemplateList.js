import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  templatePreviewState,
  templateSelectState,
} from "../../../recoil/templateState";
import { Pagination } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { ListItemData } from "../../../data/ListItemData";
import { Item } from "./TemplateComponents";
import { BasicList, ListHeader } from "./LIstUtils";

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

  const starIcon = <StarIcon m={2} />;

  return (
    <Item>
      <ListHeader type={props.type} />
      <BasicList
        data={data}
        subData={"star"}
        handleSelect={handleSelect}
        icon={starIcon}
      />
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
