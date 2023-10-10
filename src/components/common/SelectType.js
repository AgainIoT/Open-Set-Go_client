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
          <Stack spacing={5} direction="column">
            <Stack spacing={1} direction="column">
              <Title>Create New</Title>
              <Title>Open-Source Repository</Title>
            </Stack>
            <CreateBtn variant="contained" onClick={() => navigate("/step1")}>
            Choose
            </CreateBtn></Stack>
        </CreateBox>
        <CheckBox>
          <Stack spacing={5} direction="column">
            <Stack spacing={1} direction="column">
              <Title>Check existing</Title>
              <Title>Open-Source Repository</Title>
            </Stack>
            <CheckBtn variant="contained" onClick={() => navigate("/step1")}>
            Choose
            </CheckBtn></Stack>
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
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
min-width: 50rem;
height: 100%;
min-height: 30rem;
margin: 0 auto;
border-radius: 2rem;
background-color: white;
text-align: center;
`;

const CheckBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
min-width: 50rem;
height: 100%;
min-height: 30rem;
margin: 0 auto;
border-radius: 2rem;
background-color: ${COLOR.MAIN_PURPLE};
color: white;
text-align: center;
`;

const CreateBtn = styled(Button)({
  width: "30%",
  height: "30%",
  backgroundColor: `${COLOR.MAIN_PURPLE}`,
  "&:hover": {
    backgroundColor: `${COLOR.MAIN_PURPLE}`,
  },
});

const CheckBtn = styled(Button)({
  width: "30%",
  height: "30%",
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "black",
  },
});

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  font-size: 3rem;
  padding-bottom: 2rem;
  font-weight: 00;
`;

export const Explanation = styled.h6`
  font-size: 3rem;
  padding-bottom: 2rem;
  font-weight: 00;
`;
