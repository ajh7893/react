// components/Icon.tsx
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type IconProps = {
  name: string;
  className?: string;
  onClick?: () => void;
};

export function Icon({ name, className, onClick }: IconProps) {
  const icons = {
    add: <FaPlus className={className} onClick={onClick} />,
    remove: <FaMinus className={className} onClick={onClick} />,
  };

  return icons[name] || null;
}
