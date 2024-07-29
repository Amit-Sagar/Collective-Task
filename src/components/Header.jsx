import React from "react";
import Button from "./common/Button";
import assets from "@/assets";
import Image from "next/image";

const Header = ({ showBtn }) => {
  return (
    <div className="flex justify-between w-full my-5">
      {!showBtn && (
        <div>
          <h3 className="text-xl font-semibold">Dashboard</h3>
          <p className="text-[#666666] text-sm">Opportunity analysis</p>
        </div>
      )}
      <div
        className={`flex items-center gap-4 ${showBtn && "w-full justify-end"}`}
      >
        {showBtn && (
          <Button
            icon={assets.icons.plusIcon}
            title="Create Mission"
            classes="bg-black text-white p-2 px-4 rounded-lg text-sm"
          />
        )}
        <div className="flex items-center gap-3">
          <div>
            <p className="text-right text-[#666666] text-sm">Welcome</p>
            <h2 className="text-base font-medium">John Smith</h2>
          </div>
          <Image src={assets.icons.userImage} className="w-10 h-10" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Header;
