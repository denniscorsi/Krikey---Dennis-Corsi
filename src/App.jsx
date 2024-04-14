import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import MainPanel from "./components/MainPanel";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="container">
        <MainPanel />
      </div>
    </>
  );
}

export default App;
