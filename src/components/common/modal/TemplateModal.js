import styled from "styled-components";
import React from "react";
import { useRecoilValue } from "recoil";
import { templateMode } from "../../../recoil/templateState";
import { TemplateList } from "../template/TemplateList";
import TemplateTitle from "../template/TemplateTitle";
import TemplateBody from "../template/TemplateBody";

// props -> type(pr, readme, contributing)
export const TemplateModal = (props) => {
  const templateMod = useRecoilValue(templateMode);

  return (
    <TemplateContainer>
      <TemplateList type={props.type} mode={templateMod} />
      <TemplateContents>
        <TemplateTitle type={props.type} />
        <TemplateBody type={props.type} />
      </TemplateContents>
    </TemplateContainer>
  );
};

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const TemplateContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
