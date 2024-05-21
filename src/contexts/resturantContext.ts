import resturants from "@/assets/data/resturants";
import { createContext } from "react";

export const ResturantContext = createContext<typeof resturants | undefined>(
  undefined,
);
