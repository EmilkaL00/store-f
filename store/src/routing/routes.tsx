import { RouteObject } from "react-router-dom";
import { ProductsPage } from "../pages/products-page/products-page";
import Header from "../components/navbar/navbar";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
      },
      { path: "/home", element: <ProductsPage /> },
      {
        path: "register",
        element: <>Register</>,
      },
    ],
  },
];
