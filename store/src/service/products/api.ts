import instanceAxios from "../../helper/axios/axios-instance";
import { Products } from "./types";

// Get all products

export const fetchProducts = async (offset: number, limit: number) => {
  const { data } = await instanceAxios.get<Products>("products", {
    params: {
      offset,
      limit,
    },
  });
  return data;
};

// Get a single product

export const fetchSingleProduct = async (productId: number) => {
  const { data } = await instanceAxios.get(`products/${productId}`);
  return data;
};
