import styled from "styled-components";
import { useRecoilState } from "recoil";
import Chip from "@mui/material/Chip";
import { issueSelectedState} from "../../recoil/issueState";

const IssueChip = () => {
  const [types, setTypes] = useRecoilState(issueSelectedState("type"));
  const [selectedInfo, setSelectedInfo] = useRecoilState(issueSelectedState("issue"));
  const [selectedInfo22, setSelectedInfo22] = useRecoilState(issueSelectedState("typeAndTitle"));
  const [selectedInfo33, setSelectedInfo33] = useRecoilState(issueSelectedState("uname"));
  const handleDelete = (typeToDelete, unameToDelete) => () => {
    const newTmp = selectedInfo22.filter((it)=> it.type !== typeToDelete);
    setSelectedInfo22(
      newTmp
    );
    const tmp = selectedInfo33.filter((it)=> it !== unameToDelete);
    setSelectedInfo33(tmp);
    const typetmp = types.filter((it)=> it !== typeToDelete[0]);
    setTypes(typetmp);

  };
  return (
    <StIssueChip component="ul">
      {selectedInfo22.map((data) => {
        return (
          <li key={data.type}>
            <SelectedChip label={data.type} onDelete={handleDelete(data.type, data.uname)} />
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
