import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../service/products/api";
import { ReactQueryKeys } from "../helper/react-query-keys";

export const useProducts = (offset: number, limit: number) => {
  const query = useQuery({
    queryKey: ReactQueryKeys.GET_PRODUCTS(offset, limit),
    queryFn: () => fetchProducts(offset, limit),
  });

  const productsList = query.data?.map((item) => item);
  const isLoading = query.isLoading;

  return { query, productsList, isLoading };
};
