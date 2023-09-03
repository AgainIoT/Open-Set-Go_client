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

import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { createFilterOptions } from "@mui/material/Autocomplete";

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
