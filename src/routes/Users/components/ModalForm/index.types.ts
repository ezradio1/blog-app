import type { ModalProps } from "@/components/Modal/index.types";
import type { UserData } from "@/redux/reducers/user/index.types";

export interface ModalFormProps extends ModalProps {
  selectedData: UserData | null;
  getData: () => void;
}

export type FieldType = "name" | "email" | "gender" | "status";
