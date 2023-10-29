import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { AutocompleteInput } from "../common/Autocomplete";
import { repoDataAtomFamily } from "../../recoil/repoData";

// for select Language & Framework
export const SelectContainer = () => {
  // lang/frame
  const [selectLang, setSelectLang] = useRecoilState(
    repoDataAtomFamily("lang"),
  );
  const [selectFramework, setSelectFramework] = useRecoilState(
    repoDataAtomFamily("framework"),
  );
  const [frameworkOpions, setFrameworkOptions] = useState([]);
  const [isSelectLang, setIsSelectLang] = useState(false);
  const [disableValue, setDisableValue] = useState(false);

  // GET - Lang/Framework
  const [baseOption, setBaseOption] = useState([
    { language: "", frameworks: {} },
  ]);

  async function getBaseOptionData() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/file/supportedEnv`,
      );

      setBaseOption(response.data);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }

  async function getFrameworkOptionData() {
    const data = await getBaseOptionData();
    const selectedLanguageOption = data.find(
      (it) => it.language === selectLang,
    );
    const selectedFrameworks = selectedLanguageOption.frameworks || [];
    const selectedFrameworkNames = selectedFrameworks.map(
      (frameworkItem) => frameworkItem.framework,
    );
    setFrameworkOptions(selectedFrameworkNames);
  }

  useEffect(() => {
    // isSelectLang = 0, disableValue = 0
    if (selectLang) {
      getFrameworkOptionData();
    } else {
      getBaseOptionData();
    }
  }, []);

  //Apply options based on the language of choice
  useEffect(() => {
    // isSelectLang = 1, disableValue = 0
    if (isSelectLang) {
      getFrameworkOptionData();
      setSelectFramework("");
    }
  }, [selectLang]);

  useEffect(() => {
    // isSelectLang = 0, disableValue = 1
    if (disableValue) {
      setSelectFramework("");
    }
  }, [disableValue]);

  return (
    <StSelectContainer container>
      <Grid item xs={12}>
        <Subtitle>Select your project Language/Framework</Subtitle>
      </Grid>
      <Grid item xs={12} sm={5}>
        <AutocompleteInput
          type={"lang"}
          options={baseOption.map((it) => it.language)}
          setIsSelectLang={setIsSelectLang}
          setDisableValue={setDisableValue}
          disableValue={false}
          label={"Language"}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
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
  width: 80%;
  height: 25%;
  min-width: 50rem;
  column-gap: 5rem;
`;
const Subtitle = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 600;
`;
