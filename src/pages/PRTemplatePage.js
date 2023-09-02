import React, { useState, useEffect } from "react";
import {TemplateList} from "../components/common/template/TemplateList";
import TemplateTitle from "../components/common/template/TemplateTitle";
import TemplateBody from "../components/common/template/TemplateBody";

function PRTemplatePage() {
  const [title, setTitle] = useState("");

  return (
    <TemplateList setTitle = {setTitle} />,
    console.log(setTitle),
    <div style = {{display: "flex", flexDirection: "row"}}>
      {<TemplateList />}
      <div style = {{display: "flex", flexDirection: "column"}}>
        {<TemplateTitle />}
        {<TemplateBody />}
      </div>
    </div>
  );
}

export default PRTemplatePage;
