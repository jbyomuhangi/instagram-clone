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
    primaryGradient: { from: string; to: string };
  }
  interface PaletteOptions {
    border: PaletteColorOptions;
    link: PaletteColorOptions;
    like: PaletteColorOptions;
    primaryGradient: { from: string; to: string };
  }
}

const theme = createTheme({
  palette: {
    border: { main: "#E0E0E0" },
    link: { main: "#0969DA" },
    like: { main: "#FF0000" },
    primaryGradient: { from: "#FF00F5", to: "#F9E60E" },
  },
});

export default theme;
