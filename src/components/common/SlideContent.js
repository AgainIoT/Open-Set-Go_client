import styled from "styled-components";
import {PropTypes} from "prop-types";

export const SlideContent = (props) => {
  const pmsList = props.data.conditions.permissions.map((p) => (<ConditionContent key={p}><li>{p}</li></ConditionContent>));
  const limList = props.data.conditions.limitations.map((p) => (<ConditionContent key={p}><li>{p}</li></ConditionContent>));
  const conList = props.data.conditions.conditions.map((p) => (<ConditionContent key={p}><li>{p}</li></ConditionContent>));
  return (
    <StSlideContent>
      <div>
        <TitleBox><h1>{props.data.license}</h1></TitleBox>
        <ContentBox>
          <p>{props.data.description}</p>
        </ContentBox>

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
      </div>
    </StSlideContent>

  );
};

SlideContent.propTypes = {
  data: PropTypes.node.isRequired,
};

const StSlideContent = styled.div`
  border-radius: 0.5rem;
  display: flex;
  width: 25rem;
  height: 30rem;
  padding: 1rem 1rem 1rem 1rem;
  margin: 2rem 1rem 1rem 0rem;
  white-space: pre-wrap;
  box-shadow: 0.2rem 0.2rem 0.3rem gray;
`;

const ContentBox = styled.p`
  padding: 1rem 1.8rem 1rem 1rem;
  font-size: 1.2rem;
  line-height: 1.7rem;
  text-align: justify;
  
`;

const TitleBox = styled.h1`
  padding: 1rem 1rem 1rem 1.8rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ConditionBox = styled.div`
  display: flex;
  1rem 1.8rem 1rem 1rem
`;

const Condition = styled.h2`
  padding: 2rem 1rem 1rem 1.8rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ConditionContent = styled.li`
  list-style: disc;
  margin: 0rem 0rem 0rem 3rem;
  class="flex-item"
`;

export default SlideContent;
