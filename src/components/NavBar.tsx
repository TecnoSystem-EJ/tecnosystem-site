"use client";
import React, { useState } from "react";
import Image from "next/image";
import StaticList from "./StaticList";

interface NavBarProps {
  navBar: any;
}

const NavBar = ({ navBar }: NavBarProps) => {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => {
    setNav(!nav);
  };
  return (
    <nav className="flex flex-col shadow-lg border border-gray-200 bg-gray-alt md:border-none md:shadow-none md:container md:mx-auto md:py-10">
      <div className="w-full flex justify-between items-center px-5 py-2 ">
      <div className="md:w-40 w-10 relative md:pt-32 pt-10 md:-ml-6">
          <Image
            src="/images/logots01.svg"
            alt="ts logo"
            objectFit="contain"
            fill
            className="w-full h-full top-0 left-0 "
          />
        </div>
        <button className="md:hidden" onClick={handleNavClick}>
         <Image
            src="/images/Vector.svg"
            alt="nem sei"
            height={45}
            width={45}
          />
        </button>
        <StaticList
          ulStyles="hidden md:flex justify-between gap-6 lg:text-[20px] md:text-sm font-secondary font-[600] uppercase"
          liStyles="flex justify-center items-center px-4 rounded-2xl hover:underline hover:text-red-600 border border-transparent"
          navigation={navBar.data}
        />
      </div>
      <div>
        {nav ? (
          <StaticList
            ulStyles="md:hidden w-full flex flex-col absolute bg-gray-alt w-full h-full justify-center items-center gap-6 text-[28px] md:text-sm font-primary font-[600] uppercase"
            liStyles="flex justify-center items-center px-4 font-primary text-primary-main hover:text-red-500 "
            handleNavClick={handleNavClick}
            navigation={navBar.data}
          />
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
