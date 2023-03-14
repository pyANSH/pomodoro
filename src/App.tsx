import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Card from "./components/Cards/Card";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Header />
      <div className="w-full flex justify-start my-8">
        <Card />
      </div>
    </div>
  );
}

export default App;
