import "./App.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsPage } from "./pages/products-page/products-page";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  );
}
