
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#fff",
          },
          bg:{
            main:"#F6F6F6",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },

          myColor:{
            main:"#F6F9FC",
          }
          
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },

          bg:{
            main:"#1D2021",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },

          myColor:{
            main:"#252b32",
          }

        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};