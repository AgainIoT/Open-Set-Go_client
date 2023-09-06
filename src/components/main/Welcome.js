import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import propTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { token } from "../../recoil/authorize";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
const githubURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}&scope=repo,write:org,read:user,user:email`;
const handleLogin = () => {
  window.location.href = githubURL;
};
export default function Welcome() {
  const accessToken = useRecoilValue(token);
  const navigate = new useNavigate();
  return (
    <div className="WELCOME">
      <h1 className="title">Open, Set, Go</h1>
      <h1 className="subtitle">your project</h1>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            document
              .querySelector(".STEPS")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          learn more
        </Button>
        {accessToken ? (
          <Button variant="outlined" onClick={() => navigate("/step1")}>
            get started
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleLogin}>
            login
          </Button>
        )}
      </Stack>
    </div>
  );
}

Welcome.propTypes = {
  auth: propTypes.bool,
  logout: propTypes.func,
};
