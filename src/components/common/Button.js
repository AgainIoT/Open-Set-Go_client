import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const BasicButtons = (text) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">{text}</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default BasicButtons;
