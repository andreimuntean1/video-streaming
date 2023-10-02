import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ColorContext from "../contexts";
import Brightness7 from "@mui/icons-material/Brightness7";
import Brightness4 from "@mui/icons-material/Brightness4";

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);

  return (
    <AppBar position="static">
      <Toolbar variant="regular" sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" component="div">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Video Streaming
          </Link>
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
