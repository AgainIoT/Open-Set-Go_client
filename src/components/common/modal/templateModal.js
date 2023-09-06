import React, { useState, useEffect } from "react";
import { TemplateList } from "../template/TemplateList";
import TemplateTitle from "../template/TemplateTitle";
import TemplateBody from "../template/TemplateBody";
import { useRecoilState, useRecoilValue } from "recoil";

// props -> type(pr,readme, contributing)
export const TemplateModal = (props) => {
  console.log(props.type);

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
