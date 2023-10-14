import styled from "styled-components";
import { COLOR } from "../../styles/color";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";

// const ListItem = styled("li")(({ theme }) => ({
//   margin: theme.spacing(0.5),
// }));

const IssueChip = () => {
  const [chipData, setChipData] = useState(["Bug Report for Web Service", "Bug Report for Web Service2", "Feature Request for Web Service", "Documentation Issue for Web Service"]);
  const handleDelete = (chipToDelete) => () => {
    setChipData(
      (chips) => chips.filter((chip) => chip !== chipToDelete),
      //title이 같으면 칩리스트에서 제거(Recoil로 제어)
    );
  };
  return (
    <StIssueChip
      component="ul"
    >
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
  justify-content: left;
  width: 100%;
  list-style: none;
  flex-wrap: wrap;
  padding: 1rem;
  width: 100%;
  height: 80%;
`;

const SelectedChip = styled(Chip)`
  margin-right: 2rem;
  margin-bottom: 1rem;
`;
export default IssueChip;
