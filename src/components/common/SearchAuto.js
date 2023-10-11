import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRecoilState } from "recoil";
import { Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";

export const SearchAuto = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(props.type);
  const handleChipChange = (target) => {
    if (!selectValue.includes(target)) {
      setSelectValue([...selectValue, target]);
    }
  };
  const flatProps = {
    options: props.data.map((option) => option) || "",
  };

  const icon = <CheckIcon fontSize="small" color="gray" />;
  const checkedIcon = <CheckIcon fontSize="small" />;

  return (
    <StSearchAuto>
      <SerachIconWrapper>
        <SearchIcon />
      </SerachIconWrapper>
      <SearchAutoForm
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
    </StSearchAuto>
  );
};

// SearchForm

const SharedSearchStyle = `
display: block;
  position: absolute;
  z-index: 2;
  width: 2rem;
  height: 2rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
`;

const SharedPadding = `
  padding-left: 3.3rem;
`;

const StSearchAuto = styled.div`
  justify-content: center;
  margin: 2rem;
`;

const SearchAutoForm = styled(Autocomplete)`
  & .MuiInput-input {
    padding: 0.4rem 0.4rem 0.6rem 0;
  }
  & .MuiInputBase-root:hover {
    border: none;
  }

  & .MuiInput-root {
    padding-top: 0.2rem;
    padding-bottom: 0.4rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 20rem;
  }
  & .MuiInputBase-root::before {
    height: 3rem;
    border: 0.1rem solid lightgray;
    border-radius: 20rem;
  }
  & .MuiInputBase-root::after {
    height: 3rem;
    border: none;
    border-radius: 20rem;
  }
  & .MuiInput-root::after {
    margin-top: 8rem;
    border: none;
    border-radius: 20rem;
  }
  &
    .css-q0jhri-MuiInputBase-root-MuiInput-root:hover:not(
      .Mui-disabled,
      .Mui-error
    ):before {
    height: 3rem;
    border: none;
    border-radius: 20rem;
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
    margin-top: 0.4rem;
    margin-left: 1rem;
    color: grey;
  }
`;

const SearchInput = styled.input`
  ${SharedPadding}
  width:100%;
  height: 3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.4rem;
  margin-bottom: 1rem;
  border: 0.1rem solid lightgray;
  border-radius: 20rem;
  transition: all 0.2s ease-out;

  &:focus {
    height: 3rem;
    outline: none;
    border-radius: 20rem;
    box-shadow: 0.1rem 0.2rem 0.9rem lightgray;
  }
`;
