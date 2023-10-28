import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { repoDataAtomFamily } from "../../recoil/repoData";
import { eachStepState } from "../../recoil/commonState";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import { TextInputContainer } from "../common/InputComponent";
import { SelectAuto } from "../common/SelectAuto";
import gifRepoName from "../../assets/images/repoName.gif";
import gifDescription from "../../assets/images/description.gif";
import { useNavigate } from "react-router-dom";

// for Owner, RepoName, Description
export const RequiredFieldContainer = () => {
  // GET - user repo info
  const [owner, setOwner] = useRecoilState(repoDataAtomFamily("owner"));
  const [repoName, setRepoName] = useRecoilState(
    repoDataAtomFamily("repoName"),
  );
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("1"));

  const navigate = useNavigate();

  const [userRepoData, setUserRepoData] = useState([
    {
      id: "",
      avatar: "",
    },
  ]);

  async function getUserRepoData() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/grantedInfo`,
        {
          withCredentials: true,
        },
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }

  function refineData(rawData) {
    const data = [
      {
        id: rawData.id,
        avatar: rawData.avatar,
      },
    ];
    rawData.org.forEach((it) => {
      data.push({ id: it.id, avatar: it.avatar });
    });
    return data;
  }

  async function initUserData() {
    const refinedData = refineData(await getUserRepoData());
    setUserRepoData(refinedData);
    return refinedData;
  }

  async function initOwner() {
    const refinedData = await initUserData();
    setOwner(refinedData[0].id);
  }

  useEffect(() => {
    initUserData();
    if (!stepComplete) {
      initOwner();
    }
  }, []);

  async function checkRepoName() {
    setHelperText("checking");
    let restrictCheck = false;
    const dupCheck = await postCheckDuplication();
    if (dupCheck) {
      restrictCheck = await validateRepoName();
      if (restrictCheck) {
        setHelperText("checked");
      } else {
        setHelperText("invalid");
      }
    } else {
      setHelperText("duplicated");
    }
    setValidateCheck(restrictCheck && dupCheck);
  }

  // validate repository name
  async function validateRepoName() {
    // Max length: 100 code points
    if (repoName.length > 100) {
      return false;
    }
    // All code points must be either a hyphen (-), an underscore (_), a period (.), or an ASCII alphanumeric code point
    const validCharacters = /^[A-Za-z0-9._-]+$/;
    if (!validCharacters.test(repoName)) {
      return false;
    }
    // The repository names containing only a single period (.) or double period (..) are reserved
    if (repoName === "." || repoName === "..") {
      return false;
    }
    return true;
  }

  // POST - validate repo name
  const [validateCheck, setValidateCheck] = useRecoilState(
    repoDataAtomFamily("dupCheck"),
  );

  async function postCheckDuplication() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/repo/checkDuplication`,
        {
          owner: owner,
          repoName: repoName,
        },
        {
          withCredentials: true,
        },
      );
      return response.data;
    } catch (e) {
      console.error(e);
      navigate("/");
    }
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (repoName !== "") {
        return checkRepoName();
      } else {
        setHelperText("null");
      }
    }, 300);
    return () => clearTimeout(debounce);
  }, [owner, repoName]);

  const [helperText, setHelperText] = useState(" ");

  return (
    <StRequiredFieldContainer container>
      <Grid item xs={12}>
        <ExplainText>
          Required fields are marked with an asterisk (*).
        </ExplainText>
      </Grid>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} sm={5}>
          <SelectAuto
            labelText={"Owner*"}
            type={"owner"}
            data={userRepoData}
            dataState={repoDataAtomFamily}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextInputContainer
            labelText={"Repository Name*"}
            fieldType={1}
            useHelperText={true}
            type={"repoName"}
            helperText={helperText}
            gif={gifRepoName}
          />
        </Grid>
      </Box>
      <Grid item xs={12}>
        <TextInputContainer
          labelText={"Description"}
          fieldType={2}
          type={"desc"}
          option={"(optional)"}
          gif={gifDescription}
        />
      </Grid>
    </StRequiredFieldContainer>
  );
};

const StRequiredFieldContainer = styled(Grid)`
  width: 80%;
  min-height: 25rem;
  min-width: 50rem;
  row-gap: 1rem;
`;

const ExplainText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  font-style: italic;
`;
