import React, { createContext, useState } from "react";

interface ResponseShareProps {
  children: any;
}

export const createTodoResponseContext = createContext<any>(null);
export const updateTodoResponseContext = createContext<any>(null);

const ResponseShare: React.FC<ResponseShareProps> = ({ children }) => {
  const [createTodoResponse, setCreateTodoResponse] = useState<string>("");
  const [updateTodoResponse, setUpdateTodoResponse] = useState<string>("");
  return (
    <>
      {/* CREATE TODO RESPONSE */}
      <createTodoResponseContext.Provider
        value={{ createTodoResponse, setCreateTodoResponse }}
      >
        {/* UPDATE TODO RESPONSE */}
        <updateTodoResponseContext.Provider
          value={{ updateTodoResponse, setUpdateTodoResponse }}
        >
          {children}
        </updateTodoResponseContext.Provider>
      </createTodoResponseContext.Provider>
    </>
  );
};

export default ResponseShare;
