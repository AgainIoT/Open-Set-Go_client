import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useRecoilState } from "recoil";
import { modalState } from "../../../recoil/commonState";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";

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
      <ModalContainer>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            fontSize: "10rem",
            cursor: "pointer",
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        {props.children}
      </ModalContainer>
    </StBaseModal>
  );
};

const StBaseModal = styled(Modal)``;
const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 70%;
  min-width: 103rem;
  padding: 2rem;
  border-radius: 2rem;
  background-color: ${COLOR.MAIN_WHITE};
  transform: translate(-50%, -50%);
`;
