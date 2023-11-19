'use client';

import styled from 'styled-components';
import Image from 'next/image';
import CurvedImage from '/public/assets/images/404/curveImg.png';

function NotFoundPage() {
  return (
    <StErrorPage>
      <ContentWrapper>
        <ErrorTitleP>404</ErrorTitleP>
        <ErrorinfoP>Opps... This page was not found.</ErrorinfoP>
        <DetailP>The requested URL can not be found or might be temporarily unavailable.</DetailP>
      </ContentWrapper>
      <Bgimg src={CurvedImage} alt='curved image' />
    </StErrorPage>
  );
}

const StErrorPage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  height: 60%;
  margin-bottom: 3rem;
`;

const ErrorTitleP = styled.p`
  font-size: 18rem;
  font-family: var(--font-IBM);
  font-weight: bolder;
`;

const ErrorinfoP = styled.p`
  padding-top: 1rem;
  font-size: 2.5rem;
  font-family: var(--font-IBM);
  font-weight: bold;
`;
const DetailP = styled.p`
  padding-top: 1rem;
  font-size: 1.5rem;
  font-family: var(--font-IBM-light);
  font-weight: lighter;
`;

const Bgimg = styled(Image)`
  width: 100%;
  height: 40%;
`;

export default NotFoundPage;
