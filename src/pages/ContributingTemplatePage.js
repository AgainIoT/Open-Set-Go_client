import React, { useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateContent, templateState } from "../recoil/templateState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { TemplateModal } from "../components/common/modal/templateModal";
import { eachStepState, modalState } from "../recoil/commonState";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { styled } from "styled-components";

function ContributingTemplatePage(props) {
  const [modalValue, setModalValue] = useRecoilState(
    modalState("contributing"),
  );
  const [content, setContent] = useRecoilState(templateContent("contributing"));
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("4"));

  useEffect(() => {
    setStepComplted(true);
  }, []);

  const handlesave = () => {
    //value 고대로 저장해서 server로 보내야함. 이건 추후에 백엔드랑 회의 후 정해야할 듯
  };

  const handleOpen = () => setModalValue(true);

  return (
    <StReadmeTemplatePage>
      <BaseModal type={"contributing"}>
        <TemplateModal type={"contributing"} />
      </BaseModal>
      <MarkdownPreview type={"contributing"} />
      <Button onClick={handlesave} variant="contained" color="success">
        저장
      </Button>
      <Button onClick={handleOpen} variant="contained" color="success">
        Modal
      </Button>
    </StReadmeTemplatePage>
  );
}

const StReadmeTemplatePage = styled.div`
  width: 100%;
  height: 100%;
`;

export default ContributingTemplatePage;
