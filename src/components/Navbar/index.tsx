"use client";

import Image from "next/image";
import React from "react";
import AppLogo from "@/assets/img/app-logo.png";
import { MENUS } from "./index.constants";
import { RxHamburgerMenu } from "react-icons/rx";
import useIndex from "./index.hook";
import MobileMenu from "./components/MobileMenu";
import Tooltip from "../Tooltip";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useIndex();

  return (
    <div className="py-3 md:py-6 flex justify-between items-center">
      <div className="block md:hidden">
        <div
          className="cursor-pointer "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <RxHamburgerMenu />
        </div>

        <MobileMenu
          visible={isMenuOpen}
          onCloseMenu={() => setIsMenuOpen(false)}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center md:gap-2">
        <Image src={AppLogo} alt="app-logo.png" width={30} height={30} />
        <h2 className="md:font-bold text-xs md:text-lg">LuminaLife Blog</h2>
      </div>

      <div>
        <div className="hidden gap-6 md:flex">
          {MENUS.map((menu, key) => (
            <div key={key}>
              <Tooltip content={menu.description}>
                <p className="cursor-pointer hover:font-medium">{menu.label}</p>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
