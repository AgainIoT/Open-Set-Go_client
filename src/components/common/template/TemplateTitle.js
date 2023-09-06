import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRecoilState } from "recoil";
import { templateContent, templateState } from "../../../recoil/templateState";
import styled from "styled-components";
import { prOpenState } from "../../../recoil/openModal";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.secondary",
  width: "100%",
  height: "25%",
};

export default function TemplateTitle(props) {
  const [selectValue, setSelectValue] = useRecoilState(templateState);
  const [content, setContent] = useRecoilState(templateContent);
  const [modalValue, setModalValue] = useRecoilState(prOpenState);

  const handleClose = () => setModalValue(false);

  return (
    <box>
      <Box sx={{ ...commonStyles, borderBottom: 1, height: "100%" }}>
        {/* <Typography
          component="h1"
          className="title"
          id="PR-title"
          variant="h3"
          gutterBottom
          textColor="inherit"
          fontWeight="lg"
          m={2}
        >
          {selectValue.title}
        </Typography>
        <Typography
          id="PR-desc"
          variant="h5"
          gutterBottom
          color="textSecondary"
          m={2}
        >
          {selectValue.repoName}
        </Typography> */}
        <Button
          variant="contained"
          m={4}
          onClick={() => {
            setContent(selectValue);
          }}
        >
          Use Template
        </Button>
      </Box>
    </box>
  );
}
