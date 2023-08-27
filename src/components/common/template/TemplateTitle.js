import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/joy/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.primary",
  // 사이즈 나중에 수정해야 함
  width: "89rem",
  height: "15rem",
};

export default function TemplateTitle() {
  return (
    <Box sx={{ ...commonStyles, borderBottom: 1 }} ><Typography
      component="h1"
      id="PR-title"
      level="h1"
      textColor="inherit"
      fontWeight="lg"
      m={2}
    >
    Detailed description pull request template
    </Typography>
    <Typography id="PR-desc" level="h3" textColor="text.tertiary" m={2}>
    Mark
    </Typography></Box>
  );
}
