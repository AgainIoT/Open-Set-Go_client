
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import Input from "./Input";
import TextField from "@mui/material/TextField";
import { useState } from "react";



const MilestoneItem = (placeHolder) => {
  const [title, setTitle] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const toggleIsShow = () => setShow(!show);

  const handleAccordion = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          onClick={handleAccordion}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>
            {show ? (
              <Input name="title" width="15rem" placeHolder="Title"/>
            ):(
              <Typography value={title}>title</Typography>
            )}
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <div>
            <Input name="dueDate" placeHolder="Due date (optional)"/>
            <br></br>
            <TextField
              name="decription"
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
};

export default MilestoneItem;

