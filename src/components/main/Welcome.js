import { MainHeader as Header } from "../../layout/MainHeader";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
const githubURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}&scope=repo,write:org,read:user,user:email`;
const handleLogin = () => {
  window.location.href = githubURL;
};
export default function Welcome() {
  const [cookies, setCookies] = useCookies();
  console.log(cookies.Authentication);
  return (
    <>
      <Header />
      <div className="welcome">
        <h1 className="title">Open, Set, Go</h1>
        <h1 className="subtitle">your project</h1>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              console.log(localStorage.getItem("Authentication"));
              document
                .querySelector(".steps")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            learn more
          </Button>
          {cookies.Authentication ? (
            <Button
              variant="outlined"
              onClick={() => {
                console.log(cookies.get("Authentication"));
              }}
            >
              get started
            </Button>
          ) : (
            <Button variant="outlined" onClick={handleLogin}>
              login
            </Button>
          )}
        </Stack>
      </div>
    </>
  );
}
