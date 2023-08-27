import { ModalProps } from "@/components/Modal/index.types";
import { UserData } from "@/redux/reducers/user/index.types";

export interface ModalDeleteProps extends ModalProps {
  selectedData: UserData | null;
  getData: () => void;
}
