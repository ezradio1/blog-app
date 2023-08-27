
export interface UserData {
  id: string;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface InitialState {
  data: UserData[];
  error: string | null | undefined;
  loading: boolean;
}
