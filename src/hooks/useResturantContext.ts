import { ResturantContext } from "@/contexts/resturantContext";
import { useContext } from "react";

export function useResturantContext() {
  const resturants = useContext(ResturantContext);

  if (resturants === undefined) {
    throw new Error("Resturants array missing");
  }

  return resturants;
}
