import styled from "styled-components";
import {PropTypes} from "prop-types";

export const SlideContent = (props) => {
  const pmsList = props.data.conditions.permissions.map((p) => (<ConditionContent key={p}><li>{p}</li></ConditionContent>));
  const limList = props.data.conditions.limitations.map((p) => (<ConditionContent key={p}><li>{p}</li></ConditionContent>));
  const conList = props.data.conditions.conditions.map((p) => (<ConditionContent key={p}><li>{p}</li></ConditionContent>));
  return (
    <StSlideContent>
      <InformationBox>
        <Title><h1>{props.data.license}</h1></Title>
        <Content>
          <p>{props.data.description}</p>
        </Content>
      </InformationBox>
      <ConditionBox>
        <div>
          <Condition><h2>Permission</h2></Condition>
          <ul>
            {pmsList}
          </ul>
        </div>
        <div>
          <Condition><h2>Limitations</h2></Condition>
          <ul>
            {limList}
          </ul>
        </div>
        <div>
          <Condition><h2>Conditions</h2></Condition>
          <ul>
            {conList}
          </ul>
        </div>
      </ConditionBox>
      <SubmitBtn>Review and Submit</SubmitBtn>
    </StSlideContent>

  );
};

SlideContent.propTypes = {
  data: PropTypes.node.isRequired,
};

const StSlideContent = styled.div`
  border-radius: 0.5rem;
  border: 0.01rem outset #d1d1d1;
  padding: 1rem 1rem 1rem 1rem;
  margin: 2rem 1rem 1rem 0rem;
  white-space: pre-wrap;
  weight: 100%;
  /* background-color: green; */
  height: 100%;
  justify-content: center;
  box-shadow: 0.2rem 0.2rem 0.3rem gray;
`;

const InformationBox = styled.div`
  margin: auto;
  width: 90%;
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
  margin: 1rem 1.8rem 1rem 1rem;
`;

const Condition = styled.h2`
  padding: 2rem 1rem 1rem 1.8rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ConditionContent = styled.li`
  list-style: disc;
  margin: 0rem 0rem 0rem 3rem;
`;

const SubmitBtn = styled.button`
  background-color: green;
  border-radius: 0.5rem;
  border: none;
  color: white;
  font-size: 0.1rem;
  display:inline-block;
  white-space : nowrap;
  padding: 0.5rem 1rem 0.4rem 1rem;
  margin: 2rem 0rem 1rem 65%;
`;

export default SlideContent;
