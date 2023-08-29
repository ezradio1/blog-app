import { RootState } from "@/redux/store";
import clsx from "clsx";
import { useSelector } from "react-redux";
import useIndex from "./index.hook";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const Toast = () => {
  const { message, type, show, align } = useSelector(
    (state: RootState) => state.toast
  );
  useIndex();

  const GET_ICON = {
    success: <AiFillCheckCircle color="green" />,
    error: <AiFillCloseCircle color="red" />,
  };

  return (
    <div
      className={clsx(
        "fixed top-0 z-[99] mx-auto flex justify-center",
        {
          "left-1/2 right-0": align === "right",
          "left-0 right-1/2": align === "left",
          "left-0 right-0": align === "center",
          "-translate-y-20": !show,
        }
      )}
    >
      <div
        style={{
          boxShadow:
            "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
        }}
        className={clsx(
          "flex gap-2 items-center bg-white rounded-md py-3 px-4 font-futura-book transition-all duration-500",
          {
            "translate-y-2": show,
            "-translate-y-20": !show,
          }
        )}
      >
        {GET_ICON[type || "success"]}
        <p className="text-[12px] font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
