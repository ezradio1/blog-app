import type { TableColumn } from "@/components/Table/index.types";
import Tag from "@/components/Tag";
import { getUsers } from "@/redux/actions/user";
import type { UserAction } from "@/redux/actions/user/index.types";
import type { UserData } from "@/redux/reducers/user/index.types";
import { RootState } from "@/redux/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AppRouterState } from "next/dist/client/components/router-reducer/router-reducer-types";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MODAL_TYPE } from "./index.constants";
import type { PaginationParams } from "@/components/Pagination/index.types";

const useIndex = () => {
  const [modal, setModal] = useState<null | string>(null);
  const [filter, setFilter] = useState({
    searchBy: "name",
    gender: "",
    status: "",
  });
  const [queryParams, setQueryparams] = useState({
    page: 1,
    per_page: 5,
    name: "",
    email: "",
    gender: "",
  });
  const [searchValue, setSerachValue] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<AppRouterState, {}, UserAction>>();
  const { data, loading } = useSelector((state: RootState) => state.user);

  const getUserData = useCallback(async () => {
    setLoadingSearch(false);
    await dispatch(getUsers(queryParams));
    setLoadingSearch(false);
  }, [dispatch, queryParams]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  useEffect(() => {
    if (searchValue) {
      const timeoutId = setTimeout(() => {
        setQueryparams((prevState) => ({
          ...prevState,
          name: filter.searchBy === "name" ? searchValue : "",
          email: filter.searchBy === "email" ? searchValue : "",
          page: 1,
        }));
        setLoadingSearch(false);
      }, 800);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchValue, filter]);

  const columns: TableColumn<any>[] = [
    {
      key: "no",
      header: "no",
      align: "center",
      width: "w-12",
    },
    {
      key: "name",
      header: "name",
    },
    {
      key: "email",
      header: "email",
    },
    {
      key: "gender",
      header: "gender",
      align: "center",
      render: (data) => (
        <div className="flex justify-center">
          <Tag
            color={data.gender === "male" ? "blue" : "pink"}
            icon={data.gender === "male" ? <FaMale /> : <FaFemale />}
          >
            {data.gender}
          </Tag>
        </div>
      ),
    },
    {
      key: "status",
      header: "status",
      align: "center",
      render: (data) => (
        <div className="flex justify-center">
          <Tag color={data.status === "active" ? "green" : "red"}>
            {data.status}
          </Tag>
        </div>
      ),
    },
    {
      key: "action",
      header: "Action",
      align: "center",
      render: (data) => (
        <div className="flex gap-2 justify-center">
          <span
            className="font-medium text-blue-400 cursor-pointer hover:font-semibold"
            onClick={() => handleEditUser(data)}
          >
            Edit
          </span>
          <span
            className="font-medium text-red-400 cursor-pointer hover:font-semibold"
            onClick={() => handleDeleteUser(data)}
          >
            Delete
          </span>
        </div>
      ),
    },
  ];

  const handleChangeSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setSerachValue(evt.target.value);
    if (evt.target.value === "") {
      setQueryparams((prevState) => ({
        ...prevState,
        [filter.searchBy]: undefined,
        page: 1,
      }));
      return;
    }
    setLoadingSearch(true);
  };

  const handleChangeFilter = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;

    setFilter((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
    if (searchValue !== "" || inputName !== "searchBy") setLoadingSearch(true);

    if (inputName !== "searchBy") {
      setQueryparams((prevState) => ({
        ...prevState,
        [inputName]: inputValue,
        page: 1,
      }));
    }
  };

  const handlePagination = (key: PaginationParams) => {
    setQueryparams((prevState) => ({
      ...prevState,
      page: typeof key === "number" ? key : eval(`${prevState.page} ${key} 1`),
    }));
  };

  const handleChangeRowPerPage = (value: number) => {
    setQueryparams((prevState) => ({
      ...prevState,
      per_page: value,
    }));
  };

  const handleDeleteUser = (data: UserData) => {
    setSelectedUser(data);
    setModal(MODAL_TYPE.DELETE_USER);
  };

  const handleEditUser = (data: UserData) => {
    setSelectedUser(data);
    setModal(MODAL_TYPE.EDIT_USER);
  };

  return {
    modal,
    setModal,
    data,
    error: null,
    columns,
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
  };
};

export default useIndex;
