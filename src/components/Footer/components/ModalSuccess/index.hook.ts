import { useEffect, useState } from "react";
import type { ModalSuccessProps } from "./index.types";

const useIndex = ({ isOpen, onClose }: ModalSuccessProps) => {
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isOpen) {
      timer = setInterval(() => {
        setCountDown((prevState) => prevState - 1);
      }, 1000);

      if (countDown === 0) {
        clearInterval(timer);
        onClose();
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [countDown, isOpen, onClose]);

  return {
    countDown,
  };
};

export default useIndex;
