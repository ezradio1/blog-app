import { deleteUser, getUsers } from "@/redux/actions/user";
import { ModalDeleteProps } from "./index.types";
import { showToast } from "@/redux/reducers/toast";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AppRouterState } from "next/dist/client/components/router-reducer/router-reducer-types";
import { UserAction } from "@/redux/actions/user/index.types";
import { useState } from "react";

const useIndex = ({ selectedData, onClose, getData }: ModalDeleteProps) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<ThunkDispatch<AppRouterState, {}, UserAction>>();
  const dispatchSync = useDispatch();

  const handleConfirmDeleteUser = async () => {
    if (selectedData) {
      setLoading(true);
      const { error } = await dispatch(deleteUser(selectedData.id)).unwrap();
      setLoading(false);

      if (!error) {
        getData();
        onClose();
      }

      dispatchSync(
        showToast({
          message: error
            ? `Error: ${error}`
            : "Successfully Delete User Data",
          type: error ? "error" : "success",
        })
      );
    }
  };

  return { handleConfirmDeleteUser, loading };
};

export default useIndex;
