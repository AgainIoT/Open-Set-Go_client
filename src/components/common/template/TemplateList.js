import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import {
  templateContent,
  templatePreviewState,
  templateSelectState,
  modalVer,
} from "../../../recoil/templateState";

// props -> type(pr, readme, contributing)
export function TemplateList(props) {
  // React state to track order of items
  const [selectedData, setSelectedData] = useState([]);
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_SERVER_URL + "/file/" + props.type;

  const selectValue = useRecoilValue(templateSelectState(props.type));
  const [showValue, setShowValue] = useRecoilState(
    templatePreviewState(props.type),
  );
  const reorderable = useRecoilValue(modalVer);

  const handleSelect = (value) => {
    setShowValue({
      _id: value._id,
      title: value.title,
      repoName: value.repoName,
      repoUrl: value.repoUrl,
      content: value.content,
    });
    let tmp = selectedData;
    tmp.push(value.title);
    setSelectedData(tmp);
    console.log(selectedData);
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
  };

  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios.get(url);
      if (!completed) {
        if (props.type === "contributing") {
          const list = [];
          result.data.forEach((typeList) => {
            typeList.map((it) => {
              list.push(it);
            });
          });
          setData(list);
        } else {
          setData(result.data);
        }
      }
    }
    get();
    return () => {
      completed = true;
    };
  }, []);

  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);

  return (
    <Item>
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
          {reorderable ? (
            <DragDropContext onDragEnd={handleDrop}>
              <Droppable droppableId="list-container">
                {(provided) => (
                  <div
                    className="list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {selectedData.map((item, index) => (
                      <Draggable key={item} draggableId={item} index={index}>
                        {(provided) => (
                          <div
                            className="item-container"
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <div className="left-item">{item}</div>
                            <button
                              className="right-item"
                              onClick={() => {
                                console.log(item);
                              }}
                            >
                              remove
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ) : (
            <div></div>
          )}
          <div>
            {data.map((it) => (
              <div key={it._id}>
                <ListItem
                  component="div"
                  disablePadding
                  onClick={() => {
                    handleSelect(it);
                  }}
                >
                  <ListItemButton>
                    <ListItemText
                      primary={
                        props.type === "contributing" ? it.type : it.title
                      }
                      id="PR-desc"
                      variant="h6"
                      gutterBottom
                      color="textSecondary"
                      m={2}
                    />
                    <ListItemText
                      primary={
                        props.type === "contributing" ? it.title : it.repoName
                      }
                      id="PR-desc"
                      variant="h6"
                      gutterBottom
                      color="textSecondary"
                    />
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
  marginLeft: 0,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
