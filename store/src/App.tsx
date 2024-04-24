import "./App.scss";

import { Outlet } from "react-router-dom";
import Header from "./components/navbar/navbar";

export function App() {
  return (
    <>
      <Header />
      <main>{/* <Outlet /> */}</main>
      {/* <Footer /> */}
      {/* <Outlet /> */}
    </>
  );
}
