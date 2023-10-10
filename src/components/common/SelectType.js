import styled from "styled-components";
import { COLOR } from "../../styles/color.js";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export const SelectType= () =>{
  const navigate = new useNavigate();

  return(
    <StSelectType>
      <Stack spacing={20} direction="row">
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
    </StSelectType>
  );

};

const StSelectType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 80vh;
  background: linear-gradient(
    to bottom,
    ${COLOR.MAIN_HOVER},
    ${COLOR.MAIN_BACKGROUND}
);
`;

const CreateBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
min-width: 50rem;
height: 100%;
min-height: 30rem;
margin: 0 auto;
background-color: red;
`;

const CheckBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
min-width: 50rem;
height: 100%;
min-height: 30rem;
margin: 0 auto;
background-color: red;
`;

const CreateBtn = styled(Button)({
  width: "20%",
  height: "15%",
  backgroundColor: `${COLOR.MAIN_PURPLE}`,
  "&:hover": {
    backgroundColor: `${COLOR.MAIN_PURPLE}`,
  },
});

const CheckBtn = styled(Button)({
  width: "20%",
  height: "15%",
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "black",
  },
});
