import styled from "styled-components";
import { COLOR } from "../styles/color";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Cookies } from "react-cookie";
import axios from "axios";

const pages = ["About Us", "Description", "Contribute"];
const settings = ["Logout"];

export const MainHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = async () => {
    const res = await axios.post(
      process.env.REACT_APP_LOCAL_SERVER_URL + "/auth/github-logout",
      "",
      { withCredentials: true },
    );
    console.log(res);
    setAnchorElUser(null);
  };
  return (
    <StMainHeader
      position="sticky"
      style={{ background: COLOR.MAIN_WHITE }}
      elevation={0}
    >
      {/* <Container maxWidth="xl"> */}
      <MainToolBar disableGutters>
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
          noWrap
          component="a"
          href="/home"
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
        {/* 반응형 메뉴 */}
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
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* 반응형 로고 */}
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
          OpenSetGo2
        </Typography>
        <MenuBox sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <MenuItemWrapper key={page} onClick={handleCloseNavMenu}>
              {page}
            </MenuItemWrapper>
          ))}
        </MenuBox>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
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
      </MainToolBar>
      {/* </Container> */}
    </StMainHeader>
  );
};

const StMainHeader = styled(AppBar)`
  display: flex;
  position: static;
  //top: 0;
  background-color: ${COLOR.MAIN_WHITE};
  width: 100%;
  height: 8.1rem;
  /* padding-top: 1rem; */
  padding: 1rem 3rem 0 3rem;
  /* 
  font-family: "SUIT Variable";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 15px; */
  /* border: 0; */

  /* display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;

  z-index: 100; */
`;

const MainToolBar = styled(Toolbar)`
  height: 100%;
`;

const MenuBox = styled(Box)`
  justify-content: end;
`;

const MenuItemWrapper = styled(Button)`
  display: block;
  margin: 1.6rem 0;

  color: ${COLOR.MAIN_BLACK};
`;
