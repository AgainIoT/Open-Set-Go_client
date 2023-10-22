import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useRecoilState } from "recoil";
import { Dialog } from "@mui/material";
import { modalState } from "../../../recoil/commonState";

export const BaseDialog = (props) => {
  const [dialogValue, setDialogValue] = useRecoilState(modalState(props.type));

  const handleClose = () => setDialogValue(false);

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

const StDialog = styled(Dialog)`
  display: flex;
  width: 100%;
`;
const DialogContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 50%;
  padding: 3.5rem 2rem 2rem 2rem;
  border-radius: 1.5rem;
  background-color: ${COLOR.MAIN_WHITE};
`;
