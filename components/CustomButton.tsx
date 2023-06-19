"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({  containerStyles, title, handleClick }: CustomButtonProps) => {
return (
  <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
    <span className={`flex-1`}>{title}</span>
      <div className="relative w-6 h-6">
      </div>
  </button>
)};

export default CustomButton;