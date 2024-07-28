"use client";
import assets from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./common/Button";
import { redirect, useRouter } from "next/navigation";

const Sidebar = ({ sidebarList, selectedMenu, setSelectedMenu }) => {
  const router = useRouter();
  const hanldeClick = (item) => {
    setSelectedMenu(item.id);
    router.push(item.route);
  };

  return (
    <div className=" bg-white h-svh	">
      <div className="flex justify-between items-center border-b border-gray-300 p-5">
        <Image src={assets.icons.logo} alt="/logo" />
        <button className="border border-gray-300 p-2 rounded-md">
          <Image src={assets.icons.menuIcon} alt="/logo" />
        </button>
      </div>
      <div className="p-5 flex flex-col gap-5">
        {sidebarList.map((item) => (
          <Button
            key={item.id}
            title={item.title}
            icon={item.icon}
            classes={`border border-gray-300 w-full py-3 px-5 rounded-md ${
              selectedMenu === item.id && "bg-[#F2F2F2]"
            }`}
            onClick={() => hanldeClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
