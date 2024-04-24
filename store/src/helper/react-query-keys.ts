export const ReactQueryKeys = {
  GET_PRODUCTS: (offset: number, limit: number) => ["products", offset, limit],
  GET_PRODUCT: (productId: number) => ["product", productId],
};
