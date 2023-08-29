export interface CommentsSectionProps {
  blogId: string;
}

export interface CommentsResponse {
  data: {
    post_id: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }[];
  error: null | string;
}
export type CommentsData = CommentsResponse["data"][0];
