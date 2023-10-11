import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";
import {
  templateContent,
  templatePreviewState,
  templateSelectState,
} from "../../../recoil/templateState";
import { modalState } from "../../../recoil/commonState";


// props -> type(pr, readme, contributing)
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
      <Box sx={{ ...commonStyles, borderBottom: 1, height: "100%", maxWidth: "80%" }}>
        <Typography
          id="title"
          variant="h2"
          textColor="inherit"
          fontWeight="lg"
          m={2}

        >
          {showValue.title}
        </Typography>
        <Typography
          id="desc"
          variant="h5"
          gutterBottom
          color="textSecondary"
          m={2}
        >
          {showValue.repoName}
          <LinkIcon onClick={() => {
            window.open(showValue.repoUrl);
          }}></LinkIcon>
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

const commonStyles = {
  width: "100%",
  height: "25%",
  m: 1,
  borderColor: "text.secondary",
  bgcolor: "background.paper",
};
