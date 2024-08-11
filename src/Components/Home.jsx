import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';

const Home = () => {
  const AnimatedText = (
    <Typewriter
      words={[' Jithendra', ' DevOps Enthusiast', ' Cloud Explorer', 'SRE Aspirant']}
      loop={true}
      cursor
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 mx-auto"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        {/* LEFT SIDE - Text */}
        <div className="flex flex-col justify-center h-full pt-20">
          <div className="animated-text text-4xl sm:text-7xl font-bold text-white max-w-sm">
            I'm <span className="text-4xl sm:text-7xl font-bold text-teal-300">
              {AnimatedText}
            </span>
          </div>

          <p className="text-gray-500 py-4 max-w-md">
            I’m Jithendra Maremanda, currently at Mashreq Global Services with 1.7+ years of experience in banking and tech.
            Passionate about DevOps, Cloud Engineering, and automation, I work with AWS, GitHub Actions, Docker, and Linux to build scalable, modern infrastructure.
            I'm open to DevOps, Cloud, or SRE roles—let’s build something great together!
          </p>

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

        {/* RIGHT SIDE - Avatar Image */}
        <div className="pt-20 md:pt-0">
          <img
            src={HeroImage}
            alt="Jithendra Avatar"
            className="rounded-full mx-auto w-80 h-80 object-cover border-4 border-teal-400 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
