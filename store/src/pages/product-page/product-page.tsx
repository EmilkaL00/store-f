// import { useProduct } from "../../hooks/use-single-products";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  let { id } = useParams();

  console.log(id);
  // const { product, isLoading } = useProduct(1);
  return <div>{"SIEMA"}</div>;
};
