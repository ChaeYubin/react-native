import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LogContext = createContext("안녕하세요");

export function LogContextProvider({ children }) {
  const onCreate = ({ title, body, date }) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  const [logs, setLogs] = useState([]);
  return (
    <LogContext.Provider value={{ logs, onCreate }}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
