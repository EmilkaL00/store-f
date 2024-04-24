import { ReactNode } from "react";

type ContainerWrapperProps = {
  children: ReactNode;
};

export const ContainerWrapper = ({ children }: ContainerWrapperProps) => {
  return (
    <div className="flex flex-col p-10 items-center">
      <div className="max-w-[1440px]">{children}</div>
    </div>
  );
};
