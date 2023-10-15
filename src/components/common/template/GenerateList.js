import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  templatePreviewState,
  templateSelectState,
} from "../../../recoil/templateState";
import { repoDataAtomFamily } from "../../../recoil/repoData";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import { DraggableListItemData } from "../../../data/ListItemData";
import {
  Item,
  Search,
  SearchWrapper,
  SearchIconWrapper,
  StyledInputBase,
  ListWrapper,
} from "./TemplateCoponents";

// props -> type(pr, readme, contributing)
export function GenerateList(props) {
  const owner = useRecoilValue(repoDataAtomFamily("owner"));
  const repoName = useRecoilValue(repoDataAtomFamily("repoName"));
  const desc = useRecoilValue(repoDataAtomFamily("desc"));
  const license = useRecoilValue(repoDataAtomFamily("licenseName"));
  // React state to track order of items
  const [selectedData, setSelectedData] = useState([]);
  const [data, setData] = useState([]);
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
      const result = await axios.post(url, {
        owner,
        repoName,
        desc,
        license,
      });
      if (!completed) {
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
      <ListWrapper>
        <List
          sx={{
            width: 360,
            itemSize: 46,
            itemCount: selectedData.length,
            overscanCount: 5,
          }}
        >
          <DragDropContext onDragEnd={handleDrop}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {selectedData.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        if (snapshot.isDragging) {
                          provided.draggableProps.style.left =
                            provided.draggableProps.style.offsetLeft;
                          provided.draggableProps.style.top =
                            provided.draggableProps.style.offsetTop;
                        }
                        return (
                          <ListItem
                            components="div"
                            disablePadding
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <ListItemButton>
                              <ListItemText
                                primary={item.title}
                                id="PR-desc"
                                variant="h6"
                                gutterBottom
                                color="textSecondary"
                              />
                              <IconButton
                                aria-label="delete"
                                onClick={() => handleRemove(item)}
                              >
                                <DeleteIcon fontSize="inherit" />
                              </IconButton>
                            </ListItemButton>
                          </ListItem>
                        );
                      }}
                    </Draggable>
                  ))}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </List>
        <List
          sx={{
            width: 360,
            itemSize: 46,
            itemCount: 20,
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
                  </ListItemButton>
                </ListItem>
              </div>
            ))}
          </div>
        </List>
      </ListWrapper>
    </Item>
  );
}
