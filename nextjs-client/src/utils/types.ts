import { StaticImageData } from "next/image";
type Role = "USER" | "ADMIN" | "RESTAURANT";

export type User = {
  id: string;
  name: string;
  address: string;

  role: Role;
  avatarUrl: StaticImageData;
};
export type LeftOverItem = {
  id?: string;
  name: string;
  description: string;
  restaurantId: string;
  quantity: number;
  imageUrl: string;
};

export type Restaurant = {
  id: string;
  name: string;
  address: string;
  role: Role;
  avatarUrl: StaticImageData;
};
