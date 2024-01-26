import { ThemeProvider } from "@emotion/react";
import Counter from "./Counter";
import Enrollment from "./Enrollment";
import Instagram from "./Instagram";
import Tabs from "./Tabs";
import Tambola from "./Tambola";

import { createTheme } from "@mui/material";
import Theming from "./Theming";

const theme = createTheme();
const darkTheme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Counter /> */}
        {/* <Enrollment /> */}
        {/* <Tabs /> */}
        {/* <Tambola /> */}
        {/* <Instagram /> */}
        {<Theming />}
      </div>
    </ThemeProvider>
  );
}

export default App;
