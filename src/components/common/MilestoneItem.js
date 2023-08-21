
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import Input from "./Input";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Expand } from "@mui/icons-material";



const MilestoneItem = (placeHolder, sx) => {
  const [title, setTitle] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div>
      <Accordion expanded={isOpen} >
        <div>
          {!(isOpen)? (
            <AccordionSummary
              onClick={handleAccordion}
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div>
                <Typography value={title}>title</Typography>
              </div>
            </AccordionSummary>
          ):(
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div>
                <Input name="title" placeHolder="Title"/>
              </div>
            </AccordionSummary>
          )}
        </div>

        <AccordionDetails>
          <div>
            <Input name="dueDate" placeHolder="Due date (optional)"/>
            <br></br>
            <br></br>
            <br></br>
            <TextField
              name="decription"
              sx={{ width: "80rem"}}
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

