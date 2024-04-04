import { useState } from "react";
import { useProducts } from "../../hooks/use-products";

export function ProductsPage() {
  const [offset, setOffset] = useState(0);
  const limit = 9; // Set the limit for pagination

  const { productsList } = useProducts(offset, limit);

  const handleNextPage = () => {
    setOffset(offset + limit);
  };

  const handlePrevPage = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    } else {
      setOffset(0); // Return to the first page if offset is less than limit
    }
  };

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
            <div key={product.id}>
              <img
                src={product.images[0]}
                style={{ width: "100%", height: "auto" }}
              />
              {/* {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Product ${index}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))} */}
              <p className="text-left">{product.title}</p>

              <p className="font-semibold">${product.price}</p>

              <p>{product.description}</p>
            </div>
          ))}
      </div>
      <button onClick={handlePrevPage} disabled={offset === 0}>
        Previous
      </button>
      <button onClick={handleNextPage}>Next</button>
    </>
  );
}
