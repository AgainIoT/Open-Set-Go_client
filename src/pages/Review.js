import styled from "styled-components";
import { COLOR } from "../styles/color";
import { useRecoilState } from "recoil";
import { FirstInfo } from "../components/review/FirstInfo";
import { FirstContents } from "../components/review/FirstContents";
import { SecondContents } from "../components/review/SecondContents";
import { SecondInfo } from "../components/review/SecondInfo";
import { reviewRepoDataState } from "../recoil/reviewState";

function OperationalReviewPage() {
  const [page, setPage] = useRecoilState(reviewRepoDataState("page"));

  const InfoComponent = () => {
    switch (page) {
      case 0:
        return <FirstInfo />;
      case 1:
        return <SecondInfo />;
      default:
        return <FirstInfo />;
    }
  };
  const MainComponent = () => {
    switch (page) {
      case 0:
        return <FirstContents />;
      case 1:
        return <SecondContents />;
      default:
        return <FirstContents />;
    }
  };

  return (
    <StOperationalReviewPage>
      <InfoSection>
        <InfoComponent />
      </InfoSection>
      <MainSection>
        <MainComponent />
      </MainSection>
    </StOperationalReviewPage>
  );
}
export default OperationalReviewPage;

const StOperationalReviewPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
`;

const InfoSection = styled.div`
  width: 33%;
  height: 100%;
  padding: 6rem 4rem;
  background-color: ${COLOR.MAIN_BACKGROUND};
`;
const MainSection = styled.div`
  width: 67%;
  height: 100%;
  padding: 1rem;
  background-color: ${COLOR.MAIN_WHITE};
`;
