import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          
          <span className="ml-2 hidden lg:inline-block group-hover:inline-block">LinkedIn</span>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jithendra-maremanda-761903230/",
      style: "rounded-t-md",
    },
    {
      id: 2,
      child: (
        <>
          
          <span className="ml-2 hidden lg:inline-block group-hover:inline-block">GitHub</span>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Jithendra-maremanda",
    },
    {
      id: 3,
      child: (
        <>
          
          <span className="ml-2 hidden lg:inline-block group-hover:inline-block">Mail</span>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jithendramaremanda@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          
          <span className="ml-2 hidden lg:inline-block group-hover:inline-block">Resume</span>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1RPkgbiHEifrfQcnTrROeeVZ-ofTXWGE5/view?usp=drive_link",
      style: "rounded-b-md",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full lg:w-auto lg:top-[35%] lg:left-0 flex justify-center lg:flex-col lg:items-center lg:justify-start">
      <ul className="flex lg:flex-col">
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "group flex justify-between items-center w-14 h-14 lg:w-40 px-4 bg-gray-500 m-2 lg:m-0 lg:ml-[-100px] lg:hover:ml-[-10px] hover:translate-y-[-10px] hover:rounded-md duration-300 transform lg:duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-center lg:justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SocialLinks;