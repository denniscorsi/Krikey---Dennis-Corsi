import AuthorsPanel from "./AuthorsPanel";

const MainPanel = () => {
  return (
    <div className="main-panel">
      <div className="panel-top">
        <h4>----</h4>
        <h4>Top 10 Authors</h4>
        <div></div>
      </div>
      <AuthorsPanel />
    </div>
  );
};

export default MainPanel;
