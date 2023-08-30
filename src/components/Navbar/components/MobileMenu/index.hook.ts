import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import type { MobileMenuProps } from "./index.types";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

const useIndex = ({ onCloseMenu }: MobileMenuProps) => {
  const [isHover, setIsHover] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useClickOutside(menuRef, () => {
    onCloseMenu();
  });

  const handleClickMenu = (route: string) => {
    router.push(route);
    onCloseMenu();
  };

  const handleClickLogo = () => {
    router.push(ROUTES.DASHBOARD);
  };

  return { menuRef, isHover, setIsHover, handleClickMenu, handleClickLogo };
};

export default useIndex;
