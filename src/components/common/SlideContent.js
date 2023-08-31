import styled from "styled-components";
import { PropTypes } from "prop-types";
import { Button } from "@mui/material";

export const SlideContent = (props) => {
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
    <StSlideContent>
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
      <BtnDiv>
        <SubmitBtn variant="contained" color="success">
          Review and Submit
        </SubmitBtn>
      </BtnDiv>
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
  /* margin: 0rem 0rem 0rem 1rem; */
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
  /* margin: 1rem 1.8rem 1rem 1rem; */
  justify-content: space-between;
  width: 100%;

  div {
    flex-direction: column;
    height: 100%;
    gap: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
//    list-style-image: url("https://ifh.cc/g/twayry.png");

  }
`;

const Condition = styled.h2`
  padding: 2rem 1rem 1rem 1.8rem;
  font-size: 1.2rem;
  justify-items: center;
  font-weight: bold;
`;

const PermissionContent = styled.li `
  display: block;
  list-style-type: "✔️";
  padding-inline-start: 5ch;
`;

const LimitationContent = styled.li `
  display: block;
  list-style-type: "❌";
  padding-inline-start: 5ch;
`;

const ConditionContent = styled.li`
  display: block;
  /* list-style: disc; */
  list-style-type: "ℹ️";
  padding-inline-start: 5ch;
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.8rem;
  justify-content: right;
  align-items: flex-end;
`;

const SubmitBtn = styled(Button)`
  font-size: 1.3rem;
  height: fit-content;
  text-transform: none; //대문자 고정 취소
  white-space: nowrap;
  padding: 0.5rem 1rem 0.4rem 1rem;
`;

export default SlideContent;
