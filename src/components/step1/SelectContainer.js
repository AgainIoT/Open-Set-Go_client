import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRecoilState, useRecoilValue } from "recoil";

import { useEffect, useState } from "react";
import axios from "axios";
import { AutocompleteInput } from "../common/Autocomplete";
import { repoDataAtomFamily } from "../../recoil/repoData";
import { Grid, Typography } from "@mui/material";

/* for select Language & Framework  */
export const SelectContainer = () => {
  /* lang/frame */
  const [selectLang, setSelectLang] = useRecoilState(
    repoDataAtomFamily("lang"),
  );
  const [selectFramework, setSelectFramework] = useRecoilState(
    repoDataAtomFamily("framework"),
  );
  const [langOptions, setLangOptions] = useState([]);
  const [frameworkOpions, setFrameworkOptions] = useState([]);
  const [isSelectLang, setIsSelectLang] = useState(false);
  const [disableValue, setDisableValue] = useState(true);

  /* GET - Lang/Framework */
  const [baseOption, setBaseOption] = useState([
    { language: "", frameworks: {} },
  ]);

  async function getBaseOptionData() {
    // async, await을 사용하는 경우
    try {
      // GET 요청은 params에 실어 보냄
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/file/supportedEnv`,
      );

      // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.
      console.log(response.data);
      const initOptionData = response.data.map((it) => {
        console.log("asf", it.frameworks);
        return {
          language: it.language,
          frameworks: it.frameworks,
        };
      });
      console.log("initOptionData: %o", initOptionData);
      setBaseOption(response.data);
    } catch (e) {
      // 실패 시 처리
      console.error(e);
    }
  }

  useEffect(() => {
    getBaseOptionData();
  }, []);
  const langs = baseOption.map((it) => it.language);

  useEffect(() => {
    if (isSelectLang) {
      const selectedLanguageOption = baseOption.find(
        (it) => it.language === selectLang,
      );
      const selectedFrameworks = selectedLanguageOption.frameworks || [];
      const selectedFrameworkNames = selectedFrameworks.map(
        (frameworkItem) => frameworkItem.framework,
      );

      setFrameworkOptions(selectedFrameworkNames);
    } else {
      console.log("false");
      setSelectFramework("");
    }
  }, [selectLang]);

  useEffect(() => {
    setSelectFramework("");
  }, [selectLang]);

  return (
    <StSelectContainer container>
      <Grid item xs={12}>
        <Subtitle>Select your project Language/Framework</Subtitle>
      </Grid>
      <Grid item xs={12} sm={4}>
        <AutocompleteInput
          type={"lang"}
          options={langs}
          setIsSelectLang={setIsSelectLang}
          setDisableValue={setDisableValue}
          disableValue={false}
          label={"Language"}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <AutocompleteInput
          type={"framework"}
          options={frameworkOpions}
          setIsSelectLang={setIsSelectLang}
          setDisableValue={setDisableValue}
          disableValue={disableValue}
          label={"Language"}
        />
      </Grid>
    </StSelectContainer>
  );
};

const StSelectContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  row-gap: 1rem;
  column-gap: 5rem;
`;
const Subtitle = styled(Typography)`
  font-size: 1.4rem;
  font-weight: 600;
`;
