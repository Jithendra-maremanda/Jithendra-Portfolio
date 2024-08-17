import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-98% bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-10">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-10">
        I am currently an Associate at Mashreq Global Services with a strong foundation in web development and a growing passion for cloud technologies. My skill set includes React.js, Flutter with Firebase, Python, building the user-friendly applications.
        </p>

        <br />

        <p className="text-xl">
        🛠 Technical Skills:
React.js: Crafting interactive and efficient web applications.
Flutter with Firebase: Developing cross-platform apps with real-time database capabilities.
        </p>
        <br />

<p className="text-xl">
📈 Current Focus:
Deepening my knowledge in AWS to enhance my ability to design scalable and reliable cloud solutions.
Explore my portfolio and GitHub to see some of the exciting projects I've worked on. I'm always eager to connect with fellow professionals and explore new opportunities!
</p>
      </div>
    </div>
  );
};

export default About;