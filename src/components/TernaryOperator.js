import React from "react";

// 화살표 함수
const TernaryOperator = () => {
  const name = "김상민"; // 값을 바꿔 어떤 상황이 일어나는지 알아보세요!
  const age = 18;
  const isLogined = true;
  return (
    <div>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
      {age === 18 ? <h1>고2</h1> : <h2>아님</h2>}
      {isLogined ? (
        <h1>
          {age}살 {name}님 안녕하세요!
        </h1>
      ) : (
        <button>로그인</button>
      )}
    </div>
  );
};

export default TernaryOperator;
