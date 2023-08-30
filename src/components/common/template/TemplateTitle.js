import * as React from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.secondary",
  // 사이즈 나중에 수정해야 함
  width: "89rem",
  height: "12rem",
};

export default function TemplateTitle() {
  return (
    <Box sx={{ ...commonStyles, borderBottom: 1 }} ><Typography
      component="h1"
      id="PR-title"
      variant="h3" gutterBottom
      textColor="inherit"
      fontWeight="lg"
      m={2}
    >
    Detailed description pull request template
    </Typography>
    <Stack spacing={85} direction="row" m={2}>
      <Typography id="PR-desc" variant="h4" gutterBottom color="textSecondary">
      Mark
      </Typography>
      <Button
        variant="contained">
                  Use Template
      </Button>
    </Stack></Box>
  );
}
