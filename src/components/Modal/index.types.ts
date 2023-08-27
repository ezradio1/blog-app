import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  onSubmit?: () => void;
  children?: ReactNode;
  loading?: boolean;
}
