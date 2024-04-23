import { createContext, useState } from "react";

export const BikeContext = createContext();

// Create a provider for components to consume and share data
export const BikeProvider = ({ children }) => {
  const [bikeData, setBikeData] = useState({});

  return (
    <BikeContext.Provider value={{ bikeData, setBikeData }}>
      {children}
    </BikeContext.Provider>
  );
};
