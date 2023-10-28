import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  templatePreviewState,
  templateSelectState,
  templateListType,
  layoutType,
} from "../../../recoil/templateState";
import { repoDataAtomFamily } from "../../../recoil/repoData";
import { Pagination } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import {
  ListItemData,
  DraggableListItemData,
} from "../../../data/ListItemData";
import { Item, ListWrapper } from "./StyledTemplate";
import { ListHeader, BasicList, DraggableList } from "./LIstUtils";
import { activeState } from "../../../recoil/commonState";
import { reviewRepoDataState } from "../../../recoil/reviewState";

const DATAPERPAGE = 20;

// props -> type(pr, readme, contributing)
export function TemplateList(props) {
  const stepsOwner = useRecoilValue(repoDataAtomFamily("owner"));
  const stepsRepoName = useRecoilValue(repoDataAtomFamily("repoName"));
  const stepsDescription = useRecoilValue(repoDataAtomFamily("desc"));
  const stepsLicense = useRecoilValue(repoDataAtomFamily("licenseName"));

  const reviewOwner = useRecoilValue(reviewRepoDataState("owner"));
  const reviewRepoName = useRecoilValue(reviewRepoDataState("repoName"));
  const reviewDescription = useRecoilValue(reviewRepoDataState("desc"));
  const reviewLicense = useRecoilValue(reviewRepoDataState("licenseName"));

  const [templateData, setTemplateData] = useState([]);
  const [generateData, setGenerateData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const activeStep = useRecoilValue(activeState);

  const [pageRange, setPageRange] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  let url = process.env.REACT_APP_SERVER_URL + "/file/" + props.type;

  const selectValue = useRecoilValue(templateSelectState(props.type));
  const [showValue, setShowValue] = useRecoilState(
    templatePreviewState(props.type),
  );
  const listType = useRecoilValue(templateListType);
  const layoutType_ = useRecoilValue(layoutType);

  const handlePageSelect = async (event, page) => {
    setCurrentPage(page);
    getTemplateData(page);
  };

  const handleSelect = async (selected) => {
    if (listType) {
      const dataList = [...selectedData, selected];
      setSelectedData(dataList);
      const filteredData = generateData.filter(
        (item) => item.id !== selected.id,
      );
      setGenerateData(filteredData);
      setShowValue(dataList);
    } else {
      const content = await axios.get(url + "/" + selected.id);
      const tmp = JSON.parse(JSON.stringify(selected));
      tmp.content = content.data;
      setShowValue([tmp]);
    }
  };

  const handleRemove = (selected) => {
    const filteredData = selectedData.filter((item) => item.id !== selected.id);
    setSelectedData(filteredData);
    setGenerateData(
      [...generateData, selected].sort((a, b) => a.index - b.index),
    );
    setShowValue(filteredData);
  };

  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    let updatedList = [...selectedData];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setSelectedData(updatedList);
    setShowValue(updatedList);
  };

  function refineTemplateData(data) {
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

  function refineGenerateData(data) {
    const dataList = data.map((value) => {
      const id = value._id;
      const index = value.index;
      const title = value.type;
      const content = value.content;
      return new DraggableListItemData(id, title, index, content);
    });
    return dataList.sort((a, b) => a.index - b.index);
  }

  async function getGenerateData() {
    let owner, repoName, description, license;
    if (layoutType_ === "steps") {
      owner = stepsOwner;
      repoName = stepsRepoName;
      description = stepsDescription;
      license = stepsLicense;
    } else {
      owner = reviewOwner;
      repoName = reviewRepoName;
      description = reviewDescription;
      license = reviewLicense;
    }
    console.log(license);
    console.log(description);
    if (props.type === "contributing" || props.type === "readme") {
      const reulst = await axios.post(url + "/generate", {
        owner: owner ? owner : "owner",
        repoName: repoName ? repoName : "owner",
        description: description,
        license: license,
      });
      setGenerateData(refineGenerateData(reulst.data));
    }
  }

  async function getTemplateData(page) {
    // page query for only contributing and readme for now.
    const result = await axios.get(url + "?page=" + page);
    setTemplateData(refineTemplateData(result.data));
  }

  async function getDataAmount() {
    const dataAmount = (await axios.get(url + "/amount")).data.amount;
    const pageCount = Math.ceil(dataAmount / DATAPERPAGE);
    setPageRange(pageCount);
  }

  useEffect(() => {
    let completed = false;
    if (!completed) {
      getGenerateData();
      getTemplateData(1);
    }
    getDataAmount();

    return () => {
      completed = true;
      setSelectedData([]);
    };
  }, [listType]);

  const starIcon = <StarIcon m={2} />;
  const deleteIcon = <DeleteIcon fontSize="inherit" />;

  return (
    <Item>
      <ListHeader type={props.type} />
      <ListWrapper>
        {listType ? (
          <DraggableList
            data={selectedData}
            handleDrop={handleDrop}
            handleRemove={handleRemove}
            icon={deleteIcon}
          />
        ) : null}
        <BasicList
          data={listType ? generateData : templateData}
          subData={"star"}
          handleSelect={handleSelect}
          icon={listType ? null : starIcon}
        />
      </ListWrapper>
      {listType ? null : (
        <Pagination
          count={pageRange}
          defaultPage={1}
          siblingCount={1}
          page={currentPage}
          onChange={handlePageSelect}
          color="primary"
        />
      )}
    </Item>
  );
}

TemplateList.propTypes = {
  type: PropTypes.string,
};
