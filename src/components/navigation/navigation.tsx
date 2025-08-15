import Image from "next/image";
import Tag from "./tag";

export default function Navigation() {
  return (
    <>
      <nav
        className="grid py-2 gap-40 text-white font-bold w-[40%] h-[50px] shadow-lg 
                bg-[#39393a] relative text-sm grid-flow-col place-items-center top-10 left-1/2 transform -translate-x-1/2 rounded-lg"
      >
        <Image
          className="absolute -left-14"
          alt="butterauth logo"
          src="/butter2.png"
          width={100}
          height={40}
        />
        <div id="logo" className="flex items-center space-x-2">
          <Tag name="Home" />
        </div>
        <div className="flex space-x-2">
          <Tag name="Login" />
          <Tag name="Register" />
        </div>
      </nav>
    </>
  );
}
