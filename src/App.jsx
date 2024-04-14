import "./App.css";
import MainPanel from "./components/MainPanel";
import NavBar from "./components/NavBar";

function App() {
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
