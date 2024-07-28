import React from "react";
import Button from "./common/Button";
import assets from "@/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between w-full my-5">
      <div>
        <h3 className="text-2xl font-semibold">Dashboard</h3>
        <p className="text-[#666666]">Opportunity analysis</p>
      </div>
      <div className="flex items-center gap-4">
        <Button
          icon={assets.icons.plusIcon}
          title="Create Mission"
          classes="bg-black text-white p-2 px-4 rounded-lg"
        />
        <div className="flex items-center gap-3">
          <div>
            <p className="text-right text-[#666666] text-sm">Welcome</p>
            <h2 className="text-lg font-medium">John Smith</h2>
          </div>
          <Image src={assets.icons.userImage} className="w-10 h-10" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Header;
