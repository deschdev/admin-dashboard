import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// tailwind shade colors
export const colors = (mode) => ({
 ...colors(mode === "dark"
 ? {
  grey: {
    100: "#e5e2e2",
    200: "#cbc5c5",
    300: "#b2a8a8",
    400: "#988b8b",
    500: "#7e6e6e",
    600: "#655858",
    700: "#4c4242",
    800: "#322c2c",
    900: "#191616"
  },
  primary: {
    100: "#d4d6de",
    200: "#a9aebd",
    300: "#7f859c",
    400: "#545d7b",
    500: "#29345a",
    600: "#212a48",
    700: "#191f36",
    800: "#101524",
    900: "#080a12"
  },
  greenAccent: {
    100: "#ddf6f1",
    200: "#bbede3",
    300: "#99e5d5",
    400: "#77dcc7",
    500: "#55d3b9",
    600: "#44a994",
    700: "#337f6f",
    800: "#22544a",
    900: "#112a25"
  },
  redAccent: {
    100: "#fadbdb",
    200: "#f4b8b6",
    300: "#ef9492",
    400: "#e9716d",
    500: "#e44d49",
    600: "#b63e3a",
    700: "#892e2c",
    800: "#5b1f1d",
    900: "#2e0f0f"
  },
  blueAccent: {
    100: "#e5e6fe",
    200: "#cbcefd",
    300: "#b1b5fd",
    400: "#979dfc",
    500: "#7d84fb",
    600: "#646ac9",
    700: "#4b4f97",
    800: "#323564",
    900: "#191a32"
  },
 } : {
  grey: {
    100: "#191616",
    200: "#322c2c",
    300: "#4c4242",
    400: "#655858",
    500: "#7e6e6e",
    600: "#988b8b",
    700: "#b2a8a8",
    800: "#cbc5c5",
    900: "#e5e2e2",
  },
  primary: {
    100: "#080a12",
    200: "#101524",
    300: "#191f36",
    400: "#212a48",
    500: "#29345a",
    600: "#545d7b",
    700: "#7f859c",
    800: "#a9aebd",
    900: "#d4d6de",
  },
  greenAccent: {
    100: "#112a25",
    200: "#22544a",
    300: "#337f6f",
    400: "#44a994",
    500: "#55d3b9",
    600: "#77dcc7",
    700: "#99e5d5",
    800: "#bbede3",
    900: "#ddf6f1",
  },
  redAccent: {
    100: "#2e0f0f",
    200: "#5b1f1d",
    300: "#892e2c",
    400: "#b63e3a",
    500: "#e44d49",
    600: "#e9716d",
    700: "#ef9492",
    800: "#f4b8b6",
    900: "#fadbdb",
  },
  blueAccent: {
    100: "#191a32",
    200: "#323564",
    300: "#4b4f97",
    400: "#646ac9",
    500: "#7d84fb",
    600: "#979dfc",
    700: "#b1b5fd",
    800: "#cbcefd",
    900: "#e5e6fe",
  },
 }),
});

// material ui theme settings
export const themeSettings = (mode) => {
  const uiColors = colors(mode);

  return {
    palette: {
      mode: mode,
      ...colors(mode === "dark"
      ? {
          primary: {
            main: uiColors.primary[500],
          },
          secondary: {
            main: uiColors.greenAccent[500],
          },
          neutral: {
            dark: uiColors.grey[700],
            main: uiColors.grey[500],
            light: uiColors.grey[100]
          },
          background: {
            default: uiColors.primary[500],
          }
        } : {
          primary: {
            main: uiColors.primary[100],
          },
          secondary: {
            main: uiColors.greenAccent[500],
          },
          neutral: {
            dark: uiColors.grey[700],
            main: uiColors.grey[500],
            light: uiColors.grey[100]
          },
          background: {
            default: "FCFCFC",
          }
        }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", sans-serif].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", sans-serif].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", sans-serif].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", sans-serif].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", sans-serif].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", sans-serif].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", sans-serif].join(","),
        fontSize: 14,
      }
    }
  }
}
