import React, { useState, useEffect } from "react";
import axios from "axios";
import {TemplateList} from "../components/common/template/TemplateList";
import TemplateTitle from "../components/common/template/TemplateTitle";
import TemplateBody from "../components/common/template/TemplateBody";
import PRTemplateModal from "../components/common/modal/PRTemplateModal";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { useRecoilState, useRecoilValue } from "recoil";
import { prTemplateState } from "../recoil/templateState";
import { gitignoreOpenState, prOpenState } from "../recoil/openModal";
import { BaseModal } from "../components/common/modal/BaseModal";

function PRTemplatePage() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const url = "http://ec2-54-180-138-136.ap-northeast-2.compute.amazonaws.com:8080/file/pr/";
  const params = "64f175c218eed0c9b21a2f2e";
  const [selectValue, setSelectValue] = useRecoilState(prTemplateState);
  const [modalValue, setModalValue] = useRecoilState(prOpenState);

  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios.get(url+params);
      if (!completed) setData(result.data);
    }
    get();
    return() => {
      completed = true;
    };
  }, []);

  const handlesave = ()=> {
    //value 고대로 저장해서 server로 보내야함. 이건 추후에 백엔드랑 회의 후 정해야할 듯
    console.log(data);
  };

  const handleOpen = () => setModalValue(true);

  return(
    <div>
      <MDEditor
        height={350}
        value={data}
        onChange={setValue}
      />
      <Button
        onClick={handlesave}
        variant="contained"
        color="success">
                저장
      </Button>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="success">
                Modal
      </Button>
      <BaseModal type={prOpenState}>
        <PRTemplateModal />
      </BaseModal>
    </div>
  );
}

export default PRTemplatePage;
