import "./App.css";
import ControlHub from "./Components/ControlHub";
import ErrorText from "./Components/ErrorText";
import ApiDataRender from "./Components/ApiDataRender";

function App() {
  return (
    <div className="App">
      <div>
        <ControlHub />
        <ErrorText />
        <ApiDataRender />
      </div>
    </div>
  );
}

export default App;
