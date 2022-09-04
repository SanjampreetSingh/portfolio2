import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/icons-material/Menu";

export default function Header(props) {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* <Menu /> */}
        </IconButton>
        <Typography variant="h6"></Typography>
      </Toolbar>
    </AppBar>
  );
}
