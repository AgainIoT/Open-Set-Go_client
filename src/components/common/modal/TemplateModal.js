import styled from "styled-components";
import React from "react";
import { TemplateList } from "../template/TemplateList";
import TemplateTitle from "../template/TemplateTitle";
import TemplateBody from "../template/TemplateBody";

// props -> type(pr, readme, contributing)
export const TemplateModal = (props) => {
  return (
    <TemplateContainer>
      <TemplateList type={props.type} mode={props.mode} />
      <TemplateContents>
        <TemplateTitle type={props.type} mode={props.mode} />
        <TemplateBody type={props.type} mode={props.mode}/>
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
  height: 100%;
  width: 100%;
`;
