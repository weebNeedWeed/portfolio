import { createTheme } from "@mui/material/styles";
import CalibreMedium from "../../assets/fonts/Calibre-Medium.woff2";
import CalibreRegular from "../../assets/fonts/Calibre-Regular.woff2";
import CalibreSemibold from "../../assets/fonts/Calibre-Semibold.woff2";
import SFMonoRegular from "../../assets/fonts/SFMonoRegular.woff2";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    custom?: {
      typography?: {
        sans: string;
        mono: string;
      };
      color?: string;
    };
  }
}

const customTheme = createTheme({
  custom: {
    color: "blue",
    typography: {
      sans: "'Calibre','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif",
      mono: "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SF Mono';
          font-style: normal;
          font-weight: 400;
          src: url(${SFMonoRegular}) format('woff2');
        }

        @font-face {
          font-family: 'Calibre';
          font-style: normal;
          font-weight: 400;
          src: url(${CalibreRegular}) format('woff2');
        }

        @font-face {
          font-family: 'Calibre';
          font-style: normal;
          font-weight: 500;
          src: url(${CalibreMedium}) format('woff2');
        }

        @font-face {
          font-family: 'Calibre';
          font-style: normal;
          font-weight: 600;
          src: url(${CalibreSemibold}) format('woff2');
        }
      `,
    },
  },
});

export default customTheme;
