import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRecoilState, useRecoilValue } from "recoil";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Chip from "@mui/material/Chip";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Checkbox from "@mui/material/Checkbox";

export const SelectChip = (props) => {
  const handleShowAllClick = () => {
    console.info("Show all");
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <StSelectChip>
      <div>
        <Box role="group" aria-labelledby={props.chipLabel}>
          <ChipAccordian expanded={isOpen}>
            <ChipAccordianSMRY
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Stack>
                <ChipCategory id={props.chipLabel}>
                  {props.chipLabel}
                </ChipCategory>
                <ChipGroup
                  data={props.data}
                  chipLabel={props.chipLabel}
                  type={props.type}
                  limit={8}
                  top={true}
                />
                {isOpen && (
                  <ChipGroup
                    data={props.data}
                    chipLabel={props.chipLabel}
                    type={props.type}
                    limit={7}
                  />
                )}
                <IconContainer onClick={handleShowAllClick}>
                  <ExpandMoreIcon
                    sx={{ flexDirection: "row", justifyContent: "center" }}
                  />
                </IconContainer>
              </Stack>
            </ChipAccordianSMRY>
          </ChipAccordian>
        </Box>
      </div>
    </StSelectChip>
  );
};

export const ChipGroup = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(props.type);

  const handleChipChange = (target) => {
    if (!selectValue.includes(target)) {
      console.log(`${target}이 추가`);
      setSelectValue([...selectValue, target]);
    } else {
      console.log(`${target}이 삭제`);
      const newChipList = selectValue.filter((it) => it !== target);
      setSelectValue(newChipList);
    }
  };

  return (
    <StChipGroup>
      <div>
        <ChipBox role="group" aria-labelledby={props.chipLabel}>
          {props.data
            .filter((it) =>
              props.top ? it.key < props.limit : it.key > props.limit,
            )
            .map((it) => {
              return (
                <ChipWrapper
                  key={it.key}
                  variant="outlined"
                  color={selectValue.includes(it.label) ? "primary" : "default"}
                  label={it.label}
                  icon={
                    selectValue.includes(it.label) ? (
                      <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />
                    ) : undefined
                  }
                  onClick={(event) => {
                    handleChipChange(it.label);
                  }}
                ></ChipWrapper>
              );
            })}
        </ChipBox>
      </div>
    </StChipGroup>
  );
};

const StSelectChip = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* width: 50rem; */
`;
const ChipAccordian = styled(Accordion)`
  display: flex;
  flex-direction: column;
  width: 40rem;
  min-height: 10rem;

  & .MuiAccordionSummary-root {
    padding: 1.4rem 1.2rem 0 1.2rem;
  }
  & .MuiPaper-root-MuiAccordion-root::before {
    border-top: none;
  }
`;

const ChipCategory = styled(Typography)`
  margin-left: 0.4rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

const ChipAccordianSMRY = styled(AccordionSummary)`
  gap: 1rem;
  & .Mui-expanded {
    margin-top: 0rem;
    width: 100%;
  }

  & .MuiAccordionSummary-content {
    margin-bottom: 0.5rem;
    width: 100%;
    height: 100%;
  }

  & .MuiStack-root {
    width: 100%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  & .MuiAccordionSummary-content {
    margin: 0;
  }
`;

// ChipGroup

const StChipGroup = styled.div`
  display: flex;
`;

const ChipBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ChipWrapper = styled(Chip)`
  margin: 0.2rem;
`;
