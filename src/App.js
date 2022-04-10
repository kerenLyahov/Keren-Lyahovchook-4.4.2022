import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Favorite from "./Favorite/Favorite";
import Time from "./Time";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Mode/Globalstyle";
import { lightTheme, darkTheme } from "./Mode/Themes";
import { useDarkMode } from "./Mode/useDarkMode";
import Toggle from "./Mode/Toggler";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App container">
        <div className="header">
          <span className="time-component">{Time()}</span>

          <div className="displayStatus">
            <button className="btn btn-primary main-btn submit-btn">
              main
              {/* upon clicking will show the weather component */}
            </button>
            <button className="btn btn-primary fav-btn submit-btn">
              favorite
              {/* upon clicking will show the favorite component */}
            </button>
            <Toggle
              theme={theme}
              toggleTheme={themeToggler}
              className="toggle"
            />
          </div>
        </div>

        <Weather city={"Tel Aviv"} />
        <Favorite />
        <div id="opnSrcLink">
          <a
            href="https://github.com/kerenLyahov/Keren-Lyahovchook-4.4.2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/keren-lyahov/"
            target="_blank"
            rel="noopener noreferrer"
            className="keren"
          >
            Keren Lyahovchook
          </a>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
