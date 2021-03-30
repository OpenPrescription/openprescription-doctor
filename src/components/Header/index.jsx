import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Trans, useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/Auth";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../assets/logo_prescription-03.png";
import { DonationDisclamer } from "../DonationDisclamer";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase",
  },
  menuItemBlock: {
    display: "block",
    width: "100%",
  },
}));

export default () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout } = useAuth();

  const handleSelectLanguage = (event, lang) => {
    if (!lang) return setAnchorEl(event.currentTarget);
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <nav style={{ display: "flex", alignItems: "center" }}>
            <Link component={RouterLink} to="/">
              <img src={logo} style={{ width: 200 }} alt="Open prescrition" />
            </Link>
            <Link
              component={RouterLink}
              to="/supporters"
              color="inherit"
              variant="body1"
              style={{ marginLeft: 30 }}
            >
              <Trans i18nKey="ourSupporters">Nossos apoiadores</Trans>
            </Link>
          </nav>

          <div>
            <Button
              color="inherit"
              aria-controls="language-menu"
              aria-haspopup="true"
              onClick={handleSelectLanguage}
            >
              {language}
              <KeyboardArrowDownIcon />
            </Button>
            <Button
              color="inherit"
              aria-controls="language-menu"
              aria-haspopup="true"
              onClick={handleLogout}
            >
              <ExitToAppIcon />
            </Button>
          </div>
        </Toolbar>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          keepMounted
        >
          <MenuItem
            className={classes.menuItemBlock}
            onClick={(e) => handleSelectLanguage(e, "en")}
          >
            English
          </MenuItem>
          <MenuItem
            className={classes.menuItemBlock}
            onClick={(e) => handleSelectLanguage(e, "pt")}
          >
            Português
          </MenuItem>
        </Menu>
      </AppBar>
      <DonationDisclamer />
    </header>
  );
};
