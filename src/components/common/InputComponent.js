import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import HelpIcon from "@mui/icons-material/Help";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import FormHelperText from "@mui/material/FormHelperText";

import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import ListItemAvatar from "@mui/material/ListItemAvatar";

import Avatar from "@mui/material/Avatar";
import FaceIcon from "@mui/icons-material/Face";
import { ListItemText, TextField } from "@mui/material";
import { COLOR } from "../../styles/color";
import { useRecoilState } from "recoil";
import { repoDataAtomFamily } from "../../recoil/repoData";

export const TextInputContainer = (props) => {
  const [helperText, setHelperText] = useState(" ");
  const [inputValue, setInputValue] = useRecoilState(
    repoDataAtomFamily(props.type),
  );
  const [checkValue, setCheckValue] = useRecoilState(
    repoDataAtomFamily("checkRepoName"),
  );

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    if (props.error) {
      console.log("e", e.target.value);
      //공백인 경우 defaultText로 바꾼다.
      if (e.target.value === "") {
        return setHelperText("defaultText");
      } else if (props.validateCheck) {
        return setHelperText("is available");
      } else {
        return setHelperText("checking availably");
      }
    }
  };

  const HelperTextContainer = () => {
    const textData = [
      {
        type: "none",
        text: "New repository name must not be blank",
        textColor: COLOR.MAIN_BLUE,
      },
      {
        type: "checking",
        text: "Checking availability",
        textColor: COLOR.MAIN_BLACK,
      },
      { type: "checked", text: "", textColor: COLOR.MAIN_BORDER },
      {
        type: "exist",
        text: "The repository blog already exists on this account.",
        textColor: COLOR.MAIN_BLUE,
      },
    ];
    return (
      <>
        <FormHelperTextWrapper></FormHelperTextWrapper>
      </>
    );
  };

  return (
    <StInputContainer>
      <InputFormControl>
        <LabelContainer>
          <InputLabelWrapper shrink variant="standard" htmlFor="inputField">
            {props.labelText}
            {props.option && <OptionLabel>{props.option}</OptionLabel>}
          </InputLabelWrapper>
          <TooltipContainer title="test" arrow placement="top">
            <TooltipBtn>
              <HelpIcon />
            </TooltipBtn>
          </TooltipContainer>
        </LabelContainer>
        {props.fieldType === 1 ? (
          <InputField
            id="inputField"
            variant="outlined"
            fieldsize={5}
            error={props.error}
            helperText={helperText}
            onInput={(e) => handleOnChange(e)}
          />
        ) : (
          <InputField
            id="inputField"
            multiline
            fullWidth
            rows={props.fieldType}
            fieldsize={100}
          />
        )}
      </InputFormControl>
    </StInputContainer>
  );
};

TextInputContainer.propTypes = { labelText: PropTypes.string.isRequired };

const options = [
  { value: "1", label: "AgainIoT", src: "/static/images/avatar/1.jpg" },
  { value: "2", label: "AgainIoT2", src: "/static/images/avatar/2.jpg" },
  { value: "3", label: "AgainIoT3", src: "/static/images/avatar/3.jpg" },
];

export const SelectInputContainer = (props) => {
  const [owner, setOwner] = useState(
    options.filter((it) => it.value === "1").map((it) => it.label),
  );

  const handleChange = (event) => {
    console.log("pre:", owner);
    setOwner(event.target.value);
    console.log("after:", event.target.value);
  };

  return (
    <StInputContainer>
      <SelectInputFormControl>
        <InputLabelWrapper
          shrink
          variant="standard"
          htmlFor={props.labelText}
          id={props.labelText}
        >
          {props.labelText}
        </InputLabelWrapper>
        <SelectContainer
          labelId={props.labelText}
          id={props.labelText}
          value={owner}
          onChange={handleChange}
          autoWidth
          renderValue={(selected) => (
            <RenderOptionItem>
              <ItmeAvatar sx={{ width: 24, height: 24 }}>
                {/* <FaceIcon sx={{ fontSize: 30, border: 1 }} color="primary" /> */}
              </ItmeAvatar>

              <OPtionItemText id={selected.value} primary={selected} />
            </RenderOptionItem>
          )}
        >
          {options.map((option, index) => (
            <MenuOptionItem
              key={option.value}
              value={option.label}
              label={option.label}
            >
              <OptionItemAvatar>
                <ItmeAvatar sx={{ width: 24, height: 24 }}>
                  {/* <FaceIcon sx={{ fontSize: 30, border: 1 }} color="primary" /> */}
                </ItmeAvatar>
              </OptionItemAvatar>
              <OPtionItemText id={option.value} primary={option.label} />
            </MenuOptionItem>
          ))}
        </SelectContainer>
      </SelectInputFormControl>
    </StInputContainer>
  );
};

const StInputContainer = styled.div`
  display: flex;
  width: 100%;
  /* min-width: 8rem; */
`;

const InputFormControl = styled(FormControl)`
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const InputLabelWrapper = styled(InputLabel)`
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

const OptionLabel = styled.p`
  display: flex;
  color: ${COLOR.BORDER_GRAY};
  font-size: 1.1rem;
`;

const TooltipContainer = styled(Tooltip)`
  & .MuiTooltip-popper {
    transform-origin: center bottom;
    margin-bottom: 0rem;
  }
`;

const TooltipBtn = styled(IconButton)`
  padding: 0%;
`;

const InputField = styled(TextField)`
  border: none;
  label + & {
    margin-top: 1rem;
  }
  background: white;

  & .MuiInputBase-root {
    /* border: none;
    outline: none; */
    padding: 1rem 2rem 1rem 2rem;

    // shadow
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.1);
      outline: none;
    }
    &:hover {
      border: none;
    }
    &::before {
      border: 0.1rem solid ${COLOR.MAIN_BORDER};
    }
    &::after {
      border: 1px solid purple;
    }
    &.Mui-focused {
      border: none;
      outline: none;
    }
  }

  & .MuiInputBase-input {
    position: relative;
    height: 3rem;

    border-radius: 0.4rem;

    font-size: 1.4rem;
    border: none;
    padding: 0;
    &:hover {
      outline: none;
    }
    &::before {
      border: 0.1rem solid ${COLOR.MAIN_BORDER};
    }
    &::after {
      border: 1px solid purple;
    }
  }

  & .MuiOutlinedInput-root {
    border: none;

    &:hover {
      border: none;
    }
    &.Mui-focused {
      box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.1);
    }

    /* &:focus-within {
      outline: none;
    } */
  }

  &.Mui-focused {
    border: none;
  }
  /* & .MuiInputBase-root::before {
    height: 3rem;
    border-radius: 20rem;
    border: none;
    //border: 0.1rem solid lightgray;
  } */

  & .MuiInput-root {
    &:hover {
      border-radius: 20rem;
      border: none;
      margin-top: 80px;
    }
  }

  &.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    border: none;
  }

  /* &.MuiInputBase-root
    .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before {
    border: none;
    box-shadow: 0.1rem 0.2rem 0.9rem lightgray;
  } */

  &.Mui-error {
    border: 1px solid red;
  }
`;

const FormHelperTextWrapper = styled(FormHelperText)``;

// SelectInputContainer
const SelectInputFormControl = styled(FormControl)`
  min-width: 8rem;
  margin: 0.1rem;
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
`;
const OPtionItemText = styled(ListItemText)`
  margin: 0;
  width: 50%;
  & .MuiTypography-root {
    font-size: 1.3rem;
  }
`;
