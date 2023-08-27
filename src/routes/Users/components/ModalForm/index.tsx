import Modal from "@/components/Modal";
import React from "react";
import type { ModalFormProps } from "./index.types";
import Input from "@/components/Input";
import useIndex from "./index.hook";
import Select from "@/components/Select";
import { GENDER, STATUS } from "@/constants/dropdownOptions";

const ModalForm = (props: ModalFormProps) => {
  const { handleChangeForm, form, errorMsg, handleSubmitForm, loading } =
    useIndex(props);

  return (
    <Modal {...props} onSubmit={handleSubmitForm} loading={loading}>
      <div className="flex gap-3 flex-col">
        <Input
          name="name"
          placeholder="Input name here"
          label="Name"
          value={form.name}
          onChange={handleChangeForm}
          errorMsg={errorMsg.name}
        />
        <Input
          name="email"
          placeholder="Input email here"
          label="Email"
          value={form.email}
          onChange={handleChangeForm}
          errorMsg={errorMsg.email}
        />
        <Select
          name="gender"
          placeholder="Select gender here"
          label="Gender"
          value={form.gender}
          onChange={handleChangeForm}
          options={Object.values(GENDER).map((gender) => {
            return {
              label: gender,
              value: gender.toLowerCase(),
            };
          })}
          errorMsg={errorMsg.gender}
        />
        <Select
          name="status"
          placeholder="Select status here"
          label="Status"
          value={form.status}
          onChange={handleChangeForm}
          options={Object.values(STATUS).map((status) => {
            return {
              label: status,
              value: status.toLowerCase(),
            };
          })}
          errorMsg={errorMsg.status}
        />
      </div>
    </Modal>
  );
};

export default ModalForm;
