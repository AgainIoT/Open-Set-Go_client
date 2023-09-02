import styled from "styled-components";
import { PropTypes } from "prop-types";
import { Button } from "@mui/material";
import { useState } from "react";

export const SlideContent = (props) => {
  const btnActive = () => {
    const target = document.getElementById("SubmitBtn");
    target.disabled = false;
  };

  const pmsList = props.data.conditions.permissions.map((p) => (
    <PermissionContent key={p}>
      <li>{p}</li>
    </PermissionContent>
  ));
  const limList = props.data.conditions.limitations.map((p) => (
    <LimitationContent key={p}>
      <li>{p}</li>
    </LimitationContent>
  ));
  const conList = props.data.conditions.conditions.map((p) => (
    <ConditionContent key={p}>
      <li>{p}</li>
    </ConditionContent>
  ));
  return (
    <StSlideContent className="StSlideContent">
      <InformationBox>
        <Title>
          <h1>{props.data.license}</h1>
        </Title>
        <Content>
          <p>{props.data.description}</p>
        </Content>
      </InformationBox>
      <ConditionBox>
        <div>
          <Condition>
            <h2>Permission</h2>
          </Condition>
          <ul>{pmsList}</ul>
        </div>
        <div>
          <Condition>
            <h2>Limitations</h2>
          </Condition>
          <ul>{limList}</ul>
        </div>
        <div>
          <Condition>
            <h2>Conditions</h2>
          </Condition>
          <ul>{conList}</ul>
        </div>
      </ConditionBox>
      <TmpDiv>
        <LinkDiv>
          <LinkText>This is not legal advice. </LinkText>
          <LinkA href={props.data.url}>
            Learn more about repository licenses.
          </LinkA>
        </LinkDiv>
        <BtnDiv>
          <SubmitBtn className="SubmitBtn" variant="contained" color="success">
            Select
          </SubmitBtn>
        </BtnDiv>
      </TmpDiv>
    </StSlideContent>
  );
};

SlideContent.propTypes = {
  data: PropTypes.node.isRequired,
};

const StSlideContent = styled.div`
  border-radius: 0.5rem;
  border: 0.01rem outset #dedede;
  padding: 4rem 4rem 2rem 4rem;
  margin: 0 auto;
  white-space: pre-wrap;
  background-color: white;
  box-shadow: 0.2rem 0.2rem 0.3rem #dedede;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
  gap: 1rem;
`;

const InformationBox = styled.div`
  /* background-color: pink; */
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  padding: 1rem 1rem 1rem 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.7rem;
  text-align: justify;
`;

const ConditionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  div {
    //permissions limitations conditions
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    gap: 0.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    //    list-style-image: url("https://ifh.cc/g/twayry.png");
  }
`;

const Condition = styled.h2`
  font-size: 1.2rem;
  justify-items: center;
  font-weight: bold;
`;

const SharedContent = `
display: block;
padding-inline-start: 2ch;


`;

const PermissionContent = styled.li`
  ${SharedContent}
  list-style-type: "✔️";
`;

const LimitationContent = styled.li`
  ${SharedContent}
  list-style-type: "❌";
`;

const ConditionContent = styled.li`
  ${SharedContent}
  /* list-style: disc; */
  list-style-type: "ℹ️";
`;

const TmpDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 6rem;
  flex-direction: column;
`;

const LinkDiv = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: left;
`;

const LinkText = styled.p`
  display: flex;
`;

const LinkA = styled.a`
  &:visited {
    color: #4b80eb;
  }
  &:link {
    color: #4b80eb;
  }
  &:hover {
    color: #4b80eb;
  }
  &:active {
    color: #4b80eb;
  }
`;
const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const SubmitBtn = styled(Button)`
  font-size: 1.1rem;
  height: fit-content;
  width: 25%;
  text-transform: none; //대문자 고정 취소
  white-space: nowrap;
  padding: 0.5rem 1rem 0.4rem 1rem;
`;

export default SlideContent;
