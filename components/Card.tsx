import React from "react";
import Link from "next/link";
import { CardProps } from "@/constants/interface";

const Card = ({
  title,
  description,
  buttonText,
  cardColor,
  titleColor,
  descriptionColor,
  buttonColor,
  buttonTextColor,
  buttonLink,
}: CardProps) => (
  <div
    className="w-[270px] h-[193px] rounded-md p-4"
    style={{ backgroundColor: cardColor }}
  >
    <h3 className="font-semibold text-base mb-2" style={{ color: titleColor }}>
      {title}
    </h3>
    <p
      className="text-sm font-normal mb-6"
      style={{ color: descriptionColor }}
    >
      {description}
    </p>
    <Link href={buttonLink}>
      <button
        className="w-[242px] h-[46px] rounded-md px-6 py-3 text-center font-medium text-sm"
        style={{ backgroundColor: buttonColor, color: buttonTextColor }}
      >
        {buttonText}
      </button>
    </Link>
  </div>
);

export default Card;
