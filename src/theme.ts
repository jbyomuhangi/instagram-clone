import {
  PaletteColor,
  PaletteColorOptions,
  createTheme,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    link: PaletteColor;
    border: PaletteColor;
  }
  interface PaletteOptions {
    link: PaletteColorOptions;
    border: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    link: { main: "#0969DA" },
    border: { main: "#E0E0E0" },
  },
});

export default theme;
