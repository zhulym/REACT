import React from "react";
import mod from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={mod.nav}>
      <div className={mod.nav_button}>
        <NavLink to="/my_profile" activeClassName={mod.nav_active}>My profile</NavLink>
      </div>
      <div className={mod.nav_button}>
        <NavLink to="/my_dialogs" activeClassName={mod.nav_active}>Messages</NavLink>
      </div>
      <div className={mod.nav_button}>
        <NavLink to="/my_friends" activeClassName={mod.nav_active}>Friends</NavLink>
      </div>
      <div className={mod.nav_button}>
        <NavLink to="/my_music" activeClassName={mod.nav_active}>Music</NavLink>
      </div>
      <div className={mod.nav_button}>
        <NavLink to="/my_settings" activeClassName={mod.nav_active}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
