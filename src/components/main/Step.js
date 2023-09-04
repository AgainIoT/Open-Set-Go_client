import React from "react";
import propTypes from "prop-types";

const Step = (props) => {
  return (
    <div className="step">
      <h1 className="subtitle">{props.step}</h1>
      <h1 className="article">{props.desc}</h1>
    </div>
  );
};

Step.propTypes = {
  step: propTypes.string,
  desc: propTypes.string,
};

export default Step;
