// import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { styled, alpha } from "@mui/material/styles";

import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import { useRecoilState } from "recoil";

export const SelectRepoName = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(
    props.dataState(props.type),
  );
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">
          {props.labelText}
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={selectValue}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          {props.data.map((option, index) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          {/* <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
        </NativeSelect>
      </FormControl>
    </>
  );
};

// const StSelectRepoName = styled.div``;
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
