import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TemplateList } from "../template/TemplateList";
import TemplateTitle from "../template/TemplateTitle";
import TemplateBody from "../template/TemplateBody";

// props -> type(pr, readme, contributing)
export const TemplateModal = (props) => {

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <TemplateList type={props.type} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TemplateTitle type={props.type} />
        <TemplateBody type={props.type} />
      </div>
    </div>
  );
};
