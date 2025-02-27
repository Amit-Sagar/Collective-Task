"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import assets from "@/assets";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const sidebarList = [
  {
    id: 1,
    title: "Dashboard",
    icon: assets.icons.dashboard,
    route: "/"
  },
  {
    id: 2,
    title: "Opportunities",
    icon: assets.icons.opportunity,
    route: "/opportunity"
  },
  {
    id: 3,
    title: "Assigned to Me",
    icon: assets.icons.userCheckIcon,
    route: "/assigned-task"
  },
];

export default function RootLayout({ children }) {
  const [selectedMenu, setSelectedMenu] = useState(1)

  useEffect(() => {
    if (window.location.pathname.includes('opportunity')) {
      setSelectedMenu(2)
    } else if (window.location.pathname.includes('assigned-task')) {
      setSelectedMenu(3)
    } else {
      setSelectedMenu(1)
    }
  }, [])

  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#E2E2E2" }}>
        <div className="h-full w-full flex">
          <div className="w-[20%] fixed top-0 bottom-0 left-0	">
            <Sidebar sidebarList={sidebarList} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
          </div>
          <div className="w-[80%] px-5 ml-[20%]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
