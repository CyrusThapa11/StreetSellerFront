// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        "box-sizing": "border-box",
      },
    },
  },
};

// 3. extend the theme
const theme = extendTheme(config);

export default theme;
