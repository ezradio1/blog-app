import Modal from "@/components/Modal";
;
import type { ModalDeleteProps } from "./index.types";
import useIndex from "./index.hook";

const ModalDelete = (props: ModalDeleteProps) => {
  const { handleConfirmDeleteUser, loading } = useIndex(props);

  return (
    <Modal
      {...props}
      title="Delete User"
      onSubmit={handleConfirmDeleteUser}
      loading={loading}
    >
      <p>
        Are you sure you want to delete{" "}
        <span className="font-semibold italic mr-1">
          `{props.selectedData?.name}`{" "}
        </span>
        ?
      </p>
    </Modal>
  );
};

export default ModalDelete;
