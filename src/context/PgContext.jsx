import { createContext, useState } from "react";

export const PgContext = createContext();

// Create a provider for components to consume and share data
export const PgProvider = ({ children }) => {
  const [pgData, setPgData] = useState({});

  return (
    <PgContext.Provider value={{ pgData, setPgData }}>
      {children}
    </PgContext.Provider>
  );
};
