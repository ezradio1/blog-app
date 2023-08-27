import { getUsers } from ".";

export type UserAction = ReturnType<typeof getUsers.fulfilled>;

export interface AddUserPayload {
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface UpdateUserPayload extends AddUserPayload {
  id: string;
}
