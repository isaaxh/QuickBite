import React, { ReactNode } from "react";
import resturants from "@/assets/data/resturants";
import ResturantContext from "@/contexts/ResturantContext";

interface ResturantProviderProps {
  children: ReactNode;
}
type ResturantContextProps = typeof resturants;

const ResturantProvider = ({ children }: ResturantProviderProps) => {
  const value: ResturantContextProps = resturants;
  return (
    <ResturantContext.Provider value={value}>
      {children}
    </ResturantContext.Provider>
  );
};

export default ResturantProvider;
