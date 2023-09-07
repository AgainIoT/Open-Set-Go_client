import styled from "styled-components";
import { useRecoilState } from "recoil";

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
  const [frameworkOpions, setFrameworkOptions] = useState([]);
  const [isSelectLang, setIsSelectLang] = useState(false);
  const [disableValue, setDisableValue] = useState(true);

  /* GET - Lang/Framework */
  const [baseOption, setBaseOption] = useState([
    { language: "", frameworks: {} },
  ]);

  async function getBaseOptionData() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/file/supportedEnv`,
      );

      setBaseOption(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getBaseOptionData();
  }, []);
  const langs = baseOption.map((it) => it.language);

  //Apply options based on the language of choice
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
