import AppLogo from "@/assets/img/app-logo.png";
import clsx from "clsx";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { MENUS } from "../../index.constants";
import useIndex from "./index.hook";
import type { MobileMenuProps } from "./index.types";
import { ROUTES } from "@/constants/routes";

const MobileMenu = (props: MobileMenuProps) => {
  const { visible, onCloseMenu } = props;
  const { menuRef, isHover, setIsHover, handleClickMenu, handleClickLogo } =
    useIndex(props);

  return (
    <div
      className={clsx(
        "z-50 absolute transition-all duration-500 h-screen top-0 overflow-hidden w-screen bg-black bg-opacity-60 right-0 left-0",
        {
          "opacity-100": visible,
          "opacity-0 pointer-events-none": !visible,
        }
      )}
    >
      <div
        ref={menuRef}
        className={clsx(
          "bg-white p-2 pl-0 h-full duration-500 transition-all",
          {
            "w-3/4": visible,
            "w-0": !visible,
          }
        )}
      >
        <div className="flex px-4 py-2 justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleClickLogo}>
            <Image src={AppLogo} alt="app-logo.png" width={30} height={30} />
            <h2 className="font-bold text-xs md:text-lg text-primary">
              LuminaLife Blog
            </h2>
          </div>

          <div className="cursor-pointer p-2" onClick={onCloseMenu}>
            <FiX />
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex gap-2 flex-col mt-4 z-50">
          {MENUS.map((menu, key) => (
            <div
              key={key}
              className="border-b py-2 hover:bg-gray-50 cursor-pointer px-4 transition-all"
              onMouseEnter={() => setIsHover(key)}
              onMouseLeave={() => setIsHover(-1)}
              onClick={() => handleClickMenu(menu.route)}
            >
              <p
                className={clsx("cursor-pointer text-base text-primary", {
                  "font-medium": isHover === key,
                })}
              >
                {menu.label}
              </p>
              <p className="text-[10px] text-gray-400">{menu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
