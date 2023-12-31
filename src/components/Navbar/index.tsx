"use client";

import AppLogo from "@/assets/img/app-logo.png";
import { ROUTES } from "@/constants/routes";
import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import Tooltip from "../Tooltip";
import MobileMenu from "./components/MobileMenu";
import { MENUS } from "./index.constants";
import useIndex from "./index.hook";
import Container from "../Container";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen, scrollPosition } = useIndex();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "w-full fixed z-30 bg-white transition-all duration-500",
        {
          "shadow-md": scrollPosition >= 10,
        }
      )}
    >
      <Container>
        <div className="flex py-3 md:py-6 justify-between items-center">
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

          <div
            className="flex flex-col md:flex-row items-center md:gap-2 cursor-pointer"
            onClick={() => router.push(ROUTES.DASHBOARD)}
          >
            <Image src={AppLogo} alt="app-logo.png" width={30} height={30} />
            <h2 className="md:font-bold text-xs md:text-lg">LuminaLife Blog</h2>
          </div>

          <div>
            <div className="hidden gap-6 md:flex">
              {MENUS.map((menu, key) => (
                <div key={key}>
                  <Tooltip content={menu.description}>
                    <div className="flex items-center flex-col">
                      <p
                        className={clsx(
                          "cursor-pointer hover:font-semibold w-20 text-center"
                        )}
                        onClick={() => router.push(menu.route)}
                      >
                        {menu.label}
                      </p>
                      <div
                        className={clsx("w-1/3 h-[2px] transition-all mt-1", {
                          "bg-primary translate-x-0": pathname === menu.route,
                        })}
                      ></div>
                    </div>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
