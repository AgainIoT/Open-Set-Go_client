import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeState } from "../../../recoil/commonState";
import {
  templatePreviewState,
  templateSelectState,
} from "../../../recoil/templateState";
import { repoDataAtomFamily } from "../../../recoil/repoData";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { DraggableListItemData } from "../../../data/ListItemData";
import { Item, ListWrapper } from "./TemplateComponents";
import { BasicList, DraggableList, ListHeader } from "./LIstUtils";

// props -> type(pr, readme, contributing)
export function GenerateList(props) {
  const owner = useRecoilValue(repoDataAtomFamily("owner"));
  const repoName = useRecoilValue(repoDataAtomFamily("repoName"));
  const description = useRecoilValue(repoDataAtomFamily("desc"));
  const license = useRecoilValue(repoDataAtomFamily("licenseName"));
  // React state to track order of items
  const [selectedData, setSelectedData] = useState([]);
  const [data, setData] = useState([]);
  const activeStep = useRecoilValue(activeState);
  const url =
    process.env.REACT_APP_SERVER_URL + "/file/" + props.type + "/generate";

  const selectValue = useRecoilValue(templateSelectState(props.type));
  const [showValue, setShowValue] = useRecoilState(
    templatePreviewState(props.type),
  );

  const handleSelect = (selected) => {
    const dataList = [...selectedData, selected];
    setSelectedData(dataList);
    const filteredData = data.filter((item) => item.id !== selected.id);
    setData(filteredData);
    setShowValue(dataList);
  };

  const handleRemove = (selected) => {
    const filteredData = selectedData.filter((item) => item.id !== selected.id);
    setSelectedData(filteredData);
    setData([...data, selected].sort((a, b) => a.index - b.index));
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

  useEffect(() => {
    let completed = false;

    async function get() {
      if (!completed && activeStep > 2) {
        const result = await axios.post(url, {
          owner,
          repoName,
          description,
          license,
        });
        setData(refine(result.data));
      }
    }

    function refine(data) {
      const dataList = data.map((value) => {
        const id = value._id;
        const index = value.index;
        const title = value.type;
        const content = value.content;
        return new DraggableListItemData(id, title, index, content);
      });
      return dataList.sort((a, b) => a.index - b.index);
    }
    get();
    return () => {
      completed = true;
    };
  }, []);

  const deleteIcon = <DeleteIcon fontSize="inherit" />;

  return (
    <Item sx={{ bgcolor: "#F4F4FC", borderRadius: 2 }}>
      <ListHeader type={props.type} />
      <ListWrapper>
        <DraggableList
          data={selectedData}
          handleDrop={handleDrop}
          handleRemove={handleRemove}
          icon={deleteIcon}
        />
        <BasicList data={data} handleSelect={handleSelect} />
      </ListWrapper>
    </Item>
  );
}
