import styled from "styled-components";
import Modal from "@mui/joy/Modal";
import ReactModal from "react-modal";
import * as PropTypes from "prop-types";

const MyModal = ({ isOpen, onSubmit, onCancel }) => {
  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onCancel();
  };

  return (
    <TemplateContainer>
      <ReactModal isOpen={isOpen}>
        <div>모달 입니다.</div>
        <div>
          <button onClick={handleClickSubmit}>확인</button>
          <button onClick={handleClickCancel}>취소</button>
        </div>
      </ReactModal></TemplateContainer>
  );
};

const TemplateContainer = styled.div`
  width: 40%;
  height: 300px;
`;

MyModal.propTypes = {
  isOpen: PropTypes.node.isRequired,
  onSubmit: PropTypes.node.isRequired,
  onCancel: PropTypes.node.isRequired,
};

export default MyModal;
