export interface BlogDetailResponse {
  data: {
    user_id: number;
    id: number;
    title: string;
    body: string;
  };
  error: null | string;
}
export type BlogDetailData = BlogDetailResponse["data"];

export interface UserDetailResponse {
  data: {
    id: number;
    name: string;
    email: string;
  };
  error: null | string;
}
export type UserDetailData = UserDetailResponse["data"];
