import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useState } from "react";

const useApi2 = <T>(url: string, config: AxiosRequestConfig) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function sendRequest(data?: unknown, params?: unknown) {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const { data: fetchedData } = await axios(url, {
        ...config,
        data,
        params,
      });
      setData(fetchedData);
    } catch (error: unknown) {
      let errorMessage = "Error has occurred ";
      if (error instanceof AxiosError) {
        errorMessage += error.response?.data?.message;
      } else if (error instanceof Error) {
        errorMessage += error.message;
      }
      setErrorMessage(errorMessage);
      console.log(errorMessage);
    }
    setIsLoading(false);
  }

  return { sendRequest, data, isLoading, errorMessage };
};

export default useApi2;
