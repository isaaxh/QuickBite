import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  imgUrl: z.string(),
});

export type TProduct = z.infer<typeof ProductSchema>;

export const SectionSchema = z.object({
  id: z.number(),
  title: z.string(),
  data: z.array(ProductSchema),
});

export type TSection = z.infer<typeof SectionSchema>;

export const ResturantSchema = z.object({
  id: z.number(),
  name: z.string(),
  distance: z.number(),
  rating: z.number(),
  deliveryTime: z.string(),
  imgUrl: z.string(),
  sections: z.array(SectionSchema),
});

export type TRestaurant = z.infer<typeof ResturantSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be of minimum of 8 characters"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
