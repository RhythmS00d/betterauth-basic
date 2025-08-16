'use client';

import { usePathname } from "next/navigation";
import Tag from "./tag";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {(pathname === "/" || pathname === "/login" || pathname === "/register") && (
        <nav
          className="grid py-2 gap-40 text-black font-bold w-[40%] h-[50px] shadow-lg 
                  bg-[#e1e1e1]/60 backdrop-blur-sm sticky text-sm grid-flow-col place-items-center top-10 left-1/2 transform -translate-x-1/2 rounded-lg"
        >
          <div className="flex items-center space-x-2">
            <Tag name="Home" to="/" />
          </div>
          <div className="flex space-x-2">
            <Tag name="Login" to="login" />
            <Tag name="Register" to="register" />
          </div>
        </nav>
      )}
    </>
  );
}
