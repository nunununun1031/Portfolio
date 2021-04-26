import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./router/Router";

const App: React.VFC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
