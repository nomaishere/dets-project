import React from "react";
import PropTypes from "prop-types";

const PropsComponent = ({ name, age, gender, isHuman }) => {
  return (
    <div>
      <h1>제 이름은 {name}입니다</h1>
      <h2>
        나이 : {age} / 성별: {gender}
      </h2>
      <h3>
        {isHuman ? <span>사람이군요!</span> : <span>인간이 덜 되었군요!</span>}
      </h3>
    </div>
  );
};

PropsComponent.defaultProps = {
  name: "기본 이름",
};

PropsComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
  isHuman: PropTypes.bool,
};

export default PropsComponent;
