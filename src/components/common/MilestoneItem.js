
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import Input from "./Input";
import { Button } from "@mui/material";
import Box from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Expand } from "@mui/icons-material";
import { useRef } from "react";


const MilestoneItem = (placeHolder, sx, onCreate, id, title, dueDate, description, onRemove) => {
  const accordRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("");

  const handleAccordion = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleRemove = () => {
    return;
  };


  return (
    <div>
      <Accordion expanded={isOpen}>
        <div>
          {!(isOpen)? (
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              onClick={handleAccordion}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div>
                <AccordSumLayout>
                  <Typography value={title}>{title}</Typography>
                </AccordSumLayout>
              </div>
            </AccordionSummary>
          ):(
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div>
                <Input name="title" value={title} placeHolder="Title"/>
              </div>
            </AccordionSummary>
          )}
        </div>

        <AccordionDetails>
          <div>
            <Input value={dueDate} name="dueDate" placeHolder="Due date (optional)"/>
            <br></br>
            <br></br>
            <br></br>
            <TextField
              name="decription"
              value={description}
              sx={{ width: "60rem"}}
              multiline
              rows={8}
              placeholder="Description"
            />
            <br></br>
            <ButtonWrapper variant="outlined" onClick={handleRemove}>Primary</ButtonWrapper>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const AccordSumLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled(Button)`
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
  float: right;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;



export default MilestoneItem;

