import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    },
    MuiInputLabel: {
      root: {
        "&$focused": {
          color: "#B0B0B0"
        }
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF", light: "#E9EEF9", contrastText: "#FFFFFF" },
    secondary: { main: "#B0B0B0", light: "#D5DFEE" }
  }
});
