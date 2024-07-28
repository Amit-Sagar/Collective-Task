import Image from "next/image";
import React from "react";

const Button = ({ title, icon, classes, onClick }) => {
  return (
    <button className={`flex items-center gap-5 ${classes}`} onClick={onClick}>
      {icon && <Image src={icon} alt="/" />}
      {title && <p className="text-nowrap">{title}</p>}
    </button>
  );
};

export default Button;
