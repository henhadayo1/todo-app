import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";

const useApi = <T>(url: string, config?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const sendRequest = useCallback(
    async function sendRequest(requestedConfig?: AxiosRequestConfig) {
      setIsLoading(true);
      setErrorMessage("");
      try {
        console.log(
          "Sending request to " + requestedConfig?.url
            ? requestedConfig?.url
            : url
        );
        const { data: fetchedData } = await axios(
          requestedConfig?.url ? requestedConfig?.url : url,
          {
            ...config,
            ...requestedConfig,
          }
        );
        setData(fetchedData);
      } catch (error: unknown) {
        let errorMessage = "Error has occurred ";
        if (error instanceof AxiosError) {
          errorMessage += error.response?.data?.message;
        } else if (error instanceof Error) {
          errorMessage += error.message;
        }
        setErrorMessage(errorMessage);
        throw new Error(errorMessage);
      }
      setIsLoading(false);
    },
    [config, url]
  );

  useEffect(() => {
    if (!config || !config.method || config.method.toUpperCase() === "GET") {
      sendRequest();
    }
  }, [sendRequest, config]);

  return { sendRequest, data, isLoading, errorMessage };
};

export default useApi;
