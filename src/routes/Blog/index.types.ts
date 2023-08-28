export interface BlogResponse {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
  error: null | string;
}
export type BlogData = BlogResponse["data"][0];
