import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="loginArea">
      <h1 id="logo">(대충 네이버 로고)</h1>
      <div className="inputBox">
        <input className="inputform" type="text" placeholder="아이디" />
        <input className="inputform" type="password" placeholder="비밀번호" />
      </div>
      <button className="loginbutton">로그인</button>
    </div>
  );
};

export default LoginForm;
