import axios, { AxiosResponse } from "axios";

export const errorResponse = (err: any) => {
  const error = err?.response?.data;
  let getFirstError = "";
  if (Array.isArray(error)) {
    const firstError = error?.[0];
    getFirstError = `${firstError.field} ${firstError.message}`;
  }

  return {
    data: null,
    error: getFirstError || "Network Error",
    status: error?.statusCode || 0,
  };
};

export const successResponse = (response: AxiosResponse) => {
  const { data, status } = response;
  return {
    data,
    error: null,
    status: status || 0,
  };
};

export async function getData(endpoint: string, request = {}) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    { params: request }
  );
  return response;
}

export async function postData<T extends unknown>(
  endpoint: string,
  payload: T
) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    }
  );
  return response;
}

export async function patchData<T extends unknown>(
  endpoint: string,
  payload: T
) {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    }
  );
  return response;
}

export async function deleteData(endpoint: string) {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    }
  );
  return response;
}
