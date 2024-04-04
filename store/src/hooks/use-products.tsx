import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../service/products/api";

export const useProducts = (offset: number, limit: number) => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(offset, limit),
  });

  const productsList = query.data?.map((item) => item);

  return { query, productsList };
};
