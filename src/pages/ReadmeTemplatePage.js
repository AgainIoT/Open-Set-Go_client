import React, { useState, useEffect } from "react";
import TemplateModal from "../components/common/modal/templateModal";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateContent, templateState } from "../recoil/templateState";
import { gitignoreOpenState, prOpenState } from "../recoil/openModal";
import { BaseModal } from "../components/common/modal/BaseModal";

function ReadmeTemplatePage(props) {
  const [data, setData] = useState([]);
  const [modalValue, setModalValue] = useRecoilState(prOpenState);
  const [content, setContent] = useRecoilState(templateContent);

  const handlesave = ()=> {
    //value 고대로 저장해서 server로 보내야함. 이건 추후에 백엔드랑 회의 후 정해야할 듯
    console.log(data);
  };

  const handleOpen = () => setModalValue(true);

  return(
    <div>
      <BaseModal type={prOpenState}>
        <TemplateModal type = "readme" />
      </BaseModal>
      <MDEditor
        height={350}
        value={content}
        onChange={setContent}
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
    </div>
  );
}

export default ReadmeTemplatePage;
