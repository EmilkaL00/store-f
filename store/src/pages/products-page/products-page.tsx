import { useState } from "react";
import { useProducts } from "../../hooks/use-products";
import { MenuProps, Spin } from "antd";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Product } from "../../components/product/product";
import { ContainerWrapper } from "../../components/container-wrapper/container-wrapper";
import { Filter } from "../../components/filter/filter";

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

  const itemsFilters: MenuProps["items"][] = [
    [
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
    ],
    [
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
    ],
    [
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
    ],
  ];

  const titles = ["Title", "Price", "Category"];

  if (isLoading) return <Spin size="large" fullscreen />;

  return (
    <ContainerWrapper>
      <div className="flex flex-row gap-10 mb-10">
        <p>Sort by:</p>

        <div className="flex flex-row gap-8">
          {itemsFilters.map((items, index) => (
            <Filter title={titles[index]} items={items} key={index} />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {!productsList?.length && <div> No products </div>}
        {productsList &&
          productsList.map((product) => (
            <Product
              href={`/${product.id}`}
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
    </ContainerWrapper>
  );
}
