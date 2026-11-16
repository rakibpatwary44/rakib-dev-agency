"use client";
import Link from "next/link";
import NavLink from "../../../constant/constant";
import Logo from "../../Helper/Logo";
import ThemeToggler from "./../../Helper/ThemeToggler";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
type props = {
  openNav: () => void;
};
export default function Nav({ openNav }: props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);

    return () => window.addEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${navBg ? "dark:bg-gray-900 bg-blue-950 shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[95%] xl:w-[80%] mx-auto">
        <Logo />
        {/* NavLink */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLink.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className="text-white hover:text-yellow-200 font-semibold transition-all duration-200"
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-full cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-300 hover:ring-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center text-sm">
              Create Account
            </span>
          </a>
        </div>
        <ThemeToggler />
        {/* burger menu */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
        />
      </div>
    </div>
  );
}
