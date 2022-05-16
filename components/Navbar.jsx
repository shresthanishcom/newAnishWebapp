import React from "react";
import Style from "../styles/Navbar/Navbar.module.scss";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
            } hover:text-yellow-200 hover:animate-bounce `}
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
        <ul
          id="nav-lists"
          className={`${sideMenu ? Style.showMenu : Style.hideMenu} ${
            Style.navLinks
          } nav-lists  grid absolute w-3/4 h-full gap-2 sm:static sm:flex sm:w-4/5 items-center justify-around sm:rounded-full bg-gradient-to-r from-red-400 to-green-300 cursor-pointer z-10`}
        >
          {renderList()}
        </ul>
        <div
          onClick={toggleMenu}
          className="block sm:hidden ml-auto h-16 w-12 text-white active:text-orange-200"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
}
