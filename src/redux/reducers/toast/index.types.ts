export interface ToastProps {
  message: string;
  type?: "success" | "error";
  show: boolean;
  align?: "left" | "center" | "right";
}
