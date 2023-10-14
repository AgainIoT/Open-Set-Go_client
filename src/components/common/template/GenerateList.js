import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  templatePreviewState,
  templateSelectState,
} from "../../../recoil/templateState";
import { repoDataAtomFamily } from "../../../recoil/repoData";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";

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
    const filteredData = data.filter((item) => item._id !== selected._id);
    setData(filteredData);
    setShowValue(dataList);
  };

  const handleRemove = (selected) => {
    const filteredData = selectedData.filter(
      (item) => item._id !== selected._id,
    );
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
      const ret = [];
      data.map((value) => {
        const tmp = {
          _id: value._id,
          index: value.index,
          title: value.type,
          subtitle: null,
          repoUrl: null,
          content: value.content,
        };
        ret.push(tmp);
      });
      return ret.sort((a, b) => a.index - b.index);
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
          borderRadius: 2,
        }}
        style={{ overflowX: "hidden", overflowY: "auto" }}
      >
        <List
          sx={{
            width: 360,
            itemSize: 46,
            itemCount: 1,
            overscanCount: 5,
          }}
        >
          <DragDropContext onDragEnd={handleDrop}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {selectedData.map((item, index) => (
                    <Draggable
                      key={item._id}
                      draggableId={item._id}
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
            itemCount: 1,
            overscanCount: 5,
          }}
        >
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
