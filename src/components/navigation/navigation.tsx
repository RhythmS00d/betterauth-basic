import Image from "next/image";
import Tag from "./tag";

export default function Navigation() {
  return (
    <nav
      className="grid py-2 px-8 text-black font-bold w-full shadow-lg 
                 p-4 bg-[#e5e5e6] text-sm grid-flow-col place-items-center"
    >
      <div id="logo" className="flex items-center space-x-4">
        <Image
          alt="butterauth logo"
          src="/butter2.png"
          width={100}
          height={40}
        />
        <Tag name="Home" />
      </div>
      <div className="flex space-x-4">
        <Tag name="Login" />
        <Tag name="Register" />
      </div>
    </nav>
  );
}
