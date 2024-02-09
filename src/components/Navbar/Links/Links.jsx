"use client";
import { useState, useEffect } from "react";
import styles from ".././navbar.module.css";
import NavLink from "./navLinks/NavLink";

const Links = () => {
  const [menuShow, setMenuShow] = useState(false);
  const links = [
    {
      title: "Hompage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    // {
    //   title: "Login",
    //   path: "/login",
    // },
    // {
    //   title: "Register",
    //   path: "/register",
    // },
    // {
    //   title: "forgot",
    //   path: "/forgot-password",
    // },
    // {
    //   title: "Admin",
    //   path: "/admin",
    // },
  ];

  const session = false;
  const isAdmin = false;
  const [open, setOpen] = useState(false);
  const menu = () => {
    setOpen(!open);
    setMenuShow(!menuShow);
  };
  return (
    <>
      {links.map((link, index) => {
        return <NavLink item={link} key={index} />;
      })}

      {isAdmin && <NavLink item={{ title: "admin", path: "/admin" }}></NavLink>}
      {session && <NavLink item={{ title: "Login", path: "/login" }}></NavLink>}

      <button className={styles.btn} onClick={menu}>
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => {
            <NavLink item={link}></NavLink>;
          })}
        </div>
      )}
    </>
  );
};
export default Links;
