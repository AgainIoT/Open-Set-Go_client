import { InputBase, Paper } from "@mui/material";
import { COLOR } from "../../../styles/color";
import { styled, alpha } from "@mui/material/styles";

export const ListWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxWidth: 360,
  marginBottom: theme.spacing(1),
  backgroundColor: COLOR.MAIN_WHITE,
  overflowX: "hidden",
  overflowY: "auto",
}));
export const SearchWrapper = styled("div")(({ theme }) => ({
  width: "100%",
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  height: "100%",
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    width: "100%",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  backgroundColor: COLOR.MAIN_BACKGROUND,
  borderRadius: 2,
}));
