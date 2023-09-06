import React, { useState, useEffect } from "react";
import { TemplateList } from "../template/TemplateList";
import TemplateTitle from "../template/TemplateTitle";
import TemplateBody from "../template/TemplateBody";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateState, templateToModal } from "../../../recoil/templateState";

function TemplateModal(props) {
  const [modal, setModal] = useRecoilState(templateToModal);

  console.log(props.type);

  useEffect(() => {
    setModal({ type: props.type });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {<TemplateList type={props.type} />}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {<TemplateTitle type={props.type} />}
        {<TemplateBody />}
      </div>
    </div>
  );
}

export default TemplateModal;
