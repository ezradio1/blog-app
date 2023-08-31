;
import type { SelectProps } from "./index.types";
import clsx from "clsx";
import { FiChevronDown } from "react-icons/fi";
import useIndex from "./index.hook";
import { AiFillCloseCircle } from "react-icons/ai";

const Select = (props: SelectProps) => {
  const {
    children = null,
    label,
    name,
    options,
    value,
    additionalValueText = "",
    clearIcon = false,
    withError = true,
    errorMsg = "",
    className = "",
  } = props;
  const {
    isOpen,
    setIsOpen,
    handleChooseItem,
    selectRef,
    handleClickCloseIcon,
  } = useIndex(props);

  return (
    <div className={clsx("flex flex-col", className)}>
      {label ? (
        <label className="text-xs mb-1" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <div ref={selectRef} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <div className="relative">
          <input
            {...props}
            value={
              options.filter((el) => el.value === value)?.[0]?.label
                ? `${additionalValueText}${
                    options.filter((el) => el.value === value)?.[0]?.label || ""
                  }`
                : ""
            }
            readOnly
            className={clsx(
              "rounded w-full py-[6px] h-10 px-[16px] text-sm  outline-primary border-gray-400 border font-medium",
              {
                "border-red-500": errorMsg !== "",
              },
              className
            )}
          >
            {children}
          </input>

          {clearIcon && value && !isOpen ? (
            <div
              onClick={handleClickCloseIcon}
              className={clsx(
                "absolute top-1/2 -translate-y-1/2 transform right-2 cursor-pointer"
              )}
            >
              <AiFillCloseCircle />
            </div>
          ) : (
            <div
              className={clsx(
                "absolute top-1/2 -translate-y-1/2 transform right-2 transition-all",
                {
                  "-rotate-180": isOpen,
                }
              )}
            >
              <FiChevronDown />
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className={clsx(
              "absolute z-20 bg-white w-full border shadow-lg mt-[1px] rounded overflow-hidden transition-all",
              {
                "h-fit translate-y-1": isOpen,
                "h-0 -translate-y-8 opacity-0": !isOpen,
              }
            )}
          >
            {options.map((option, key) => (
              <p
                className={clsx(
                  "px-3 py-1 text-sm cursor-pointer transition-all",
                  {
                    "bg-gray-300 font-semibold": option.value === value,
                    "hover:bg-gray-100": option.value !== value,
                  }
                )}
                key={key}
                onClick={() => handleChooseItem(option.value)}
              >
                {option.label}
              </p>
            ))}
          </div>
        </div>
      </div>
      {withError ? (
        <div className="h-4 leading-tight">
          <p
            className={clsx("text-xs mt-1 text-red-500 transition-all", {
              "-translate-y-2": errorMsg === "",
              "translate-y-0": errorMsg,
            })}
          >
            {errorMsg}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Select;
