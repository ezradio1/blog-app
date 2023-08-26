import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { MobileMenuProps } from "./index.types";
import { useRouter } from "next/navigation";

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

  return { menuRef, isHover, setIsHover, handleClickMenu };
};

export default useIndex;
