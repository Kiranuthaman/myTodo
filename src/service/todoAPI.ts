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

//GET ALL COMPLETED TODO API
export const getAllCompletedTodoAPI = async (id: any, reqHeader: any) => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/todo/completed/${id}`,
    {},
    reqHeader
  );
};

//GET ALL FAVOURITE TODO API
export const getAllFavouriteTodoAPI = async (id: any, reqHeader: any) => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/todo/favourite/${id}`,
    {},
    reqHeader
  );
};

//GET ALL ONGOING TODO API
export const getAllOngoingTodoAPI = async (id: any, reqHeader: any) => {
    return await commonApi(
      "GET",
      `${serverUrl}/api/todo/ongoing/${id}`,
      {},
      reqHeader
    );
  };