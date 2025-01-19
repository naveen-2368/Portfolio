import Frontimg from "../assets/front.png";

import { IoMdMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
     const config = {
    subtitle: " Full stack Devoloper",
      };
  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row px-5 py-56 bg-secondary justify-center font-hero-font  "
    >
      <div className="md:w-1/2 flex flex-col py-5 ">

        <h1 className="text-white text-5xl">
          Hi , <br />
          Im Naveenkumar <br />
          <p className="text-3xl py-6 text-gray-400 gradient-text ">
            {config.subtitle}
          </p>
        </h1>

        <div className="flex gap-3 ">
          <a
            href="https://naveenkumarm02123@gmail.com"
            className="hover:text-yellow-400"
          >
            <IoMdMail size={23} />
          </a>
          <a
            href="https://www.instagram.com/__naveenkumar__nk/"
            target="_blank"
            className="hover:text-yellow-400"
          >
            <FaInstagramSquare size={23} />
          </a>
          <a

            href="https://www.linkedin.com/in/naveenkumar-m-9275a5271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-yellow-400"
          >
            <FaLinkedin size={23} />
          </a>
          <a
            href="https://github.com/naveen-2368"
            className="hover:text-yellow-400"
          >
            <FaGithub size={23} />
          </a>
        </div>
        
      </div>

      <img className="md:w-1/3 " src={Frontimg} />
    </div>
  );
};

export default Hero;
