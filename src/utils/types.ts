import { z } from "zod";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

export interface ISection {
  id: number;
  title: string;
  data: IProduct[];
}

export interface IRestaurant {
  id: number;
  name: string;
  distance: number;
  rating: number;
  deliveryTime: string;
  imgUrl: string;
  sections: ISection[];
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be of minimum of 8 characters"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
