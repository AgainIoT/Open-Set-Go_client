import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../../../recoil/commonState";
import GITHUB from "../../../assets/icons/github.svg";
import {
  templateContent,
  templatePreviewState,
  templateSelectState,
  templateListType,
} from "../../../recoil/templateState";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";
import { blue } from "@mui/material/colors";

// props -> type(pr, readme, contributing)
export default function TemplateTitle(props) {
  const [selectValue, setSelectValue] = useRecoilState(
    templateSelectState(props.type),
  );
  const showValue = useRecoilValue(templatePreviewState(props.type));
  const [content, setContent] = useRecoilState(templateContent(props.type));
  const [modalValue, setModalValue] = useRecoilState(modalState(props.type));
  const [listType, setListType] = useRecoilState(templateListType);

  const handleSelect = () => {
    if (listType) {
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
    <Box padding={2}>
      <Typography
        id="PR-title"
        variant="h2"
        textColor="inherit"
        fontWeight="lg"
        m={2}
      >
        {showValue.length ? showValue[0].title : ""}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LinkEntireDiv>
          {showValue.length && showValue[0].repoUrl ? (
            <LinkDiv
              onClick={() => {
                window.open(showValue[0].repoUrl);
              }}
            >
              <GithubImg src={GITHUB} />
              <Typography
                id="PR-desc"
                variant="h5"
                gutterBottom
                color="textSecondary"
                m={1}
              >
                {showValue[0].subtitle}&nbsp;
                <LinkIcon />
              </Typography>
            </LinkDiv>
          ) : null}
        </LinkEntireDiv>
        {showValue.length && showValue[0].id ? (
          <Button
            variant="contained"
            sx={{ height: "4rem", marginRight: "1.6rem" }}
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

const GithubImg = styled.img`
  width: 2.3rem;
  height: 2.3rem;
`;

const LinkEntireDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 1.8rem;
`;
