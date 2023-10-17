import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Search,
  SearchWrapper,
  SearchIconWrapper,
  StyledInputBase,
  ListWrapper,
} from "./TemplateComponents";

export function ListHeader(props) {
  return (
    <>
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
    </>
  );
}

export function BasicList(props) {
  return (
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
        {props.data.map((it) => (
          <div key={it.id}>
            <ListItem
              component="div"
              disablePadding
              onClick={() => {
                props.handleSelect(it);
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
                {props.icon}
                <Typography
                  id="PR-desc"
                  variant="h6"
                  paddingLeft={0.5}
                  disablePadding
                  color="textSecondary"
                >
                  {it[props.subData]}
                </Typography>
              </ListItemButton>
            </ListItem>
          </div>
        ))}
      </List>
    </ListWrapper>
  );
}

// export function DraggableList(props) {
//   return (
//     <List
//       sx={{
//         width: 360,
//         itemSize: 46,
//         itemCount: selectedData.length,
//         overscanCount: 5,
//       }}
//     >
//       <DragDropContext onDragEnd={handleDrop}>
//         <Droppable droppableId="droppable">
//           {(provided) => (
//             <ul {...provided.droppableProps} ref={provided.innerRef}>
//               {selectedData.map((item, index) => (
//                 <Draggable key={item.id} draggableId={item.id} index={index}>
//                   {(provided, snapshot) => {
//                     if (snapshot.isDragging) {
//                       provided.draggableProps.style.left =
//                         provided.draggableProps.style.offsetLeft;
//                       provided.draggableProps.style.top =
//                         provided.draggableProps.style.offsetTop;
//                     }
//                     return (
//                       <ListItem
//                         components="div"
//                         disablePadding
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         ref={provided.innerRef}
//                       >
//                         <ListItemButton>
//                           <ListItemText
//                             primary={item.title}
//                             id="PR-desc"
//                             variant="h6"
//                             gutterBottom
//                             color="textSecondary"
//                           />
//                           <IconButton
//                             aria-label="delete"
//                             onClick={() => handleRemove(item)}
//                           >
//                             <DeleteIcon fontSize="inherit" />
//                           </IconButton>
//                         </ListItemButton>
//                       </ListItem>
//                     );
//                   }}
//                 </Draggable>
//               ))}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </List>
//   );
// }
