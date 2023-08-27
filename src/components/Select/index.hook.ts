import { ChangeEvent, useRef, useState } from "react";
import { SelectProps } from "./index.types";
import useClickOutside from "@/hooks/useClickOutside";

const useIndex = ({ onChange, name }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useClickOutside(selectRef, () => {
    setIsOpen(false);
  });

  const handleChooseItem = (value: string) => {
    const event = {
      target: {
        value,
        name,
      },
    };
    if (onChange) onChange(event as unknown as ChangeEvent<HTMLInputElement>);
    setIsOpen(false);
  };

  const handleClickCloseIcon = () => {
    const event = {
      target: {
        value: "",
        name,
      },
    };
    if (onChange) onChange(event as unknown as ChangeEvent<HTMLInputElement>);
  };

  return {
    isOpen,
    setIsOpen,
    handleChooseItem,
    selectRef,
    handleClickCloseIcon,
  };
};

export default useIndex;