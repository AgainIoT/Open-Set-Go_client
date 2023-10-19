import styled from "styled-components";
import { COLOR } from "../styles/color";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { avatar, id, name, isLogin } from "../recoil/authorize";
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
import LOGO from "../../src/assets/images/Logo.svg";
import axios from "axios";

const ElevationScroll = (props) => {
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
};
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

async function checkTokenValid() {
  const isTokenValid = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/auth/checkToken`,
    {
      validateStatus: (status) => {
        return status < 500;
      },
      withCredentials: true,
    },
  );
  return isTokenValid.status < 400;
}

export const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [src, setSrc] = useRecoilState(avatar);
  const [userId, setUserId] = useRecoilState(id);
  const [userName, setUserName] = useRecoilState(name);
  const setIsLogin = useSetRecoilState(isLogin);

  const checkIsLogin = async () => {
    const loggedIn = await checkTokenValid();
    if (loggedIn) {
      setSrc(localStorage.avatar);
      setUserId(localStorage.id);
      setUserName(localStorage.name);
    } else {
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("avatar");
    }
    setIsLogin(loggedIn);
  };

  React.useEffect(() => {
    checkIsLogin();
  }, []);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    if (props.burger) setAnchorElUser(event.currentTarget);
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
    setIsLogin(false);
    localStorage.setItem("id", "guest");
    localStorage.setItem("name", "guest");
    localStorage.setItem("avatar", "");
    setUserId(localStorage.getItem("id"));
    setUserName(localStorage.getItem("name"));
    setSrc(localStorage.getItem("avatar"));
    setAnchorElUser(null);
  };
  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ background: COLOR.MAIN_WHITE }}>
          <Toolbar>
            <Box
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <LogoWrapper href="/">
                <LogoImg src={LOGO} />
              </LogoWrapper>
              <Typography
                variant="h5"
                href="/"
                component="a"
                gutterBottom
                color={COLOR.MAIN_BLACK}
                mt={2}
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                OpenSetGo
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {props.burger ? (
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
              ) : null}
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
                {props.pages.map((page) => (
                  <MenuItem key={page} onClick={onMenuClick}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  key={"Docs"}
                  onClick={() =>
                    handleOpenNewTab("https://docs.open-set-go.com")
                  }
                >
                  <Typography textAlign="center">Docs</Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* 반응형 로고 */}
            <Box
              sx={{ flexGrow: 1, mr: 2, display: { xs: "flex", md: "none" } }}
            >
              <LogoWrapper href="/">
                <LogoImg src={LOGO} />
              </LogoWrapper>
              <Typography
                variant="h5"
                noWrap
                color={COLOR.MAIN_BLACK}
                component="a"
                href="/"
                mt={2}
                sx={{
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
            </Box>
            <Box
              sx={{
                mr: 2,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              {props.pages.map((page) => (
                <MenuItemWrapper key={page} onClick={onMenuClick}>
                  {page}
                </MenuItemWrapper>
              ))}
              <MenuItemWrapper
                key="docs"
                onClick={() => handleOpenNewTab("https://docs.open-set-go.com")}
              >
                Docs
              </MenuItemWrapper>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <AvatarDiv>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={userName ? userName : userId} src={src} />
                  </IconButton>
                </Tooltip>
                <Typography
                  variant="p"
                  component="div"
                  color={COLOR.MAIN_BLACK}
                  textAlign="center"
                >
                  {userId}
                </Typography>
              </AvatarDiv>
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
                {props.settings.map((setting) => (
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
};
const LogoWrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem;
`;
const LogoImg = styled.img`
  width: 3rem;
  height: 3rem;
`;
const AvatarDiv = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuItemWrapper = styled(Button)`
  display: block;
  margin: 1.6rem 0;
  color: ${COLOR.MAIN_BLACK};
`;
