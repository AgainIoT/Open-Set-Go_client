import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useRecoilState } from "recoil";
import { Box, Button, DialogContent, DialogTitle } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import { modalState } from "../../../recoil/commonState";

export const CancelDialog = (props) => {
  const navigate = useNavigate();

  const [dialogValue, setDialogValue] = useRecoilState(modalState(props.type));

  const handleClose = () => {
    setDialogValue(false);
  };

  return (
    <StCancelDialog>
      <Icon />
      <DialogTitleText>Are you sure?</DialogTitleText>
      <DialogContentText>If you cancel, all the content you are creating will disappear.</DialogContentText>
      <DialogBtnContainer>
        <DialogBtn
          variant="contained"
          onClick={() => navigate("")}
          autoFocus
          disableElevation
          bhcolor={COLOR.MAIN_BLUE}
        >
          Go Main Page!
        </DialogBtn>
        <DialogBtn
          variant="outlined"
          onClick={handleClose}
          bhcolor={COLOR.MAIN_WHITE}
        >
          Cancel
        </DialogBtn>
      </DialogBtnContainer>
    </StCancelDialog>
  );
};

const StCancelDialog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Icon = styled(CancelIcon)`
  color: ${COLOR.MAIN_BLUE};
  font-size: 7rem;
`;

const DialogTitleText = styled(DialogTitle)`
  font-size: 2rem;
  font-weight: 600;
`;

const DialogContentText = styled(DialogContent)`
  color: ${COLOR.BORDER_GRAY};
  font-size: 1.5rem;
`;

const DialogBtnContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;
`;

const DialogBtn = styled(Button)`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 2rem;
  background-color: ${(props) => props.bgcolor};
  font-size: 1.5rem;
`;
