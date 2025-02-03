import { IoMdMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div id="footer" className="py-5 bg-header text-center text-gray-200 font-hero-font">
      &copy; nk2025
      <div className="flex gap-2 justify-center pt-3 pb-2 ">
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
  );
};

export default Footer;
