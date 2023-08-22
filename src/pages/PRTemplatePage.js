import * as PropTypes from "prop-types";
import MarkdownPreview from "../components/common/MarkdownPreview";
import TemplateModal from "../components/common/TemplateModal";

function PRTemplatePage() {

  return (
    <div>
      <div>
        <MarkdownPreview />
      </div>
      <TemplateModal />
    </div>
  );
}

export default PRTemplatePage;
