import { commonApi } from "../lib/axios";
import { serverUrl } from "./serverUrl";

// REGISTER USER API
export const registerUserAPI = async (reqBody: any) => {
  return await commonApi("POST", `${serverUrl}/api/users/register`, reqBody, {});
};

// LOGIN USER API
export const loginUserAPI = async (reqBody: any) => {
  return await commonApi("POST", `${serverUrl}/api/users`, reqBody, {});
};
