import {
  PaletteColor,
  PaletteColorOptions,
  createTheme,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    border: PaletteColor;
    link: PaletteColor;
    like: PaletteColor;
  }
  interface PaletteOptions {
    border: PaletteColorOptions;
    link: PaletteColorOptions;
    like: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    border: { main: "#E0E0E0" },
    link: { main: "#0969DA" },
    like: { main: "#FF0000" },
  },
});

export default theme;
