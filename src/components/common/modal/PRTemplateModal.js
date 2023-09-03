import React, { useState, useEffect } from "react";
import {TemplateList} from "../template/TemplateList";
import TemplateTitle from "../template/TemplateTitle";
import TemplateBody from "../template/TemplateBody";

function PRTemplateModal() {

  return (
    <div style = {{display: "flex", flexDirection: "row"}}>
      {<TemplateList />}
      <div style = {{display: "flex", flexDirection: "column"}}>
        {<TemplateTitle />}
        {<TemplateBody />}
      </div>
    </div>
  );
}

export default PRTemplateModal;
