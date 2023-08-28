"use client";
import clsx from "clsx";
import { FiX } from "react-icons/fi";
import Button from "../Button";
import { ModalProps } from "./index.types";
import { noop } from "@/helpers/noop";

const Modal = (props: ModalProps) => {
  const {
    isOpen,
    title,
    children,
    onClose,
    onSubmit = noop,
    loading = false,
  } = props;

  return (
    <div
      className={clsx("fixed inset-0 z-50 flex items-center justify-center", {
        "transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none":
          !isOpen,
        "opacity-100": isOpen,
      })}
    >
      <div
        onClick={onClose}
        className={clsx("fixed inset-0 bg-black border border-black", {
          "opacity-0": !isOpen,
          "opacity-50": isOpen,
        })}
      ></div>
      <div
        className={clsx(
          "bg-white max-w-[600px] min-w-[95vw] md:min-w-[450px] p-4 rounded-lg z-10 transform transition-transform duration-300 ease-in-out",
          {
            "translate-y-full": !isOpen,
            "translate-y-0": isOpen,
          }
        )}
      >
        {title && (
          <div className="flex justify-between items-center mb-4">
            <p className="uppercase font-semibold">{title}</p>
            <div className="py-2 pl-2 cursor-pointer" onClick={onClose}>
              <FiX />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="py-3">{children}</div>
          {onSubmit !== noop ? (
            <>
              <hr className="my-2" />
              <Button loading={loading} onClick={onSubmit}>
                Submit
              </Button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
