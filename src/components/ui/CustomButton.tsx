import React from "react";

type ButtonProps = {
  name?: string;
  onClick?: () => void;
};

const CustomButton: React.FC<ButtonProps> = () => {
  return <div>CustomButton</div>;
};

export default CustomButton;
