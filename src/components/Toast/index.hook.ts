"use client";
import { hideToast } from "@/redux/reducers/toast";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useIndex = () => {
  const dispatchSync = useDispatch();
  const { show } = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatchSync(hideToast());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show]);
};

export default useIndex;
