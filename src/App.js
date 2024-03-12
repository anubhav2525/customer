import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app bg-gray-200 dark:bg-slate-800">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="page-area"></div>
    </div>
  );
}

export default App;
