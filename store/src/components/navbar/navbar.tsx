import {
  ShoppingCartOutlined,
  LoginOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [current, setCurrent] = useState<string>("h"); // current ma typ string
  const onClick = (e: { key: React.Key }) => {
    // e.key ma typ React.Key
    console.log("click ", e);
    setCurrent(e.key.toString()); // konwertuj na string
  };
  return (
    <>
      <Menu
        className="p-2 justify-end"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="h" icon={<HomeOutlined />}>
          <Link className="text-base" to="/">
            Home
          </Link>
        </Menu.Item>

        <Menu.Item key="l" icon={<LoginOutlined />}>
          <Link className="text-base" to="/login">
            Login
          </Link>
        </Menu.Item>
        <Menu.Item key="c" icon={<ShoppingCartOutlined />}>
          <Link className="text-base" to="/cart">
            See your cart
          </Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Header;
