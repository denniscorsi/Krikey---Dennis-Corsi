import AuthorsPanel from "./AuthorsPanel";

const MainPanel = () => {
  return (
    <div className="main-panel">
      <div className="panel-top">
        <img src="src/assets/arrow.png" />
        <h4>Top 10 Authors</h4>
        <div></div>
      </div>
      <AuthorsPanel />
    </div>
  );
};

export default MainPanel;
