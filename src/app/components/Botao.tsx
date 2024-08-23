import React from "react";

interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
  const corClasses = {
    green: "bg-gradient-to-r from-green-400 to-green-700",
    blue: "bg-gradient-to-r from-blue-400 to-blue-700",
    gray: "bg-gradient-to-r from-gray-400 to-gray-700",
  };

  const bgClass = corClasses[props.cor ?? "gray"];

  return (
    <button
      onClick={props.onClick}
      className={`${bgClass} text-white px-4 py-2 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
}
