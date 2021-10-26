import { createTheme } from "@mui/material/styles";
import CalibreMedium from "../../assets/fonts/Calibre-Medium.woff2";
import CalibreRegular from "../../assets/fonts/Calibre-Regular.woff2";
import CalibreSemibold from "../../assets/fonts/Calibre-Semibold.woff2";
import SFMonoRegular from "../../assets/fonts/SFMonoRegular.woff2";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    custom?: {
      typography?: {
        sans?: string;
        mono?: string;
      };
      color?: {
        navy?: string;
        green?: string;
        lightestSlate?: string;
        greenTint?: string;
        lightNavy?: string;
      };
      common?: {
        transition?: string;
        borderRadius?: string;
      };
    };
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tablet: true; // adds the `tablet` breakpoint
    desktop: true;
  }
}

const customTheme = createTheme({
  custom: {
    typography: {
      sans: "'Calibre','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif",
      mono: "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace",
    },
    color: {
      navy: "#0a192f",
      green: "#64ffda",
      lightestSlate: "#ccd6f6",
      greenTint: "rgba(100,255,218,0.1)",
      lightNavy: "#112240",
    },
    common: {
      transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
      borderRadius: "4px",
    },
  },
  breakpoints: {
    values: {
      tablet: 0,
      desktop: 770,
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

        ::-webkit-scrollbar {
          width: 9px;
          background-color: #0A192F;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #495670; 
          border-right: 3px solid #0A192F;
          border-radius: 1000px;
        }
      `,
    },
  },
});

export default customTheme;
