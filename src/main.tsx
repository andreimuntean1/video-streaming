import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ColorContext from "./contexts";

type Theme = "light" | "dark";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<Theme>(prefersDarkMode ? "dark" : "light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: deepOrange,
          secondary: {
            main: deepOrange[500],
          },
        },
        typography: {
          h4: {
            "@media (max-width: 1100px)": {
              fontSize: "1.75rem",
            },
            "@media (max-width: 600px)": {
              fontSize: "1.5rem",
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Video />} />
          </Routes>
        </BrowserRouter>
        <CssBaseline />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
