import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Time from "./Time";

function App() {
  return (
    <div className="App container">
      <div className="time"> {Time()}</div>
      <Weather city={"Tel Aviv"} />
      <div id="opnSrcLink">
        <a
          href="https://github.com/kerenLyahov/Keren-Lyahovchook-4.4.2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Keren Lyahovchook
      </div>
    </div>
  );
}

export default App;
