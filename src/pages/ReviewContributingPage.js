import { styled } from "styled-components";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { templateContent, templateMode } from "../recoil/templateState";
import { eachStepState,modalState } from "../recoil/commonState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { TemplateModal } from "../components/common/modal/TemplateModal";
import MarkdownPreview from "../components/common/MarkdownPreview";

function ReviewContributingPage(props) {
  const [modalValue, setModalValue] = useRecoilState(modalState("contributing"));
  const [content, setContent] = useRecoilState(templateContent("contributing"));
  const [templateMod, setTemplateMod] = useRecoilState(templateMode);
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("5"));

  useEffect(() => {
    setStepComplted(true);
  }, []);
  // async function postContributingData() {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_SERVER_URL}/review/file/contributing`,
  //       {
  //         contributingMd: content,
  //       },
  //       {
  //         withCredentials: true,
  //       },
  //     );
  //   } catch (e) {
  //     console.error(e);
  //     alert("Failed File post");
  //   }
  // }

  // const handlePost = async () => {
  //   await postContributingData();
  // };
  const handleOpen = (toggle) => {
    setModalValue(true);
  };
  const handlePost = () => {
    console.log(content);
  };

  return (
    <StReviewContributingPage>
      <BaseModal type={"contributing"}>
        <TemplateModal type={"contributing"} />
      </BaseModal>
      <MarkdownPreview type={"contributing"} />
    </StReviewContributingPage>
  );
}

const StReviewContributingPage = styled.div`
  width: 100%;
  height: 100%;
  min-width: 60rem;
  min-height: 40rem;
`;

export default ReviewContributingPage;
