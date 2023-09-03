import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useEffect, useState } from "react";

import useAutocomplete from "@mui/material/useAutocomplete";
import { useRecoilState } from "recoil";

import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";

export const SearchAutoForm = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(props.type);
  const handleChipChange = (target) => {
    if (!selectValue.includes(target)) {
      console.log(`${target}이 추가`);
      setSelectValue([...selectValue, target]);
    }
  };

  const useOption = props.data.map((option) => option.label) || "";

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: useOption,
    getOptionLabel: (option) => option,
  });

  const icon = <CheckIcon fontSize="small" color="gray" />;
  const checkedIcon = <CheckIcon fontSize="small" />;

  return (
    <StSearchAutoForm>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}></Label>
        <SerachIconWrapper>
          <SearchIcon />
        </SerachIconWrapper>
        <Input {...getInputProps()} placeholder="Search..." />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li key={index} {...getOptionProps({ option, index })}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selectValue.includes(option)}
              />
              <span>{option}</span>
            </li>
          ))}
        </Listbox>
      ) : null}
    </StSearchAutoForm>
  );
};

const StSearchAutoForm = styled.div``;

const Label = styled.label``;
const Input = styled.input``;
const Listbox = styled.ul`
  & li[aria-selected="true"] {
    background-color: ${COLOR.MAIN_HOVER};
    font-weight: 600;

    & svg {
      color: ${COLOR.MAIN_BLUE};
    }
  }
`;

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

const SerachIconWrapper = styled.div`
  svg {
    /* ${SharedSearchStyle} */

    width: 2rem;
    height: 2rem;
    color: grey;
    margin-top: 0.4rem;
    margin-left: 1rem;
  }
`;
