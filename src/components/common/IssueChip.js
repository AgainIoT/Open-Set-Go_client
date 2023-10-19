import styled from "styled-components";
import { useRecoilState } from "recoil";
import Chip from "@mui/material/Chip";
import { issueSelectedState, typesLst } from "../../recoil/issueState";

const IssueChip = () => {
  const [selectedInfo, setSelectedInfo] = useRecoilState(issueSelectedState("issue"));
  const [types, setTypes] = useRecoilState(typesLst);
  const handleDelete = (chipToDelete) => () => {
    const newTmp = selectedInfo.filter((it)=> it.type !== chipToDelete);
    setSelectedInfo(
      newTmp
    );
    const tmp = types.filter((it)=>it !== chipToDelete[0]);
    setTypes(tmp);

  };
  return (
    <StIssueChip component="ul">
      {selectedInfo.map((data) => {
        return (
          <li key={data.type}>
            <SelectedChip label={data.type} onDelete={handleDelete(data.type)} />
          </li>
        );
      })}
    </StIssueChip>
  );
};

const StIssueChip = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  margin-left: 1rem;
  white-space: nowrap;
  overflow-x: scroll;
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
