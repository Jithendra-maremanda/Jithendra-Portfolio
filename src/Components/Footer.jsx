import React from 'react';
import logo from '../assets/jithendra-logo.jpeg'
import {FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { BsFillPersonLinesFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div name='footer'>
    <footer className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-10 px-4 border-t-4 border-gray-600">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/4 p-4">
          <img src={logo} alt="Logo" className="mb-8 w-20" />
          <p>Hello Visiter,Im Jithendra Maremanda,a web developer with expertise in ReactJs ,Flutter I created a portfolio to showcase my skills and projects ,aiming to secure a role in a leading IT Company.</p>
        </div>
        <div className="w-full md:w-1/6 p-4">
          <h3 className="relative mb-5">Home<div className="absolute top-6 left-0 w-full h-1 bg-gray-400"></div></h3>
          <p>Salampura, Vidyanagar,</p>
          <p>Karimnagar</p>
          <p>Telangana, PIN 505001, India</p>
          <p className="border-b border-gray-400 my-4">jithendramaremanda@gmail.com</p>
          <p>+91 7075114405</p>
        </div>
        <div className="w-full md:w-1/6 p-4">
          <h3 className="relative mb-10">Links<div className="absolute top-6 left-0 w-full h-1 bg-gray-400"></div></h3>
          <ul>
            <li className="mb-3"><a href="#">Home</a></li>
            <li className="mb-3"><a href="#">About</a></li>
            <li className="mb-3"><a href="#">My Journey</a></li>
            <li className="mb-3"><a href="#">Projects</a></li>
            <li className="mb-3"><a href="#">Skills</a></li>
            <li className="mb-3"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 p-4">
          <h3 className="relative mb-10">Subscribe<div className="absolute top-6 left-0 w-full h-1 bg-gray-400"></div></h3>
          <form className="flex items-center border-b border-gray-400 pb-4 mb-8">
            <FaEnvelope className="text-lg mr-2" />
            <input type="email" placeholder="Enter your email" className="w-full bg-transparent text-gray-300 focus:outline-none" />
            <button type="submit" className="focus:outline-none">
              <FaArrowRight className="text-lg text-gray-300" />
            </button>
          </form>
          <div className="flex space-x-4">
            <a className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer" href='https://www.linkedin.com/in/jithendra-maremanda-761903230/'>
               <FaLinkedin/>
            </a>
            <a className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer " href='https://github.com/Jithendra-maremanda'>
              <FaGithub />
            </a>
            <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer">
              <HiOutlineMail />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-400" />
      <p className="text-center">© 2024 jithendra maremanda. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default Footer;
