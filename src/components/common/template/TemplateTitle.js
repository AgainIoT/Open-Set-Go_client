import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  templateContent,
  templatePreviewState,
  templateSelectState,
} from "../../../recoil/templateState";
import styled from "styled-components";
import { modalState } from "../../../recoil/commonState";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.secondary",
  width: "100%",
  height: "25%",
};

export default function TemplateTitle(props) {
  const [selectValue, setSelectValue] = useRecoilState(
    templateSelectState(props.type),
  );
  const showValue = useRecoilValue(templatePreviewState(props.type));
  const [content, setContent] = useRecoilState(templateContent(props.type));
  const [modalValue, setModalValue] = useRecoilState(modalState(props.type));

  const handleSelect = () => {
    if (props.type === "contributing") {
      setSelectValue(selectValue.concat({ _id: showValue._id }));
      setContent(content + "\n" + showValue.content);
    } else {
      setSelectValue({ _id: showValue._id });
      setContent(showValue.content);
    }
  };
  const handleClose = () => setModalValue(false);

  return (
    <box>
      <Box sx={{ ...commonStyles, borderBottom: 1, height: "100%", maxWidth: 700 }}>
        <Typography
          component="h1"
          className="title"
          id="PR-title"
          variant="h3"
          gutterBottom
          textColor="inherit"
          fontWeight="lg"
          m={2}
        >
          {showValue.title}
        </Typography>
        <Typography
          id="PR-desc"
          variant="h5"
          gutterBottom
          color="textSecondary"
          m={2}
        >
          {showValue.repoName}
        </Typography>
        <Button
          variant="contained"
          m={4}
          onClick={() => {
            handleSelect();
          }}
        >
          Use Template
        </Button>
      </Box>
    </box>
  );
}
