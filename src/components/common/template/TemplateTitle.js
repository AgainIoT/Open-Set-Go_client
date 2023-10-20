import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../../../recoil/commonState";
import {
  templateContent,
  templatePreviewState,
  templateSelectState,
  templateMode,
} from "../../../recoil/templateState";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";

// props -> type(pr, readme, contributing)
export default function TemplateTitle(props) {
  const [selectValue, setSelectValue] = useRecoilState(
    templateSelectState(props.type),
  );
  const showValue = useRecoilValue(templatePreviewState(props.type));
  const [content, setContent] = useRecoilState(templateContent(props.type));
  const [modalValue, setModalValue] = useRecoilState(modalState(props.type));
  const [templateMod, setTemplateMod] = useRecoilState(templateMode);

  const handleSelect = () => {
    if (templateMod) {
      // setSelectValue(selectValue.concat({ _id: showValue._id }));
      setContent(showValue.map((obj) => obj["content"]).join("\n"));
    } else {
      setSelectValue({ _id: showValue[0].id });
      setContent(showValue[0].content);
    }
    handleClose();
  };

  const handleClose = () => setModalValue(false);

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography
        id="PR-title"
        variant="h2"
        textColor="inherit"
        fontWeight="lg"
        m={2}
      >
        {showValue.length ? showValue[0].title : ""}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          id="PR-desc"
          variant="h5"
          gutterBottom
          color="textSecondary"
          m={2}
        >
          {showValue.length ? showValue[0].subtitle : ""}
          {showValue.length && showValue[0].repoUrl ? (
            <LinkIcon
              onClick={() => {
                window.open(showValue[0].repoUrl);
              }}
            ></LinkIcon>
          ) : null}
        </Typography>
        {showValue.length && showValue[0].id ? (
          <Button
            variant="contained"
            sx={{ height: "4rem" }}
            onClick={() => {
              handleSelect();
            }}
          >
            Use Template
          </Button>
        ) : null}
      </Box>
    </Box>
  );
}
