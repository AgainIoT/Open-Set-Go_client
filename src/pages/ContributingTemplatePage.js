import { styled } from "styled-components";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "@mui/material/Button";
import { templateContent, templateState } from "../recoil/templateState";
import { eachStepState, modalState } from "../recoil/commonState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { TemplateModal } from "../components/common/modal/templateModal";
import MarkdownPreview from "../components/common/MarkdownPreview";
import MDEditor from "@uiw/react-md-editor";

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
  };

  const handleOpen = () => setModalValue(true);

  return (
    <StReadmeTemplatePage>
      <BaseModal type={"contributing"}>
        <TemplateModal type={"contributing"} />
      </BaseModal>
      <MarkdownPreview type={"contributing"} />
    </StReadmeTemplatePage>
  );
}

const StReadmeTemplatePage = styled.div`
  width: 100%;
  height: 100%;
`;

export default ContributingTemplatePage;
