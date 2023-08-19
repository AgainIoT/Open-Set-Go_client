
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import Input from "./Input";
import TextField from "@mui/material/TextField";
import { useState } from "react";

// const [state, setState] = useState({
//   title:"",
//   dueDate:"",
//   description: 1,
// });

export default function BasicAccordion(placeHolder) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Input placeHolder="Title"/>
            <br></br>
            <Input placeHolder="Due date (optional)"/>
            <br></br>
            <TextField
              sx={{ width: "150ch"}}
              multiline
              rows={8}
              placeholder="Description"
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

