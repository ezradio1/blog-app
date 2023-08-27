interface ApiResponse<T> {
  data: T | null;
  error: null | string;
}

export async function fetchData<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    return { data: null, error: "Failed to fetch Data" };
  }

  const data: ApiResponse<T>["data"] = await response.json();
  return { data, error: null };
}
