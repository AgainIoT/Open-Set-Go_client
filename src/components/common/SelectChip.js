import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Box, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Chip from "@mui/material/Chip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";

//props-> data, type,
export const SelectChip = (props) => {
  const handleShowAllClick = () => {
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
                  limit={props.limit + 1}
                  top={true}
                />
                {isOpen && (
                  <ChipGroup
                    data={props.data}
                    chipLabel={props.chipLabel}
                    type={props.type}
                    limit={props.limit}
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
      setSelectValue([...selectValue, target]);
    } else {
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
              props.top ? it.id < props.limit : it.id > props.limit,
            )
            .map((it) => {
              return (
                <ChipWrapper
                  key={it.option}
                  variant="outlined"
                  color={
                    selectValue.includes(it.option) ? "primary" : "default"
                  }
                  label={it.option}
                  icon={
                    selectValue.includes(it.option) ? (
                      <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />
                    ) : undefined
                  }
                  onClick={(event) => {
                    handleChipChange(it.option);
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
  width: 100%;
  gap: 1rem;
  & .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    box-shadow: none;
  }
`;
const ChipAccordian = styled(Accordion)`
  display: flex;
  flex-direction: column;
  width: 100%;
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
