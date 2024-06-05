import resturants from "@/assets/data/resturants";
import { createContext } from "react";

export default createContext<typeof resturants | null>(null);
