/* eslint-disable react-hooks/exhaustive-deps */
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const useApi = <T>(url: string, config: AxiosRequestConfig) => {
  const [data, setData] = useState<T | undefined>(undefined);

  // TODO: Add loading and error states and export them out
  // TODO: Add functionality for calling if from a function, e.g. to add todo

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios<T>(url, config);
        setData(data);
      } catch (error: unknown) {
        let errorMessage = "Error has occurred ";
        if (error instanceof AxiosError) {
          errorMessage += error.response?.data?.message;
        } else if (error instanceof Error) {
          errorMessage += error.message;
        }
        console.log(errorMessage);
      }
    }
    getData();
  }, []);

  return { data };
};

export default useApi;
