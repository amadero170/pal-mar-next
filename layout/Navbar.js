import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { NavLinks } from "./NavLinks";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__menu-list">
          {NavLinks.map((menu, idx) => (
            <div key={idx} className="nav__link">
              <Link href={menu.path}>
                <a>{menu.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
