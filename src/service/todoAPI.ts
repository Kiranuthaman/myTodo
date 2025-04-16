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

//GET ALL ONGOING TODO API
export const updateTodoStatusAPI = async (
  id: any,
  reqBody: any,
  reqHeader: any
) => {
  return await commonApi(
    "PUT",
    `${serverUrl}/api/todo/update/${id}`,
    reqBody,
    reqHeader
  );
};

//MARK AS FAVOURITE API
export const updateIsFavouriteAPI = async (
  id: any,
  reqBody: any,
  reqHeader: any
) => {
  return await commonApi(
    "PUT",
    `${serverUrl}/api/todo/updateFavourite/${id}`,
    reqBody,
    reqHeader
  );
};

//DELETE TODO API
export const deleteTodoAPI = async (id: any, reqHeader: any) => {
  return await commonApi(
    "DELETE",
    `${serverUrl}/api/todo/delete/${id}`,
    {},
    reqHeader
  );
};

//SEARCH TODO API
export const searchTodoAPI = async (id:any, query: string, reqHeader: any) => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/todo/${id}/searchTodo/search?search=${query}`,
    {},
    reqHeader
  );
};
