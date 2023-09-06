import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRecoilState, useRecoilValue } from "recoil";

import { languageFrameworks } from "../../data/CreateRepoData";
import { optionItemSelector, repoDataAtomFamily } from "../../recoil/repoData";

import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

/* InputAuto */
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { createFilterOptions } from "@mui/material/Autocomplete";

/* */

/* ChipAuto */
import optionData from "../../data/optionData.json";
import { InputSelectAuto } from "../components/common/InputAuto";
import { AutocompleteInput } from "../../components/common/Autocomplete";

export function TestPage() {
  //   const lang = Object.keys(languageFrameworks).map((entrie, idx) => {
  //     return console.log(entrie, idx);
  //   });

  //   const [language, setLanguage] = useRecoilState(
  //     optionItemSelector("Language"),
  //   );
  //   const [framework, setFramework] = useRecoilState(
  //     optionItemSelector("Framework"),
  //   );

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

  const etcOptions = optionData["Etc."].map((it) => it.option);

  return (
    <div>
      {/* <InputAuto
        labelText={"Language"}
        type={"Language"}
        seletorKey={optionItemSelector}
        atomKey={repoDataAtomFamily}
      />
      <InputAuto
        labelText={"Framework"}
        type={"Framework"}
        seletorKey={optionItemSelector}
        atomKey={repoDataAtomFamily}
      />
      <ChipAuto data={etcOptions} /> */}
      {/* <InputSelectAuto
        type={"lang"}
        data={langs}
        setIsSelectLang={setIsSelectLang}
      />
      <InputSelectAuto
        type={"framework"}
        data={frameworkOpions}
        setIsSelectLang={setIsSelectLang}
      /> */}
      <AutocompleteInput
        type={"lang"}
        options={langs}
        setIsSelectLang={setIsSelectLang}
        setDisableValue={setDisableValue}
        disableValue={false}
      />
      <AutocompleteInput
        type={"framework"}
        options={frameworkOpions}
        setIsSelectLang={setIsSelectLang}
        setDisableValue={setDisableValue}
        disableValue={disableValue}
      />
    </div>
  );
}

// props -> type(Language/Framework), seletorKey(optionItemSelector), atomKey(repoDataAtomFamily), labelText
export const InputAuto = (props) => {
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option,
  });

  const [optionValue, setOptionValue] = useRecoilState(
    props.seletorKey(props.type),
  );
  const [selectValue, setSelectValue] = useRecoilState(
    props.atomKey(props.type),
  );

  const flatProps = {
    // options: optionValue.map((option) => option) || "",
    options: optionValue,
  };

  const handleSelect = (value) => {
    setOptionValue(value);
  };

  return (
    <StInputAuto>
      <AutocompleteWrapper
        {...flatProps}
        autoComplete
        clearOnEscape
        autoHighlight
        filterSelectedOptions
        openOnFocus
        value={selectValue}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.toString()
        }
        onChange={(event, newValue) => {
          newValue && handleSelect(newValue);
        }}
        filterOptions={filterOptions}
        forcePopupIcon={true}
        popupIcon={<SearchIcon />}
        renderInput={(params) => (
          <AutocompleteTextField
            {...params}
            label={props.labelText}
            variant="standard"
          />
        )}
      />
    </StInputAuto>
  );
};

export const ChipAuto = (props) => {
  return (
    <StChipAuto>
      <Autocomplete
        multiple
        limitTags={3}
        id="multiple-limit-tags"
        options={props.data}
        getOptionLabel={(option) => option}
        defaultValue={props.data}
        renderInput={(params) => <TextField {...params} />}
        renderOption={(parms) => <div {...parms} disabled></div>}
        sx={{ width: "500px" }}
      />
    </StChipAuto>
  );
};

const StInputAuto = styled.div``;
const AutocompleteWrapper = styled(Autocomplete)`
  width: 100%;
  height: 10rem;
  & .MuiInput-root {
    padding: 0.5rem 0rem 0.5rem 0.5rem;
  }
  & .MuiInputBase-root {
    height: 4.8rem;
  }
  & .MuiAutocomplete-popupIndicator {
    transform: none;
  }
  & .MuiAutocomplete-endAdornment {
    margin-right: 0.7rem;
    float: center;
  }
`;
const AutocompleteTextField = styled(TextField)`
  font-size: 1.6rem;

  & .MuiFormLabel-root {
    padding-left: 0.3rem;
    line-height: 3rem;
    font-size: 1.4rem;
  }
  & .MuiAutocomplete-input {
    font-size: 1.4rem;
  }
`;

// ChipAuto

const StChipAuto = styled.div``;
