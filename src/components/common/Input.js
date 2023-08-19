import { useState } from "react";
import styled from "styled-components";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { PropTypes } from "prop-types";

export default function Input(props) {
  return (
    <FormContent >
      <Box component="form" noValidate autoComplete="off" >
        <FormControl sx={{ width: "150ch"}}>
          <OutlinedInput placeholder={props.placeHolder} height="300ch"/>
        </FormControl>
      </Box>
    </FormContent>
  );
}

Input.propTypes = {
  placeHolder: PropTypes.node.isRequired,
};

const FormContent = styled.div`
  width: 500px;
`;
