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
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-green-500 fixed nav ">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl font-signature ml-2 ">
          <Link href="/" target="_blank" >
            OMJ GRAVEYARD
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer font-medium text-2xl text-gray-900 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-green-500 text-white ">
          {links.map(({ id, name, link }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl text-gray-900 hover:scale-125 hover:text-white duration-200">
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
