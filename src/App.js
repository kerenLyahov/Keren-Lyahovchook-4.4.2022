import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
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
        <div className="time"> {Time()}</div>
        <Toggle theme={theme} toggleTheme={themeToggler} />
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
    </ThemeProvider>
  );
}

export default App;
