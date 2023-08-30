import { addUser, updateUser } from "@/redux/actions/user";
import type { UserAction } from "@/redux/actions/user/index.types";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AppRouterState } from "next/dist/client/components/router-reducer/router-reducer-types";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import type { FieldType, ModalFormProps } from "./index.types";
import { MODAL_TYPE } from "../../index.constants";
import { showToast } from "@/redux/reducers/toast";
import { EMAIL_REGEX } from "@/constants/regex";

const useIndex = ({
  title,
  selectedData,
  onClose,
  getData,
}: ModalFormProps) => {
  const initialForm = {
    name: "",
    email: "",
    gender: "",
    status: "",
  };
  const dispatch = useDispatch<ThunkDispatch<AppRouterState, {}, UserAction>>();
  const dispatchSync = useDispatch();

  const [isEnterOnce, setIsEnterOnce] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errorMsg, setErrorMsg] = useState(initialForm);
  const isEdit = title === MODAL_TYPE.EDIT_USER;

  const validateField = useCallback(() => {
    let isValid = true;
    Object.keys(form).forEach((el) => {
      const formField = form[el as unknown as FieldType];

      if (formField === "") isValid = false;
      setErrorMsg((prevState) => ({
        ...prevState,
        [el]: formField === "" ? `Please input your ${el}!` : "",
      }));
    });

    if (!EMAIL_REGEX.test(form.email) && form.email) {
      isValid = false;
      setErrorMsg((prevState) => ({
        ...prevState,
        email: "Please input valid email!",
      }));
    }

    return isValid;
  }, [form]);

  useEffect(() => {
    if (isEdit && selectedData) {
      setForm({
        name: selectedData.name,
        email: selectedData.email,
        gender: selectedData.gender,
        status: selectedData.status,
      });
    }

    return () => {
      setForm(initialForm);
    };
  }, [isEdit, selectedData]);

  useEffect(() => {
    if (isEnterOnce) validateField();
  }, [isEnterOnce, validateField]);

  const handleChangeForm = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmitForm = async () => {
    setIsEnterOnce(true);
    if (validateField()) {
      setLoading(true);
      const { error } = isEdit
        ? await dispatch(
            updateUser({ id: selectedData?.id || "", ...form })
          ).unwrap()
        : await dispatch(addUser(form)).unwrap();
      setLoading(false);
      if (!error) {
        onClose();
        getData();
      }
      dispatchSync(
        showToast({
          message: error
            ? `Error: ${error}`
            : `Successfully ${isEdit ? "Edit" : "Add"} User Data`,
          type: error ? "error" : "success",
        })
      );
    }
  };

  return { form, errorMsg, handleChangeForm, handleSubmitForm, loading };
};

export default useIndex;
