import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useRecoilState } from "recoil";
import { modalState } from "../../../recoil/commonState";
import { Dialog } from "@mui/material";

export const BaseDialog = (props) => {
  const handleClose = () => setDialogValue(false);

  const [dialogValue, setDialogValue] = useRecoilState(modalState(props.type));

  return (
    <StDialog
      keepMounted
      open={dialogValue}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <DialogContainer>{props.children}</DialogContainer>
    </StDialog>
  );
};

const StDialog = styled(Dialog)``;
const DialogContainer = styled.div`
  display: flex;
  width: 40%;
  height: 50%;
  padding: 2rem;
  margin-top: 1rem;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 2rem;
  background-color: ${COLOR.MAIN_WHITE};
`;
