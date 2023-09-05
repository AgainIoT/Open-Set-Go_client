import * as React from "react";
import { useState } from "react";
import { COLOR } from "../styles/color";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import axios from "axios";
import Container from "@mui/material/Container";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState, avatar, id, name, token } from "../recoil/authorize";
import styled from "styled-components";
import { Cookie } from "@mui/icons-material";

const pages = ["WELCOME", "DESC", "STEPS"];
const settings = ["Logout"];

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [src, setSrc] = useRecoilState(avatar);
  const [userId, setUserId] = useRecoilState(id);
  const [userName, setUserName] = useRecoilState(name);

  React.useEffect(() => {
    setSrc(localStorage.avatar);
    setUserId(localStorage.id);
    setUserName(localStorage.name);
    console.log(localStorage);
  }, []);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    return event.currentTarget;
  };

  const onMenuClick = (event) => {
    moveToPage(handleCloseNavMenu(event).innerText);
  };

  const moveToPage = (page) => {
    document.querySelector("." + page).scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseUserMenu = async () => {
    const res = await axios.post(
      process.env.REACT_APP_SERVER_URL + "/auth/github-logout",
      "",
      { withCredentials: true },
    );
    console.log(res);
    localStorage.setItem("id", "guest");
    localStorage.setItem("name", "guest");
    localStorage.setItem("avatar", "");
    setUserId(localStorage.getItem("id"));
    setUserName(localStorage.getItem("name"));
    setSrc(localStorage.getItem("avatar"));
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          style={{ background: COLOR.MAIN_WHITE, color: COLOR.MAIN_BLACK }}
        >
          <Toolbar>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                ml: 1,
                color: "black",
              }}
            />
            <Typography
              variant="h5"
              href="/home"
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              OpenSetGo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={onMenuClick}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* 반응형 로고 */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              OpenSetGo
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              {pages.map((page) => (
                <MenuItemWrapper key={page} onClick={onMenuClick}>
                  {page}
                </MenuItemWrapper>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={userId} src={src} />
                </IconButton>
              </Tooltip>
              <Typography
                variant="p"
                component="div"
                color={COLOR.MAIN_BLACK}
                textAlign="center"
              >
                {userName}
              </Typography>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}

const MenuItemWrapper = styled(Button)`
  display: block;
  margin: 1.6rem 0;

  color: ${COLOR.MAIN_BLACK};
`;
