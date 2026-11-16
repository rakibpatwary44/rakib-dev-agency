"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function ResponsiveNavbar() {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => {
    setShowNav(true);
  };
  const closeNavHandler = () => {
    setShowNav(false);
  };
  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNav closeNav={closeNavHandler} showNav={showNav} />
    </div>
  );
}
