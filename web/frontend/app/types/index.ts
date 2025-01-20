// web/frontend/app/types/index.ts
import type {
  postgresDbGetProducts,
  postgresDbGetProductById,
} from "../remix-client/remix-client.mjs";

export type Product = postgresDbGetProducts[number];
export type SingleProduct = postgresDbGetProductById;

export const formatPrice = (price: string | null | undefined): string => {
  const numPrice = price ? parseFloat(price) : 0;
  return numPrice.toFixed(2);
};

export const getProductName = (name: string | null | undefined): string => {
  return name || "Unnamed Product";
};

export const getProductDescription = (
  description: string | null | undefined
): string => {
  return description || "No description available";
};
