import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      {/* <div className="sideBar"> */}
          <Sidebar/>
          <MainArea/>

      {/* </div>
      <div className="mainArea">
      </div> */}
    </div>
  );
}

export default App;
