import React from "react";
import "./header.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="shadow-sm p-6 items-center px-4 bg-white flex flex-col md:flex-row justify-center">
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <div className=" w-48 h-8 items-center flex justify-center relative">
            <Image
              src={"/logo.png"}
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
