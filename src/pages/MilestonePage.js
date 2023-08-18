import styled from "styled-components";
import { COLOR } from "../styles/color";
import { Layout } from "../layout/Layout";
import BasicAccordion from "../components/common/Accordion";
function MilestonePage() {
  return (
    <div>
      <div>
        <Layout/>
      </div>
      <MilestoneContainter>
        <BasicAccordion/>
      </MilestoneContainter>
    </div>
  );
}

const MilestoneContainter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20%;
  padding: 1rem 2rem 1rem 2rem;
`;

export default MilestonePage;
