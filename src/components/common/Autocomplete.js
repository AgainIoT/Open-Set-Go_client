import styled from "styled-components";

import { useRecoilState } from "recoil";
import { repoDataAtomFamily } from "../../recoil/repoData";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import SearchIcon from "@mui/icons-material/Search";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";

// props -> type(lang/framework), options(for lang->langs/for framework->frameworkOptions), setIsSelectLang(setIsSelectLang), setDisableValue(setDisableValue), disableValue(false/disableValue)
export const AutocompleteInput = (props) => {
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option,
  });

  const [selectValue, setSelectValue] = useRecoilState(
    repoDataAtomFamily(props.type),
  );

  const flatProps = {
    options: props.options || "",
  };

  const handleChange = (newValue) => {
    setSelectValue(newValue);
    if (props.type === "lang") {
      props.setIsSelectLang(true);
      props.setDisableValue(false);
    }
  };

  const handleDelete = () => {
    console.log("delete");
    setSelectValue("");
    if (props.type === "lang") {
      props.setIsSelectLang(false);
      props.setDisableValue(true);
    }
  };

  return (
    <StAutocompleteInput>
      <AutocompleteWrapper
        {...flatProps}
        autoComplete
        clearOnEscape
        autoHighlight
        filterSelectedOptions
        openOnFocus
        filterOptions={filterOptions}
        readOnly={props.disableValue}
        forcePopupIcon={true}
        popupIcon={<SearchIcon />}
        value={selectValue}
        getOptionLabel={(option) => option}
        isOptionEqualToValue={(option, value) => option === value}
        PaperComponent={(props) => <PaperContainer elevation={1} {...props} />}
        renderInput={(params) => (
          <InputFieldContainer>
            <AutocompleteTextField
              {...params}
              variant="standard"
              helperText={props.disableValue ? "First select Language" : " "}
            />
          </InputFieldContainer>
        )}
        onChange={(event, newValue) => {
          newValue ? handleChange(newValue) : handleDelete();
        }}
      />
    </StAutocompleteInput>
  );
};

const StAutocompleteInput = styled.div``;
const AutocompleteWrapper = styled(Autocomplete)`
  width: 100%;
  & .MuiInput-root {
    padding: 0.5rem 0rem 0.5rem 0.5rem;

    &::after {
      border: none;
    }
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

const PaperContainer = styled(Paper)`
  margin-top: 0.3rem;
`;
const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
