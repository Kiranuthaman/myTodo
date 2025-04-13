import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const commonApi = async (
  httpRequest: AxiosRequestConfig["method"],
  url: string,
  reqBody?: any,
  reqHeader?: Record<string, string>
): Promise<AxiosResponse | any> => {
  const reqConfig: AxiosRequestConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: reqHeader ?? { "Content-Type": "application/json" },
  };

  try {
    const result = await axios(reqConfig);
    return result;
  } catch (err) {
    return err;
  }
};
