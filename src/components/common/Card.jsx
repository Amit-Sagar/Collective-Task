import React from "react";

const Card = ({ children, bordered = false, width, height, classes }) => {
  return (
    <div
      className={`${
        bordered && "border border-[#E8E8E8] "
      } rounded-lg bg-white ${classes}`}
      style={{
        width: !!width && width,
        height: !!height && height,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
