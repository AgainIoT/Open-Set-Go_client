import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRecoilState, useRecoilValue } from "recoil";
import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";
import { issueSelectedState, selectedTitle } from "../../recoil/issueState";

const IssueChip = () => {
  const [chipData, setChipData] = useState([
    "Bug Report for Web Service",
    "Bug Report for Web Service2",
    "Bug Report for Web Service2",
    "Bug Report for Web Service2",
    "Bug Report for Web Service2",
    "Feature Request for Web Service",
    "Documentation Issue for Web Service",
  ]);
  const [temTitle, setTemTitle] = useRecoilState(selectedTitle);
  const [selectedInfo, setSelectedInfo] = useRecoilState(issueSelectedState({
    temTitle: "",
    uname: "",
    desc: "",
    title: "",
  }));

  const handleDelete = (chipToDelete) => () => {
    const newTmp = selectedInfo.filter((it)=> it.temTitle !== chipToDelete);
    setSelectedInfo(
      newTmp
    );
  };
  return (
    <StIssueChip component="ul">
      {selectedInfo.map((data) => {
        return (
          <li key={data.temTitle}>
            <SelectedChip label={data.temTitle} onDelete={handleDelete(data.temTitle)} />
          </li>
        );
      })}
    </StIssueChip>
  );
};

const StIssueChip = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70%;
  overflow-x: scroll;
  white-space: nowrap;
  list-style: none;
  margin-top: 1rem;
  margin-left: 1rem;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(1, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const SelectedChip = styled(Chip)`
  margin-right: 2rem;
`;
export default IssueChip;
