import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

import LogoImg from "../assets/logo.jpg";

const Header = () => {
  const [toggleMenu, SetToggleMenu] = useState(false);

  return (
    <header className="flex fixed w-full z-10 justify-between px-5 py-8 bg-header font-hero-font ">
      <a href="/" className="text-xl font-hero-font text-gray-300 ">
        <div className="flex gap-2 absolute ">
          <img className="h-[45px]  rounded-3xl bg-slate-100 p-0.5 " src={LogoImg} />
          <span className="p-2">Nk</span>
        </div>
      </a>

      <nav className="hidden md:block">
        <ul className="flex  text-gray-500">
          <li className="list">
            <a href="#">Home</a>
          </li>
          <li className="list">
            <a href="#about">About</a>
          </li>
          <li className="list">
            <a href="#project">Projects</a>
          </li>
          <li className="list">
            <a href="#resume">Resume</a>
          </li>
          <li className="list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {toggleMenu && (
        <nav className="block md:hidden ">
          <ul className="flex flex-col text-gray-300 mobile-nav">
            <li className="hover:bg-gray-800">
              <a href="#hero">Home</a>
            </li>
            <li className="hover:bg-gray-800">
              <a href="#about">About</a>
            </li>
            <li className="hover:bg-gray-800">
              <a href="#project">Projects</a>
            </li>
            <li className="hover:bg-gray-800">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}

      <button
        onClick={() => SetToggleMenu(!toggleMenu)}
        className="block md:hidden duration-700"
      >
        <Bars3Icon className="text-white h-6 " />{" "}
      </button>
    </header>
  );
};

export default Header;
