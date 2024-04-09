import "./App.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ProductsPage } from "./pages/products-page/products-page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routing/routes";

// import Navbar from "./components/navbar/navbar";

const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
