import React, { useState, useEffect } from "react";
import TemplateModal from "../components/common/modal/templateModal";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateContent, templateState } from "../recoil/templateState";
import { gitignoreOpenState, prOpenState } from "../recoil/openModal";
import { BaseModal } from "../components/common/modal/BaseModal";
import Stack from "@mui/material/Stack";

function PRTemplatePage(props) {
  const [data, setData] = useState([]);
  const [modalValue, setModalValue] = useRecoilState(prOpenState);
  const [content, setContent] = useRecoilState(templateContent);

  const handlesave = () => {
    console.log(data);
  };

  const handleOpen = () => setModalValue(true);

  return (
    <div>
      <BaseModal type={prOpenState}>
        <TemplateModal type="pr" />
      </BaseModal>
      <MDEditor height={350} value={content} onChange={setContent} />
      <Stack spacing={2} direction="row">
        <Button onClick={handlesave} variant="contained" color="success">
          저장
        </Button>
        <Button onClick={handleOpen} variant="contained" color="success">
          Modal
        </Button>
      </Stack>
    </div>
  );
}

export default PRTemplatePage;
