import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useState } from "react";

import {
  Avatar,
  FormControl,
  InputLabel,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { repoDataAtomFamily } from "../../recoil/repoData";

const options = [
  { value: "1", label: "AgainIoT", src: "/static/images/avatar/1.jpg" },
  { value: "2", label: "AgainIoT2", src: "/static/images/avatar/2.jpg" },
  { value: "3", label: "AgainIoT3", src: "/static/images/avatar/3.jpg" },
];

// props -> type(userName) data(userRepoName) labelText(Owner*)
export const SelectAuto = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(
    repoDataAtomFamily(props.type),
  );

  const handleChange = (event) => {
    console.log("pre:", selectValue);
    setSelectValue(event.target.value);
    console.log("after:", event.target.value);
  };

  return (
    <StSelectAuto>
      <SelectInputFormControl>
        <SelectLabelWrapper
          shrink
          variant="standard"
          htmlFor={props.labelText}
          id={props.labelText}
        >
          {props.labelText}
        </SelectLabelWrapper>
        <SelectContainer
          labelId={props.labelText}
          id={props.labelText}
          value={selectValue}
          onChange={handleChange}
          autoWidth
          renderValue={(selected) => {
            console.log("selected", selected);
            return (
              <RenderOptionItem>
                <ItmeAvatar
                  src={props.data.find((it) => it.id === selected)?.avatar}
                ></ItmeAvatar>

                <OPtionItemText id={selected} primary={selected} />
              </RenderOptionItem>
            );
          }}
        >
          {props.data.map((option, index) => (
            <MenuOptionItem key={option.id} value={option.id} label={option.id}>
              <OptionItemAvatar>
                <ItmeAvatar src={option.avatar}>
                  {/* <FaceIcon sx={{ fontSize: 30, border: 1 }} color="primary" /> */}
                </ItmeAvatar>
              </OptionItemAvatar>
              <OPtionItemText id={option.id} primary={option.id} />
            </MenuOptionItem>
          ))}
        </SelectContainer>
      </SelectInputFormControl>
    </StSelectAuto>
  );
};

// SelectInputContainer
const StSelectAuto = styled.div`
  display: flex;
  width: 100%;
  /* min-width: 8rem; */
`;

const SelectInputFormControl = styled(FormControl)`
  min-width: 8rem;
  margin: 0.1rem;
`;

const SelectLabelWrapper = styled(InputLabel)`
  display: flex;
  position: static;
  height: 100%;
  align-items: center;
  transform-origin: center left;
  gap: 0.5rem;

  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  color: ${COLOR.MAIN_BLACK};

  & .MuiFormLabel-root {
    transform-origin: center left;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const SelectContainer = styled(Select)`
  display: flex;

  & .MuiSelect-select {
    padding: 0.5rem 2rem;
    width: 100%;
    height: 4rem;
  }
  & .MuiInputBase-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .MuiList-root {
    border-radius: 3rem;
  }

  & .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
    background-color: red;
  }

  & .MuiListItemText-root {
    display: flex;
    justify-content: left;
    align-items: flex-end;
  }
  & .MuiTypography-root {
    font-size: 1.4rem;
  }

  & .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
    border-radius: 3rem;
  }
`;

const MenuOptionItem = styled(MenuItem)`
  border-radius: 1rem;
  padding: 1rem 2.5rem;
`;

const RenderOptionItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 9rem;
  width: 100%;
  gap: 3rem;
`;
const OptionItemAvatar = styled(ListItemAvatar)`
  display: flex;
  width: 2.4rem;
`;
const ItmeAvatar = styled(Avatar)`
  display: flex;
  margin: 0;
  &.MuiAvatar-root {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
const OPtionItemText = styled(ListItemText)`
  margin: 0;
  width: 50%;
  & .MuiTypography-root {
    font-size: 1.3rem;
  }
`;
