import styled from "styled-components";
import { COLOR } from "../../styles/color";

import { useRecoilState } from "recoil";
import {
  selectGitignoreData,
  selectFrameworkData,
} from "../../recoil/repoData";

import Autocomplete from "@mui/material/Autocomplete";

import { createFilterOptions } from "@mui/material/Autocomplete";

import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";

export const SearchForm = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(props.type);
  const handleChipChange = (target) => {
    if (!selectValue.includes(target)) {
      console.log(`${target}이 추가`);
      setSelectValue([...selectValue, target]);
    }
  };
  const flatProps = {
    options: props.data.map((option) => option) || "",
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
        filterSelectedOptions
        isOptionEqualToValue={(option, value) => option === value}
        renderOption={(props, option) => (
          <OptionListBox key={option}>
            <OptionList
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
          newValue && handleChipChange(newValue);
        }}
      />
    </StSearchForm>
  );
};

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

const SearchInput = styled.input`
  ${SharedPadding}
  width:100%;
  border: none;
  padding-top: 0.2rem;
  padding-bottom: 0.4rem;
  border-radius: 20rem;
  margin-bottom: 1rem;
  height: 3rem;
  border: 0.1rem solid lightgray;
  transition: all 0.2s ease-out;

  &:focus {
    height: 3rem;
    border-radius: 20rem;
    box-shadow: 0.1rem 0.2rem 0.9rem lightgray;
    outline: none;
  }
`;
