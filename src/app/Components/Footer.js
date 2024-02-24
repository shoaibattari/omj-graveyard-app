import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="md:flex justify-between md:px-[48px] py-[16px] text-center bg-black text-gray-100">
        <p className=" font-bold">
          All Rights Reserved © | <br className="md:hidden" />
          <Link
            href="https://github.com/shoaibattari"
            target="_blank"
            className="hover:text-gray-300"
          >
            Shoaib Memon
          </Link>
        </p>
        <div>
          <Link href={"/"}>Legals </Link>|<Link href={"/"}> Terms Of Use </Link>
          |<Link href={"/"}> Privacy Policy</Link>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between pb-4">
          <div className="flex mt-4 space-x-6 justify-center  sm:mt-0">
            <Link
              href="https://www.facebook.com/shoaib.attari.399"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaFacebook className="  text-gray-100 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>

            <Link
              href="https://wa.me/+923232579204"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaWhatsapp className="  text-gray-100 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>

            <Link
              href="https://twitter.com/shoaibmemon26"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaTwitter className="  text-gray-100 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>

            <Link
              href="https://www.linkedin.com/in/shoaib-memon26"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaLinkedin className="  text-gray-100 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>

            <Link
              href="https://www.youtube.com/@shoaibmemon26"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaYoutube className="  text-gray-100 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
