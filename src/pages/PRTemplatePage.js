import TemplateList from "../components/common/template/TemplateList";
import TemplateTitle from "../components/common/template/TemplateTitle";
import TemplateBody from "../components/common/template/TemplateBody";

function PRTemplatePage() {

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

export default PRTemplatePage;

