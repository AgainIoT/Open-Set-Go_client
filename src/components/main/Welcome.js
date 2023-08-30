import { MainHeader as Header } from "../../layout/Header";
import { Button } from "@mui/material";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
const githubURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}&scope=repo,write:org,read:user`;
const handleLogin = () => {
  window.location.href = githubURL;
};
export default function Welcome() {
  return (
    <>
      <Header />
      <div className="welcome">
        <h1 className="title">Open, Set, Go</h1>
        <h1 className="subtitle">your project</h1>
        <Button variant="contained" onClick={handleLogin}>
          login
        </Button>
      </div>
    </>
  );
}
