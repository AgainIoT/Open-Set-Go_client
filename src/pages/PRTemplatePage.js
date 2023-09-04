import React, { useState, useEffect } from "react";
import PRTemplateModal from "../components/common/modal/PRTemplateModal";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { prTemplateContent, prTemplateState } from "../recoil/templateState";
import { gitignoreOpenState, prOpenState } from "../recoil/openModal";
import { BaseModal } from "../components/common/modal/BaseModal";

function PRTemplatePage() {
  // const [value, setValue] = useState("");
  // const [value, setValue] = useRecoilState(prTemplateContent);
  const [data, setData] = useState([]);
  const [modalValue, setModalValue] = useRecoilState(prOpenState);
  const [content, setContent] = useRecoilState(prTemplateContent);
  // console.log(content.content);

  const handlesave = ()=> {
    //value 고대로 저장해서 server로 보내야함. 이건 추후에 백엔드랑 회의 후 정해야할 듯
    console.log(data);
  };

  const handleOpen = () => setModalValue(true);

  return(
    <div>
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
      <BaseModal type={prOpenState}>
        <PRTemplateModal />
      </BaseModal>
    </div>
  );
}

export default PRTemplatePage;
