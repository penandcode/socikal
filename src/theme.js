import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#181818",
      paper: "#212121",
    },
    text: {
      primary: "#fff",
      secondary: "grey",
    },
  },
});

export default theme;
