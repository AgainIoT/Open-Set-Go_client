import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
const IssueList = (props) => {
  return (
    // <StIssueList>
    //   <List
    //     sx={{
    //       width: "100%",
    //       maxWidth: 360,
    //       bgcolor: "background.paper",
    //       position: "relative",
    //       overflow: "auto",
    //       maxHeight: 300,
    //       "& ul": { padding: 0 },
    //     }}
    //     subheader={<li />}
    //   >
    //     {[0, 1, 2, 3, 4].map((sectionId) => (
    //       <li key={`section-${sectionId}`}>
    //         <ul>
    //           <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
    //           {[0, 1, 2].map((item) => (
    //             <ListItem key={`item-${sectionId}-${item}`}>
    //               <ListItemText primary={`Item ${item}`} />
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </li>
    //     ))}
    //   </List>
    // </StIssueList>
    <StIssueList>
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
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`}>
              <ul>
                <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                {[0, 1, 2].map((item) => (
                  <ListItemButton key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`Item ${item}`} />
                  </ListItemButton>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </Box>
    </StIssueList>
  );
};

export default IssueList;

const StIssueList=styled.div`
width: 100%;
height: 100%;
`;

// const Item = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(1),
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   color: theme.palette.text.secondary,
//   textAlign: "center",
// }));
