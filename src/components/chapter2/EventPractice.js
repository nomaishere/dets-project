import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        placeholder="아무거나 입력해 보세요"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <span>메세지 : {message}</span>
    </div>
  );
};

export default EventPractice;
