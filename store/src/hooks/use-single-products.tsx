import { useQuery } from "@tanstack/react-query";
import { ReactQueryKeys } from "../helper/react-query-keys";
import { fetchSingleProduct } from "../service/products";

export const useProduct = (id: number) => {
  const query = useQuery({
    queryKey: ReactQueryKeys.GET_PRODUCT(id),
    queryFn: () => fetchSingleProduct(id),
  });

  const isLoading = query.isLoading;
  const product = query.data || null;

  return { query, isLoading, product };
};
