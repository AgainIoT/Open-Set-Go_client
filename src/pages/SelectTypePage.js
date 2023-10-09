import styled from "styled-components";
import { COLOR } from "../styles/color.js";
import { useRecoilValue } from "recoil";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function SelectTypePage(){
    const navigate = new useNavigate();

  return(
    <StSelectTypePage>
      <Stack spacing={2} direction="row">
        <CreateBox>
                Create New Repo
          <CreateBtn variant="contained" onClick={() => navigate("/step1")}>
            Choose
          </CreateBtn>
        </CreateBox>
        <CheckBox>
                Check Open-Source Repo
          <CheckBtn variant="contained" onClick={() => navigate("/step1")}>
            Choose
          </CheckBtn>
        </CheckBox>
      </Stack>
    </StSelectTypePage>
  );

}

const StSelectTypePage = styled.div`
  width: 100%;
  height: 100%;
`;

const CreateBox = styled.div`
display: flex;
flex-direction: row;
width: 45rem;
height: 35rem;
margin: auto;
background-color: red;
`;

const CheckBox = styled.div`
display: flex;
flex-direction: row;
width: 45rem;
height: 35rem;
margin: auto;
background-color: red;
`;

const CreateBtn = styled(Button)({
  backgroundColor: `${COLOR.MAIN_PURPLE}`,
  "&:hover": {
    backgroundColor: `${COLOR.MAIN_PURPLE}`,
  },
});

const CheckBtn = styled(Button)({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "black",
  },
});

export default SelectTypePage;
