import "./navigation.style.css";
import * as React from "react";
// import PropTypes from "prop-types";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../../theme";
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
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const drawerWidth = 240;
const navItems = ["Home", "Why US", "Our Nannies", "Reviews", "Contact", "FAQ"];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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
    <ThemeProvider theme={theme}>
      <Box
        className="drawerBox"
        onClick={handleDrawerToggle}
        sx={{ textAlign: "center" }}
        style={{ background: theme.palette.primary.main, color: "white" }}
      >
        <Typography variant="h5" sx={{ my: 2 }}>
          DAYCARE
        </Typography>
        <Divider />
        <List className="nav-list">
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HideOnScroll {...props}>
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
              <a target="_blank" href="tel:+17737637872" rel="noreferrer">
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
                rel="noreferrer"
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
                  rel="noreferrer"
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
                <a target="_blank" href="tel:+17737637872" rel="noreferrer">
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
        </HideOnScroll>
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
        <Box sx={{ p: 0 }}>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Navigation;
