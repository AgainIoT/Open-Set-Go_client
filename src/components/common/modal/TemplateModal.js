import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateMode } from "../../../recoil/templateState";
import { TemplateList } from "../template/TemplateList";
import { GenerateList } from "../template/GenerateList";
import TemplateTitle from "../template/TemplateTitle";
import TemplateBody from "../template/TemplateBody";

// props -> type(pr, readme, contributing)
export const TemplateModal = (props) => {
  const templateMod = useRecoilValue(templateMode);

  return (
    <div style={{ display: "flex", width:"100%", flexDirection: "row"}}>
      {templateMod ? (
        <GenerateList type={props.type} />
      ) : (
        <TemplateList type={props.type} />
      )}
      <div style={{ display: "flex", width: "100%", flexDirection: "column"}}>
        <TemplateTitle type={props.type} />
        <TemplateBody type={props.type} />
      </div>
    </div>
  );
};
