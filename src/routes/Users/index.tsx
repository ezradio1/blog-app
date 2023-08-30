"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Table from "@/components/Table";
import ModalDelete from "./components/ModalDelete";
import ModalForm from "./components/ModalForm";
import { MODAL_TYPE, SEARCH_BY } from "./index.constants";
import useIndex from "./index.hook";
import { GENDER, STATUS } from "@/constants/dropdownOptions";

const Users = () => {
  const {
    modal,
    setModal,
    columns,
    error,
    data,
    loading,
    loadingSearch,
    searchValue,
    handleChangeSearch,
    handlePagination,
    queryParams,
    selectedUser,
    getUserData,
    filter,
    handleChangeFilter,
    handleChangeRowPerPage,
  } = useIndex();
  if (!data || error) return <div>{error}</div>;

  return (
    <div>
      <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center mb-4 gap-2">
        <p className="font-semibold uppercase text-lg">User List</p>

        <div className="flex gap-2 flex-col lg:flex-row w-full lg:w-fit">
          <Select
            options={Object.values(GENDER).map((gender) => {
              return {
                label: gender,
                value: gender.toLowerCase(),
              };
            })}
            placeholder="Gender filter"
            value={filter.gender}
            onChange={handleChangeFilter}
            name="gender"
            clearIcon
          />
          <Select
            options={Object.values(STATUS).map((status) => {
              return {
                label: status,
                value: status.toLowerCase(),
              };
            })}
            placeholder="Status filter"
            value={filter.status}
            onChange={handleChangeFilter}
            name="status"
            clearIcon
          />
          <Select
            additionalValueText="Search by "
            options={SEARCH_BY}
            placeholder="Search by"
            value={filter.searchBy}
            onChange={handleChangeFilter}
            name="searchBy"
          />
          <Input
            placeholder="Search user here..."
            value={searchValue}
            onChange={handleChangeSearch}
            withError={false}
          />
          <Button onClick={() => setModal(MODAL_TYPE.ADD_USER)}>
            Add User
          </Button>
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          data={data}
          loading={loading || loadingSearch}
          onChangePagination={(key) => handlePagination(key)}
          currentPage={queryParams.page}
          rowsPerPage={queryParams.per_page}
          onChangeRowPerPage={handleChangeRowPerPage}
        />
      </div>
      <ModalForm
        title={modal || ""}
        isOpen={MODAL_TYPE.ADD_USER === modal || MODAL_TYPE.EDIT_USER === modal}
        onClose={() => setModal(null)}
        selectedData={selectedUser}
        getData={getUserData}
      />
      <ModalDelete
        isOpen={MODAL_TYPE.DELETE_USER === modal}
        onClose={() => setModal(null)}
        selectedData={selectedUser}
        getData={getUserData}
      />
    </div>
  );
};

export default Users;
