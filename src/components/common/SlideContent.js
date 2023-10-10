import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Button } from "@mui/material";
import { repoDataAtomFamily } from "../../recoil/repoData";
import { PropTypes } from "prop-types";

//SlideContent: Internal component in the slick to be used in the license page
//using props to connect data to Slide
export const SlideContent = (props) => {
  //using recoil to send finally selected license url to the server
  const [pickLi, setPickLi] = useRecoilState(repoDataAtomFamily("license"));

  const onSet = () => {
    setPickLi(props.data.url);
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
    <StSlideContent className="StSlide">
      <DivBox>
        <InformationBox className="InformationBox">
          <Title>
            <h1>{props.data.license}</h1>
          </Title>
          <Content>
            <p>{props.data.description}</p>
          </Content>
        </InformationBox>
        <ConditionBox className="ConditionBox">
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
        <LinkBox className="LinkBox">
          <LinkDiv>
            <LinkText>
              This is not legal advice.&nbsp;
              <LinkA href={props.data.url}>
                Learn more about repository licenses.
              </LinkA>
            </LinkText>
          </LinkDiv>
          {pickLi === props.data.url ? (
            <BtnDiv className="BtnDiv">
              <SelectedBtn
                className="SubmitBtn"
                variant="contained"
                onClick={onSet}
              >
                Selected
              </SelectedBtn>
            </BtnDiv>
          ) : (
            <BtnDiv>
              <SubmitBtn
                className="SubmitBtn"
                variant="contained"
                onClick={onSet}
              >
                Select
              </SubmitBtn>
            </BtnDiv>
          )}
        </LinkBox>
      </DivBox>
    </StSlideContent>
  );
};

SlideContent.propTypes = {
  data: PropTypes.node.isRequired,
  pickLi: PropTypes.node.isRequired,
  setPickLi: PropTypes.node.isRequired,
};

const StSlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
  border: 0.01rem outset #dedede;
  border-radius: 0.5rem;
  background-color: white;
  white-space: pre-wrap;
  box-shadow: 0.2rem 0.2rem 0.3rem #dedede;
`;

const DivBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.4rem;
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;

const Title = styled.h1`
  padding: 1rem 1rem 1rem 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 1rem;
  text-align: justify;
  line-height: 1.7rem;
`;

const ConditionBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;

  div {
    //div for permissions limitations conditions
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Condition = styled.h2`
  justify-items: center;
  font-size: 1.1rem;
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
  list-style-type: "ℹ️";
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  height: fit-content;
`;

const LinkText = styled.p`
  height: fit-content;
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
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
  gap: 0.5rem;
`;

const SharedBtn = `
  width: 25%;
  height: fit-content;
  padding: 0.5rem 1rem 0.4rem 1rem;
  font-size: 1.1rem;
  text-transform: none; //Turn off uppercase default settings
  white-space: nowrap;
  box-shadow: 0.2rem 0.2rem 0.3rem #dedede;
`;

const SelectedBtn = styled(Button)`
  ${SharedBtn}
  background-color: green;
  &:visited {
    background-color: green;
  }
  &:link {
    background-color: green;
  }
  &:hover {
    background-color: green;
    box-shadow: 0.2rem 0.2rem 0.3rem #dedede;
  }
  &:active {
    background-color: green;
  }
`;

const SubmitBtn = styled(Button)`
  ${SharedBtn}
  background-color: gray;
  &:visited {
    background-color: gray;
  }
  &:link {
    background-color: gray;
  }
  &:hover {
    background-color: gray;
    box-shadow: 0.2rem 0.2rem 0.3rem #dedede;
  }
  &:active {
    background-color: gray;
  }
`;

export default SlideContent;
