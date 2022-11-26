import React, { createContext, useState } from "react";

const SearchContext = createContext(); // 검색 컨텍스트 생성

export function SearchContextProvider({ children }) {
  const [keyword, onChangeText] = useState("");

  return (
    <SearchContext.Provider value={{ keyword, onChangeText }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
