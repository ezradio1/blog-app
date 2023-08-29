export interface SearchParamsType {
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface BlogDetailProps {
  params: { blog_id: string };
}
