import { RefObject } from "react";

export interface useClickOutside {
  ref: RefObject<HTMLElement>;
  callback: () => void;
}
