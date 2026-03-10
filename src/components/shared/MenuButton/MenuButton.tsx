import type React from "react";

type MenuButtonProps = {
  MenuItemName?: string;
  bgColor?: string;
  onClick?: () => void;
  activeId?: boolean;
};

const MenuButton: React.FC<MenuButtonProps> = ({
  MenuItemName,
  onClick,
  bgColor,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex w-30 p-2.5 items-center justify-center bg-${bgColor}
      
      rounded-xl shadow-[5px_5px_0_0_#3a3f47] font-bold cursor-pointer `}
    >
      {MenuItemName || "Home"}
    </div>
  );
};

export default MenuButton;
