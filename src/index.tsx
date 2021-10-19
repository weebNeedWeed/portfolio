import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "components/App/App.index";
import customTheme from "commons/theme";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
