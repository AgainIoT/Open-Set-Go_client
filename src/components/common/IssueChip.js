import styled from "styled-components";
import { COLOR } from "../../styles/color";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";

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
  const handleDelete = (chipToDelete) => () => {
    setChipData(
      (chips) => chips.filter((chip) => chip !== chipToDelete),
      //title이 같으면 칩리스트에서 제거(Recoil로 제어)
    );
  };
  return (
    <StIssueChip component="ul">
      {chipData.map((data) => {
        return (
          <li key={data}>
            <SelectedChip label={data} onDelete={handleDelete(data)} />
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
