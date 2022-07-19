import api from 'services/api';

export interface ResponseType {
  success?: string;
  error?: Error;
}

export const useRequest = () => {
  const runRequest = async <T = unknown, U = unknown>(
    url: string,
    method: 'get' | 'post',
    params?: any,
    data?: U | undefined,
    customErrorMessage?: string
  ) => {
    let response;

    try {
      response = await api.request<T>({
        url,
        method,
        params,
        data,
      });

      return response.data;
    } catch (err: any) {
      let errorMessage = '';

      if (err.response.data) {
        errorMessage = err.response.data;
      } else if (customErrorMessage) {
        errorMessage = customErrorMessage;
      }

      return new Error(errorMessage);
    }
  };

  return { runRequest };
};
