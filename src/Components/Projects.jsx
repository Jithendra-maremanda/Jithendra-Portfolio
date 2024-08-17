import React from "react";
import Card from "./Card"; // Import the Card component
import VRStore from "../assets/Portfolio/V R Store.gif";
import BookHub from "../assets/Portfolio/BookHub.gif";
import FoodMunch from "../assets/Portfolio/FoodMunch.gif";
import GuessNumber from "../assets/Portfolio/GuessNumber.gif";
import Todo from "../assets/Portfolio/Todo.gif";
import WikiApp from "../assets/Portfolio/Wiki-App.gif";

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState("WebDev-Projects");

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b  from-gray-800 to-black w-full text-white md:h-90vh py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-styled-tab"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "WebDev-Projects"
                    ? "text-purple-600 border-purple-600"
                    : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
                }`}
                id="WebDev-Projects-tab"
                onClick={() => setActiveTab("WebDev-Projects")}
                type="button"
                role="tab"
                aria-controls="projects"
                aria-selected={activeTab === "WebDev-Projects"}
              >
                WebDev Projects
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "flutter-projects"
                    ? "text-purple-600 border-purple-600"
                    : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
                }`}
                id="flutter-projects-tab"
                onClick={() => setActiveTab("flutter-projects")}
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "flutter-projects"}
              >
                Flutter
              </button>
            </li>
          </ul>
          <div id="default-WebDev-tab-content bg-gradient-to-r from-[#C33764] to-[#1D2671]">
            <TabContent id="WebDev-Projects" activeTab={activeTab}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                <Card image={VRStore} title="VRStore" link1="https://jithendra5651.ccbp.tech/" link2="https://github.com/Jithendra-maremanda/VR-Store" />
                <Card image={BookHub} title="BookHub" link1="https://jithendra2000.ccbp.tech/login" link2="https://github.com/Jithendra-maremanda/Book-Hub" />
                <Card image={FoodMunch} title="FoodMunch" link1="https://jithend3641321.ccbp.tech/" link2="https://github.com/Jithendra-maremanda/Food-Munch" />
                <Card image={GuessNumber} title="GuessNumber" link1="https://jithendra46431.ccbp.tech/" link2="https://github.com/Jithendra-maremanda/Guess-number" />
                <Card image={Todo} title="Todo" link1="https://jithendra54613.ccbp.tech/" link2="https://github.com/Jithendra-maremanda/Todo-App" />
                <Card image={WikiApp} title="WikiApp" link1="https://jithendra45186.ccbp.tech/" link2="https://github.com/Jithendra-maremanda/Wiki-App" />
                {/* Add more Card components as needed */}
              </div>
            </TabContent>
          </div>
          <div id="default-Flutter-tab-content bg-gradient-to-r from-[#C33764] to-[#1D2671]">
            <TabContent id="flutter-projects" activeTab={activeTab}>
              {/* Content for Flutter Tab */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* <Card
                  image="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  title="Noteworthy technology acquisitions 2021"
                  link1="#"
                  link2="#"
                />
                <Card
                  image="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  title="Noteworthy technology acquisitions 2021"
                  link1="#"
                  link2="#"
                /> */}
                {/* Add more Card components as needed */}
              </div>
            </TabContent>
          </div>
        </div>
        <div>
          <div className="flex justify-end p-5">
            <a
              href="https://github.com/Jithendra-maremanda"
              to="Git-hub"
              target="_blank"
              rel="noopener noreferrer"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-end rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              For more Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabContent = ({ id, activeTab, children }) => {
  return (
    <div
      className={`${
        activeTab === id ? "" : "hidden"
      } p-4 rounded-lg bg-gray-50 dark:bg-gray-800 bg-gradient-to-r from-[#C33764] to-[#1D2671]`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      {children}
    </div>
  );
};

export default Projects;
