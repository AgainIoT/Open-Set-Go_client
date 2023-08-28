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
import Stack from "@mui/material/Stack";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { configure } from "@testing-library/react";

export const AutocompleteInput = (props) => {
  const type = props.recoilType;
  console.log("props.recoilType:", props.recoilType);
  // console.log("getdata: %o", useOption);
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option,
  });

  const [selectValue, setSelectValue] = useRecoilState(type);
  // const showData = useRecoilValue(selectFrameworkData);

  const flatProps = {
    options: props.useOption.map((option) => option.label) || "",
  };
  // const [defalutValue, setDefaultValue] = useState(
  //   flatProps.options.filter((it) => it === selectValue.value),
  // );
  // // const preValue = () => {
  //   if (selectValue) {
  //     var defalut = props.useOption.filter(
  //       (it) => selectValue.value === it.label,
  //     );
  //     return defalut;
  //   }
  // };
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
        includeInputInList
        clearOnEscape
        autoHighlight
        filterSelectedOptions
        openOnFocus
        value={selectValue.value}
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
        limitTags={3}
        freeSolo
        id="tags-filled"
        options={showData}
        value={showData.map((option) => option.value)}
        renderInput={(params) => (
          <ReadOnlyTextField
            {...params}
            label=".gitignore"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
    </StReadonlyAutocomplete>
  );
};

const StAutocompleteInput = styled.div``;
const AutocompleteWrapper = styled(Autocomplete)`
  width: 30rem;
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
    padding: 1.9rem 0 1rem 0.8rem;
    background-color: ${COLOR.MAIN_BACKGROUND};
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
