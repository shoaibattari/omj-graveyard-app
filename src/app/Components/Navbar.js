"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Hub River 1",
      link: "hubriver1",
    },
    {
      id: 3,
      name: "Hub River 2",
      link: "hubriver2",
    },
    {
      id: 4,
      name: "Saadi Town",
      link: "saaditown",
    },
    {
      id: 5,
      name: "Mewa Shah",
      link: "mewashah",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-1 md:px-4 bg-gray-300 text-gray-700 fixed nav ">
      <div className="">
        <h1 className="text-2xl font-extrabold md:text-3xl font-signature ml-2 md:ml-6 ">
          <Link href="/" target="_blank">
            OMJ GRAVEYARD
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer font-extrabold  text-2xl text-gray-700 hover:scale-125 hover:text-gray-900 duration-200 link-underline"
          >
            <Link href={link} target="_blank">{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-700 md:hidden"
      >
        {nav ? <FaTimes size={40} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute  top-0 left-0 w-full h-screen bg-white ">
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl font-extrabold text-gray-700 hover:scale-125 hover:text-gray-900 duration-300"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
