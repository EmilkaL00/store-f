import { useState } from "react";
import { useProducts } from "../../hooks/use-products";
import { Spin } from "antd";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Product } from "../../components/product/product";

export function ProductsPage() {
  const [offset, setOffset] = useState(0);
  const limit = 9;

  const { productsList, isLoading } = useProducts(offset, limit);

  const handleNextPage = () => {
    setOffset(offset + limit);
  };

  const handlePrevPage = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    } else {
      setOffset(0);
    }
  };

  if (isLoading) return <Spin size="large" fullscreen />;

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {productsList &&
          productsList.map((product) => (
            <Product
              key={product.id}
              image={product.images[0]}
              title={product.title}
              price={`${product.price} PLN`}
              description={product.description}
            />
          ))}
      </div>

      <div className="flex justify-between	py-6">
        <Button
          disabled={offset === 0}
          type="primary"
          className="text-medium"
          onClick={() => {
            setOffset(0);
          }}
        >
          back to home page
        </Button>
        <div className="flex gap-4">
          <Button
            icon={<LeftOutlined />}
            onClick={handlePrevPage}
            disabled={offset === 0}
          >
            Previous
          </Button>
          <Button
            className="flex flex-row-reverse items-center gap-2"
            icon={<RightOutlined />}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
