import React from "react";
import { Link } from "react-router-dom";
import classes from "../style.module.css";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <h1>github</h1>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
