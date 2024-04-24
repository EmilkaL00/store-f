import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

export type FilterProps = {
  items: MenuProps["items"];
  title: string;
};

export const Filter = ({ items, title }: FilterProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleVisibleChange = (visible: boolean) => {
    setIsActive(visible);
  };

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      onOpenChange={handleVisibleChange}
    >
      <a
        className={`${isActive && "text-facebook"}`}
        style={{ cursor: "pointer" }}
      >
        {title}
        <DownOutlined />
      </a>
    </Dropdown>
  );
};
