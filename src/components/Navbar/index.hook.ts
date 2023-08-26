import { useState } from "react";

const useIndex = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return { isMenuOpen, setIsMenuOpen };
};
export default useIndex;
