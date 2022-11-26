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

  const onModify = (modified) => {
    // logs 배열을 순회하여 id가 일치하면 log 교체, 그렇지 않으면 유지
    const nextLogs = logs.map((log) =>
      log.id === modified.id ? modified : log
    );
    setLogs(nextLogs);
  };

  const onRemove = (id) => {
    // 특저 id를 제외한 항목들로만 구성된 새로운 배열을 만들어서 상태 업데이트
    const nextLogs = logs.filter((log) => log.id !== id);
    setLogs(nextLogs);
  };

  const [logs, setLogs] = useState(
    Array.from({ length: 3 })
      .map((_, index) => ({
        id: uuidv4(),
        title: `Log ${index}`,
        body: `Log ${index}`,
        date: new Date().toISOString(),
      }))
      .reverse()
  );

  return (
    <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
