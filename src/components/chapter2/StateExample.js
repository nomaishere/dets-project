import React, { useState } from "react";

const StateExample = ({ onClickTest }) => {
  const [message, setMessage] = useState("기본 상태");

  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={onClickTest}>안녕</button>
      <span>{message}</span>
    </div>
  );
};

export default StateExample;
