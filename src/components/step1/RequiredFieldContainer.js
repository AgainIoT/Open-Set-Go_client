import styled from "styled-components";
import { COLOR } from "../../styles/color";
import {
  SelectInputContainer,
  TextInputContainer,
} from "../common/InputComponent";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Grid } from "@mui/material";

export const RequiredFieldContainer = () => {
  /* GET - Lang/Framework */
  const [userRepoData, setUserRepoData] = useState([
    // { language: "", frameworks: {} },
  ]);

  async function getUserRepoData() {
    // async, await을 사용하는 경우
    try {
      // GET 요청은 params에 실어 보냄
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/grantedInfo`,
        {
          withCredentials: true,
        },
      );

      // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.
      console.log(response.data);
      const initOptionData = response.data.map((it) => {
        return {
          id: it.id,
          avatar: it.avatar,
          org: it.org,
        };
      });
      console.log("initOptionData: %o", initOptionData);
      setUserRepoData(response.data);
    } catch (e) {
      // 실패 시 처리
      console.error(e);
    }
  }

  useEffect(() => {
    getUserRepoData();
  }, []);

  /* POST - validate repo name */
  const [validateCheck, setValidateCheck] = useState(false);
  async function postRecordData() {
    // async, await을 사용하는 경우
    try {
      // GET 요청은 params에 실어 보냄

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/repo/checkRepo`,
        {
          userName: "bentshrimp",
          repoName: "test",
        },
      );
      // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.
      setValidateCheck(response.data.returnValue);
    } catch (e) {
      // 실패 시 처리
      console.error(e);
      alert("기록 시작 실패. 재시도해주세요.");
    }
  }

  const [helperText, setHelperText] = useState(" ");

  return (
    <StRequiredFieldContainer>
      <ExplainText>
        Required fields are marked with an asterisk (*).
      </ExplainText>
      <RequiredContainer container>
        <Grid item xs={12} sm={5}>
          <SelectInputContainer labelText={"Owner*"} />
        </Grid>
        <Grid item xs={6} sm={9}>
          <TextInputContainer labelText={"Repository Name*"} fieldType={1} />
        </Grid>
      </RequiredContainer>

      <p>Great repository names are short and memorable.</p>

      <TextInputContainer
        labelText={"Description"}
        fieldType={5}
        type={"desc"}
        option={"(optional)"}
      />
    </StRequiredFieldContainer>
  );
};

const StRequiredFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RequiredContainer = styled(Grid)`
  width: 100%;
  gap: 2rem;
`;
const ExplainText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  font-style: italic;
`;
