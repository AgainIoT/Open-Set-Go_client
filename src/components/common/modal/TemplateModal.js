import styled from "styled-components";
import React from "react";
import { TemplateList } from "../template/TemplateList";
import TemplateTitle from "../template/TemplateTitle";
import TemplateBody from "../template/TemplateBody";
import { Paper } from "@mui/material";

// props -> type(pr, readme, contributing)
export const TemplateModal = (props) => {
  return (
    <TemplateContainer>
      <TemplateList type={props.type} />
      <TemplateContents>
        <TemplateTitle type={props.type} />
        <TemplateBody type={props.type} />
      </TemplateContents>
    </TemplateContainer>
  );
};

const TemplateContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
}));

const TemplateContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
