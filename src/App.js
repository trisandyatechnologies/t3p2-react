import { ThemeProvider } from "@emotion/react";
import Counter from "./Counter";
import Enrollment from "./Enrollment";
import Instagram from "./Instagram";
import Tabs from "./Tabs";
import Tambola from "./Tambola";

import { createTheme } from "@mui/material";
import Theming from "./Theming";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme();
const darkTheme = createTheme({});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <Counter /> */}
          {/* <Enrollment /> */}
          {/* <Tabs /> */}
          {/* <Tambola /> */}
          <Instagram />
          {/* <Theming /> */}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
