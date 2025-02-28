import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import "./index.css";
import "./core/i18n";
import RoutesHandler from "./routes/routes";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';


const theme = createTheme({
  direction: "rtl",
});

const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={rtlCache}>
      <HashRouter>{RoutesHandler()}</HashRouter>
      </CacheProvider>
    </ThemeProvider>
  </StrictMode>
);
