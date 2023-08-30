import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectGitignoreData,
  selectFrameworkData,
} from "../../recoil/repoData";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useAutocomplete from "@mui/material/useAutocomplete";

import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { configure } from "@testing-library/react";
import { Box, Input, Paper, Popper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { lightBlue } from "@mui/material/colors";

export const AutocompleteInput = (props) => {
  const type = props.recoilType;
  console.log("props.recoilType:", props.recoilType);
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option,
  });

  const [selectValue, setSelectValue] = useRecoilState(type);
  // const showData = useRecoilValue(selectFrameworkData);

  const flatProps = {
    options: props.useOption.map((option) => option.label) || "",
  };

  const handleSelect = (value) => {
    if (type === selectFrameworkData) {
      setSelectValue([{ type: "Framework", value: value }]);
    } else {
      setSelectValue([{ type: "Language", value: value }]);
    }
  };

  return (
    <StAutocompleteInput>
      <AutocompleteWrapper
        {...flatProps}
        id="readOnly"
        autoComplete
        clearOnEscape
        autoHighlight
        filterSelectedOptions
        openOnFocus
        value={selectValue.map((option) => option.value)}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.toString()
        }
        onChange={(event, newValue) => {
          newValue ? handleSelect(newValue) : setSelectValue([]);
        }}
        filterOptions={filterOptions}
        forcePopupIcon={true}
        popupIcon={<SearchIcon />}
        renderInput={(params) => (
          <AutocompleteTextField
            {...params}
            label={props.labelText}
            variant="standard"
          />
        )}
      />
    </StAutocompleteInput>
  );
};

export const ReadonlyAutocomplete = () => {
  const showData = useRecoilValue(selectFrameworkData);

  return (
    <StReadonlyAutocomplete>
      <ReadonlyAutocompleteContainer
        readOnly
        multiple
        limitTags={4}
        freeSolo
        id="tags-filled"
        options={showData.map((option) => option.value)}
        value={showData.map((option) => option.value)}
        renderInput={(params) => <ReadOnlyTextField {...params} label="" />}
      />
    </StReadonlyAutocomplete>
  );
};

export const SearchForm = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(props.type);
  const handleChipChange = (target) => {
    if (!selectValue.includes(target)) {
      console.log(`${target}이 추가`);
      setSelectValue([...selectValue, target]);
    }
  };
  const flatProps = {
    options: props.data.map((option) => option.label) || "",
  };

  const icon = <CheckIcon fontSize="small" color="gray" />;
  const checkedIcon = <CheckIcon fontSize="small" />;

  return (
    <StSearchForm>
      <SerachIconWrapper>
        <SearchIcon />
      </SerachIconWrapper>
      <SearchAuto
        {...flatProps}
        value={""}
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <OptionListBox>
            <OptionList
              key={option}
              {...props}
              bgcolor={
                selectValue.includes(option)
                  ? COLOR.MAIN_HOVER
                  : COLOR.MAIN_WHITE
              }
            >
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selectValue.includes(option)}
              />
              {option}
            </OptionList>
          </OptionListBox>
        )}
        renderInput={(params) => (
          <SearchFormField ref={params.InputProps.ref}>
            <SearchInput
              type="text"
              {...params.inputProps}
              label=""
              placeholder="Search..."
            />
          </SearchFormField>
        )}
        onChange={(event, newValue) => {
          newValue ? handleChipChange(newValue) : () => {};
        }}
      />
    </StSearchForm>
  );
};

const StAutocompleteInput = styled.div``;
const AutocompleteWrapper = styled(Autocomplete)`
  width: 100%;
  height: 10rem;
  & .MuiInput-root {
    padding: 0.5rem 0rem 0.5rem 0.5rem;
  }
  & .MuiInputBase-root {
    height: 4.8rem;
  }
  & .MuiAutocomplete-popupIndicator {
    transform: none;
  }
  & .MuiAutocomplete-endAdornment {
    margin-right: 0.7rem;
    float: center;
  }
`;
const AutocompleteTextField = styled(TextField)`
  font-size: 1.6rem;

  & .MuiFormLabel-root {
    padding-left: 0.3rem;
    line-height: 3rem;
    font-size: 1.4rem;
  }
  & .MuiAutocomplete-input {
    font-size: 1.4rem;
  }
`;

const StReadonlyAutocomplete = styled.div``;
const ReadonlyAutocompleteContainer = styled(Autocomplete)`
  & .MuiInputBase-root {
    padding: 1rem 0 1rem 0rem;
    background-color: ${COLOR.MAIN_WHITE};
    border: none;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  & .MuiFilledInput-root {
    padding: 0.7rem 0.5rem;
  }

  & .MuiFormLabel-root::after {
    line-height: 4.5rem;
  }
  & .MuiChip-root {
    border-radius: 1rem;
  }
  & .MuiChip-label {
    font-size: 1.1rem;
  }
`;

const ReadOnlyTextField = styled(TextField)`
  font-size: 1.6rem;

  & .MuiInputLabel-root {
    display: flex;
    font-size: 1.4rem;
    line-height: 5rem;
  }

  & .MuiChip-root {
    font-size: 1.2rem;
  }
`;

// SearchForm

const SharedSearchStyle = `
  position: absolute;
  z-index: 2;
  display: block;
  width: 2rem;
  height: 2rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
`;

const SharedPadding = `
  padding-left: 3.3rem;
`;

const StSearchForm = styled.div`
  margin: 2rem;
  justify-content: center;
`;

const SearchAuto = styled(Autocomplete)`
  & .MuiInput-input {
    padding: 0.4rem 0.4rem 0.6rem 0;
  }
  & .MuiInputBase-root:hover {
    border: none;
  }

  & .MuiInput-root {
    padding-top: 0.2rem;
    padding-bottom: 0.4rem;
    border-radius: 20rem;
    margin-bottom: 1rem;
    border: none;
  }
  & .MuiInputBase-root::before {
    height: 3rem;
    border-radius: 20rem;
    border: 0.1rem solid lightgray;
  }
  & .MuiInputBase-root::after {
    height: 3rem;
    border-radius: 20rem;
    border: none;
  }
  & .MuiInput-root::after {
    border-radius: 20rem;
    border: none;
    margin-top: 80px;
  }
  &
    .css-q0jhri-MuiInputBase-root-MuiInput-root:hover:not(
      .Mui-disabled,
      .Mui-error
    ):before {
    height: 3rem;
    border-radius: 20rem;
    border: none;
    box-shadow: 0.1rem 0.2rem 0.9rem lightgray;
  }
`;

const OptionListBox = styled.div``;
const OptionList = styled.li`
  margin: 0.2rem;
  border-radius: 1.5rem;
  background: ${(props) => props.bgcolor};
`;

const SearchFormField = styled.div``;

const SerachIconWrapper = styled.div`
  svg {
    ${SharedSearchStyle}

    width: 2rem;
    height: 2rem;
    color: grey;
    margin-top: 0.4rem;
    margin-left: 1rem;
  }
`;

const SearchInput = styled(Input)`
  ${SharedPadding}
  width:100%;
`;
