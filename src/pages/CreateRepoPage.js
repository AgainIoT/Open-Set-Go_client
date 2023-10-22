import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Grid } from "@mui/material";
import { GitIgnoreContainer } from "../components/step1/GitignoreContainer";
import { SelectContainer } from "../components/step1/SelectContainer";
import { RequiredFieldContainer } from "../components/step1/RequiredFieldContainer";
import { eachStepState } from "../recoil/commonState";
import { repoDataAtomFamily } from "../recoil/repoData";

function CreateRepo() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("1"));
  const validateCheck = useRecoilValue(repoDataAtomFamily("dupCheck"));
  const repoName = useRecoilValue(repoDataAtomFamily("repoName"));

  useEffect(() => {
    if (validateCheck && repoName !== "") {
      setStepComplted(true);
    } else {
      setStepComplted(false);
    }
  }, [validateCheck, repoName]);
  return (
    <>
      <StCreateRepo container>
        <RequiredFieldContainer />
        <SelectContainer />
        <GitIgnoreContainer />
      </StCreateRepo>
    </>
  );
}
export default CreateRepo;

const StCreateRepo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 3rem;
`;
