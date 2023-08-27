import {
  deleteData,
  errorResponse,
  getData,
  patchData,
  postData,
  successResponse,
} from "@/helpers/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddUserPayload, UpdateUserPayload } from "./index.types";

export const getUsers = createAsyncThunk(
  "getUsers",
  async (queryParams: Record<string, string | number | undefined>) => {
    try {
      const res = await getData("users", queryParams);
      return successResponse(res);
    } catch (err: any) {
      return errorResponse(err);
    }
  }
);

export const addUser = createAsyncThunk(
  "addUser",
  async (payload: AddUserPayload) => {
    try {
      const res = await postData<AddUserPayload>("users", payload);
      return successResponse(res);
    } catch (err: any) {
      return errorResponse(err);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (payload: UpdateUserPayload) => {
    try {
      const res = await patchData<UpdateUserPayload>(
        `users/${payload.id}`,
        payload
      );
      return successResponse(res);
    } catch (err: any) {
      return errorResponse(err);
    }
  }
);

export const deleteUser = createAsyncThunk("deleteUser", async (id: string) => {
  try {
    const res = await deleteData(`users/${id}`);
    return successResponse(res);
  } catch (err: any) {
    return errorResponse(err);
  }
});
