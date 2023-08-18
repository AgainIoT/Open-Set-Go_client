import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

export default function BasicAccordion() {
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
        <AccordionDetailsContents>
          <AccordionDetails>
            <div>
              <input className="title"></input>
              <br></br>
              <input className="dueDate"></input>
              <br></br>
              <input className="description"></input>
            </div>
          </AccordionDetails>
        </AccordionDetailsContents>
      </Accordion>
    </div>
  );
}

const AccordionDetailsContents = styled.div`
  display: flex;
  flex-direction: column;
  padding
  overflow-x: hidden;
  width: 60vw;
  height: 100%;
`;
