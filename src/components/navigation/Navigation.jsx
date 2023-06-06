import "./navigation.style.css";
import * as React from "react";
// import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import PinDropIcon from "@mui/icons-material/PinDrop";

const drawerWidth = 240;
const navItems = ["Home", "Why US", "Our Nannies", "Reviews", "Contact", "FAQ"];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //   const showInMapClicked = () => {
  //     window.open(
  //       `https://www.google.com/maps/place/Helen+Lucy+Child+Care+Center/@41.987226,-87.7918279,17z/data=!4m14!1m7!3m6!1s0x880fc95b3afd064f:0xa40bfcc70b23822e!2sHelen+Lucy+Child+Care+Center!8m2!3d41.987222!4d-87.789253!16s%2Fg%2F1v940nmd!3m5!1s0x880fc95b3afd064f:0xa40bfcc70b23822e!8m2!3d41.987222!4d-87.789253!16s%2Fg%2F1v940nmd?authuser=0&entry=ttu`,
  //       `_blank`,
  //       `noopener`
  //     );
  //   };

  const drawer = (
    <Box
      className="drawerBox"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        DAYCARE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className="tlbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <a target="_blank" href="tel:+17737637872">
            <IconButton
              size="large"
              aria-label="call us"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ mr: 1, display: { sm: "none" } }}
            >
              <CallIcon />
            </IconButton>
          </a>
          <a
            target="_blank"
            href="https://goo.gl/maps/sD7PVi7azYFmiKzo9?coh=178573&entry=tt"
          >
            <IconButton
              size="large"
              aria-label="our location"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ mr: 1, display: { sm: "none" } }}
            >
              <PinDropIcon />
            </IconButton>
          </a>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            DAYCARE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
            <a
              target="_blank"
              href="https://goo.gl/maps/sD7PVi7azYFmiKzo9?coh=178573&entry=tt"
            >
              <IconButton
                size="medium"
                aria-label="our location"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ mr: 1, display: { sm: "inline" } }}
              >
                <PinDropIcon />
              </IconButton>
            </a>
            <a target="_blank" href="tel:+17737637872">
              <IconButton
                size="medium"
                aria-label="call us"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ mr: 1, display: { sm: "inline" } }}
              >
                <CallIcon />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navigation;
