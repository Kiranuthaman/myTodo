import { commonApi } from "../lib/axios";
import { serverUrl } from "./serverUrl";

// CREATE TODO API
export const createTodoAPI = async (reqBody: any, reqHeader: any) => {
  return await commonApi("POST", `${serverUrl}/api/todo`, reqBody, reqHeader);
};

//GET ALL TODO API
export const getAllTodoAPI = async (id: any, reqHeader: any) => {
  return await commonApi("GET", `${serverUrl}/api/todo/${id}`, {}, reqHeader);
};
