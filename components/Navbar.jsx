import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Style from "../styles/Navbar/Navbar.module.scss";

export default function Navbar() {
  const router = useRouter();
  const path = router.asPath.slice(1);

  const activeTextColor = "text-yellow-200 animate-bounce";
  const NavItemLists = ["Home", "Projects", "Photos", "Resume", "AboutMe"];

  const [sideMenu, setSideMenu] = useState(false);

  function toggleMenu() {
    const navList = document.getElementById("nav-lists");
    // sideMenu ? setSideMenu(false) : setSideMenu(true);
    if (sideMenu) {
      setSideMenu(false);
    } else {
      setSideMenu(true);
    }
  }
  const renderList = () => {
    return NavItemLists.map((NavItem, index) => {
      return (
        <Link
          passHref
          key={index}
          href={`/${NavItem === "Home" ? "" : NavItem.toLowerCase()}`}
        >
          <li
            className={`${
              path === NavItem.toLowerCase()
                ? activeTextColor
                : "" || (path === "" && NavItem === "Home")
                ? activeTextColor
                : ""
            } m-0 p-0 hover:text-yellow-200 hover:animate-bounce `}
          >
            {NavItem}
          </li>
        </Link>
      );
    });
  };
  return (
    <nav className="bg-black">
      <div className="container m-auto flex items-center justify-between ">
        <Link passHref href="/">
          <div className="font-mono text-xl m-4 p-3 nav-logo  whitespace-nowrap w-min bg-gradient-to-r from-red-100 to-red-300 rounded-full animate-pulse cursor-pointer">
            Anish Shrestha
          </div>
        </Link>
        <div
          id="nav-lists"
          onClick={toggleMenu}
          className={`${sideMenu ? Style.showMenu : Style.hideMenu} ${
            Style.navLinks
          } nav-lists absolute sm:static h-full w-full  z-50`}
        >
          <ul className=" absolute top-0 right-0 w-3/4 h-screen sm:h-auto sm:w-full grid sm:rounded-full  sm:relative sm:flex items-start sm:items-center gap-0 content-around text-center sm:justify-around cursor-pointer  bg-gradient-to-r from-red-400 to-green-300 ">
            {renderList()}
          </ul>
        </div>

        <div
          onClick={toggleMenu}
          className=" sm:hidden flex items-center ml-auto h-16 w-8 text-white active:text-orange-200"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
}
