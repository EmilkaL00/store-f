import { Image } from "antd";

type ProductProps = {
  image: string;
  title: string;
  price: string;
  description: string;
  onClick?: () => void;
  href?: string;
};

export function Product({
  image,
  title,
  price,
  description,
  onClick,
  href,
}: ProductProps) {
  return (
    <a
      className="shadow-md hover:brightness-75 hover:cursor-pointer"
      href={href}
      onClick={onClick}
    >
      <Image
        alt="product-img"
        placeholder
        fallback={"https://fakeimg.pl/400x400?text=loading.."}
        src={image}
        preview={false}
      />

      <div className="flex flex-col p-2">
        <p>{title}</p>
        <p className="font-bold">{price}</p>
        <p className="description text-xs">{description}</p>
      </div>
    </a>
  );
}
