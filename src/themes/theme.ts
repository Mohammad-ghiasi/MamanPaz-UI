// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    customRed: {
      400: "#d66b69",
      500: "#EF5350", // define the shade you want
    },
  },
});

export default theme;
