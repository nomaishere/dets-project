import React from "react";
import "./App.css";

import LoginForm from "./components/chapter2/ClassComponent";
import PropsComponent from "./components/chapter2/PropsComponent";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <PropsComponent name="김상민" age={18} gender="남" isHuman={false} />
    </div>
  );
}

export default App;
