import styled from "styled-components";
import React from "react";
import { useRecoilValue } from "recoil";
import { templateMode } from "../../../recoil/templateState";
import { TemplateList } from "../template/TemplateList";
import { GenerateList } from "../template/GenerateList";
import TemplateTitle from "../template/TemplateTitle";
import TemplateBody from "../template/TemplateBody";

// props -> type(pr, readme, contributing)
export const TemplateModal = (props) => {
  const templateMod = useRecoilValue(templateMode);

  return (
    <TemplateContainer>
      {templateMod ? (
        <GenerateList type={props.type} />
      ) : (
        <TemplateList type={props.type} />
      )}
      <TemplateContents>
        <TemplateTitle type={props.type} />
        <TemplateBody type={props.type} />
      </TemplateContents>
    </TemplateContainer>
  );
};

const TemplateContainer = styled.div`
  display: flex;
  width: 100%;
  flexdirection: row;
`;

const TemplateContents = styled.div`
  display: flex;
  width: 100%;
  flexdirection: column;
`;
