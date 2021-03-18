import {  makeStyles, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      background: blue[900],
      padding: `${theme.spacing(2)}px ${theme.spacing(8)}px`,
      width: "100vw",
    },
    mainNav: {
      display: "flex",
      justifyContent: "space-between",
    },
    logo: {
      color: "white",
      textDecoration: "none",
    },
    navRight: {},
    navLeft: {
      display: "flex",
      alignItems: "center",
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      marginLeft: theme.spacing(5)
    },
    activeNavLink: {
      color: "yellow"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.mainNav}>
        <div className={classes.navRight}>
          <Typography variant="h4">
            <Link to="/" className={classes.logo}>
              LOGO
            </Link>
          </Typography>
        </div>
        <div className={classes.navLeft}>
          <NavLink
            to="/"
            exact
            className={classes.navLink}
            activeClassName={classes.activeNavLink}
          >
            Home
          </NavLink>
          <NavLink
            to="/add-todo"
            className={classes.navLink}
            activeClassName={classes.activeNavLink}
          >
            Add Todo
          </NavLink>
          <NavLink
            to="/update-todo"
            className={classes.navLink}
            activeClassName={classes.activeNavLink}
          >
            Update Todo
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
