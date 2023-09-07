import styled from "styled-components";
import { TextInputContainer } from "../common/InputComponent";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { SelectAuto } from "../common/SelectAuto";
import { useRecoilState } from "recoil";
import { repoDataAtomFamily } from "../../recoil/repoData";

/* for Owner, RepoName, Description */
export const RequiredFieldContainer = () => {
  /* GET - user repo info */
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

  /* POST - validate repo name */
  const [validateCheck, setValidateCheck] = useRecoilState(
    repoDataAtomFamily("dupCheck"),
  );
  async function postCheckDupication() {
    setHelperText("checking");
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
      setValidateCheck(response.data);
      if (response.data) {
        setHelperText("checked");
      } else {
        setHelperText("error");
      }
    } catch (e) {
      console.error(e);
      alert("기록 시작 실패. 재시도해주세요.");
    }
  }
  useEffect(() => {
    if (repoName !== "") {
      postCheckDupication();
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

      <Grid item xs={12} sm={2}>
        <SelectAuto labelText={"Owner*"} type={"owner"} data={userRepoData} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextInputContainer
          labelText={"Repository Name*"}
          fieldType={1}
          useHelperText={true}
          type={"repoName"}
          helperText={helperText}
        />
      </Grid>
      <Grid item xs={9}>
        <TextInputContainer
          labelText={"Description"}
          fieldType={3}
          type={"desc"}
          option={"(optional)"}
        />
      </Grid>
    </StRequiredFieldContainer>
  );
};

const StRequiredFieldContainer = styled(Grid)`
  width: 100%;
  row-gap: 1rem;
  column-gap: 0rem;
`;

const ExplainText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  font-style: italic;
`;
