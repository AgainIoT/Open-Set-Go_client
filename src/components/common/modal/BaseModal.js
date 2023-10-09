import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useRecoilState } from "recoil";
import { modalState } from "../../../recoil/commonState";
import Modal from "@mui/material/Modal";

export const BaseModal = (props) => {
  const handleClose = () => setModalValue(false);

  const [modalValue, setModalValue] = useRecoilState(modalState(props.type));

  return (
    <StBaseModal
      keepMounted
      open={modalValue}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <ModalContainer>{props.children}</ModalContainer>
    </StBaseModal>
  );
};

const StBaseModal = styled(Modal)``;
const ModalContainer = styled.div`
  display: flex;
  width: 60%;
  height: 70%;
  padding: 2rem;
  margin-top: 1rem;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 2rem;
  background-color: ${COLOR.MAIN_WHITE};
`;
