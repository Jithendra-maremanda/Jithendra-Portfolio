import React from "react";
import HeroImage from "../assets/heroimage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import '../App.css';
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 mx-auto"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <div className="animated-text text-4xl sm:text-7xl font-bold text-white max-w-sm">
        I'm a <span className="text-4xl sm:text-7xl font-bold text-amber-400"> Jithendra</span>
        </div>
        <div>
        <p className="text-gray-500 py-4 max-w-md">
        I am Jithendra Maremanda, a web developer skilled in React.js, Flutter with Firebase. I have created a portfolio website to showcase my projects and technical expertise, aiming to get hired by leading IT companies. Currently, I am expanding my knowledge in AWS to further enhance my capabilities in the tech industry.
          </p>
        </div>
          <div>
            <Link
              to="Projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-70"
          />
        </div>
      </div>
      </div>
  );
};

export default Home;