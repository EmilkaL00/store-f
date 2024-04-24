import { RouteObject } from "react-router-dom";
import { ProductsPage } from "../pages/products-page/products-page";
import { ProductPage } from "../pages/product-page/product-page";
import { App } from "../App";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        children: [
          { index: true, element: <ProductsPage /> },
          { path: "/:id", element: <ProductPage /> },
        ],
      },

      {
        path: "/login",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <div>cart</div>,
      },
    ],
  },
];
