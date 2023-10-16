import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import { TextInputContainer } from "../common/InputComponent";
import { SelectAuto } from "../common/SelectAuto";
import { repoDataAtomFamily } from "../../recoil/repoData";

// for Owner, RepoName, Description
export const RequiredFieldContainer = () => {
  // GET - user repo info
  const [owner, setOwner] = useRecoilState(repoDataAtomFamily("owner"));
  const [repoName, setRepoName] = useRecoilState(
    repoDataAtomFamily("repoName"),
  );

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

      const initUserData = [
        {
          id: response.data.id,
          avatar: response.data.avatar,
        },
      ];
      response.data.org.forEach((it) => {
        initUserData.push({ id: it.id, avatar: it.avatar });
      });

      setOwner(response.data.id);
      setUserRepoData(initUserData);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getUserRepoData();
  }, []);

  async function checkRepoName() {
    setHelperText("checking");
    const restrictCheck = await validateRepoName();
    let dupCheck = false;
    if (restrictCheck) {
      dupCheck = await postCheckDupication();
      if (dupCheck) {
        setHelperText("checked");
      } else {
        setHelperText("duplicated");
      }
    } else {
      setHelperText("invalid");
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

  async function postCheckDupication() {
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
      alert("기록 시작 실패. 재시도해주세요.");
    }
  }

  useEffect(() => {
    if (repoName !== "") {
      checkRepoName();
    } else {
      setHelperText("null");
    }
  }, [repoName]);

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
        <Grid item xs={12} sm={2}>
          <SelectAuto labelText={"Owner*"} type={"owner"} data={userRepoData} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextInputContainer
            labelText={"Repository Name*"}
            fieldType={1}
            useHelperText={true}
            type={"repoName"}
            helperText={helperText}
          />
        </Grid>
      </Box>
      <Grid item xs={12}>
        <TextInputContainer
          labelText={"Description"}
          fieldType={2}
          type={"desc"}
          option={"(optional)"}
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
