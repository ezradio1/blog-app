import Modal from "@/components/Modal";
import useIndex from "./index.hook";
import type { ModalSuccessProps } from "./index.types";
import Button from "@/components/Button";

const ModalSuccess = (props: ModalSuccessProps) => {
  const { isOpen, onClose } = props;
  const { countDown } = useIndex(props);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center flex-col">
        <p className="font-medium text-xl text-center">
          Thank you for subscribing to{" "}
          <span className="font-bold">LuminaLife Blog</span>
        </p>
        <p className="text-xs text-gray-400 text-center mt-4">
          Stay tuned for new, interesting and accurate news from us. You can
          also get promo information on merchants who work with us|
        </p>
        <p className="mt-4 text-xs text-center text-gray-400">
          This pop up will be closed in {countDown} seconds or click the button
          bellow to close it
        </p>

        <Button onClick={onClose} className="mt-8 w-[90%]">
          Ok
        </Button>
      </div>
    </Modal>
  );
};

export default ModalSuccess;
