import { extendTheme } from "@chakra-ui/react";

const themePallete = {
  colors: {
    primary: {
      900: "#00B172"
    },
    secondary: {
      900: "#009AF1"
    },
    tertiary: {
      900: "#EDEDED"
    },
    formTitle: {
      900: "#626262"
    },
    inputBackground: {
      900: "#E2E2E2"
    },
    light: {
      900: "#FFFFFF"
    },
    inputLabel: {
      900: "#7A7A7A"
    },
    externalInputLabel: {
      900: "6F6F6F"
    },
    iputIcon: {
      900: "#808080"
    },
    primaryLight: {
      900: "#00B171"
    },
    accent: {
      900: "#F0F0F0"
    },
    alert: {
      900: "#D70000"
    },
    accentText: {
      900: "#5F5F5F"
    },
    inactive: {
      900: "#656262"
    },
    pending: {
      900: "#FF6B00",
      700: "#ff6b00b3"
    },
    strongText: {
      900: "#525252",
      500: "#7E7E7E"
    },
    weekText: {
      900: "#A6A3A3"
    }
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`
  }
};

const theme = extendTheme(themePallete);
export { theme, themePallete };
