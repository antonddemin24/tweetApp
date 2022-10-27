import { Theme, merge } from "theme-ui"
import base from "./base"

const darkModern: Theme = merge(base, {
  fonts: {
    body: '"Roboto"',
    heading: "Roboto",
  },
  colors: {
    text: "white",
    background: "#161616",
    secondary: "#383838"
  },
  buttons: {
    primary: {
      fontFamily: "inherit",
      color: "white",
      borderRadius: "20",
      bg: "#8D91C7",
      fontSize: "16px",
      fontWeight: "bold",
      transition: "background 100ms ease-in-out",
      "&:hover": {
        bg: "#6E75A8",
        color: "white"
      }
    },
    secondary: {
    }
  },
  cards: {
    primary: {
      background: "#262626",
    }
  },
  forms: {
    input: {
      fontFamily: "body",
      borderRadius: 5,
      backgroundColor: "secondary",
      border: "transparent",
      color: "white",
      outlineColor: "secondary"
    }
  },
  text: {
    heading: {
      letterSpacing: "1px"
    }
  }
})

export default darkModern