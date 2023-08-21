import styled from "styled-components";
import React, { useState } from "react";
import MyModal from "../components/common/TemplateModal";
import * as PropTypes from "prop-types";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { Layout } from "../layout/Layout";

function PRTemplatePage() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickSubmit = () => {
    setOpen(false);
  };

  const handleClickCancel = () => setOpen(false);

  return (
    <div>
      <div>
        <MarkdownPreview />
      </div>
      <button onClick={handleClick}>Find Template</button>
      <MyModal
        isOpen={isOpen}
        onSubmit={handleClickSubmit}
        onCancel={handleClickCancel} />
    </div>
  );
}

PRTemplatePage.propTypes = {
  isOpen: PropTypes.node.isRequired,
};

export default PRTemplatePage;
