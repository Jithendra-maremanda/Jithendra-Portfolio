import React from 'react';

const timelineData = [
  { year: "2016", title: "SSC", description: "Paramita Learners' Foundation,Karimnagar,TS" },
  { year: "2018", title: "Intermediate", description: "Sri Gayatri junior college,Karimnagar,TS" },
  { year: "2022", title: "Bachelor of Technology", description: "SASI Institute of Technology & Engineering,Tadepalligudem, West Godavari,AP" },
  { year: "2022", title: "Intern as Front-End developer", description: "Atelia software company,Hyderabad,TS" },
  { year: "2023", title: "Intern as Software Trainee ", description: "LegalCraft Solutions,Hyderabad,TS" },
  { year: "2024", title: "Associate", description: "Mashreq Global Network - India,Bengaluru, Karnataka" },
];

const TimelineItem = ({ year, title, description, isOdd }) => (
  <div className={`mb-10 w-full relative ${isOdd ? 'pr-8 text-right' : 'pl-8 text-left'} md:w-1/2 md:px-4`}>
    <div className="bg-gray-700 p-6 rounded-md relative">
      <div className="text-yellow-500 text-lg mb-2">{year}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
    </div>
    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-gray-800 md:left-auto md:right-0 md:transform-none"></div>
  </div>
);

const Timeline = () => {
  return (
    <div
    name="Timeline"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white ">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <section className="py-4 p-5">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Journey 
          </p>
        </div>
      <div className="container mx-auto flex flex-wrap relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800"></div>
        {timelineData.map((item, index) => (
          <TimelineItem 
            key={index} 
            year={item.year} 
            title={item.title} 
            description={item.description} 
            isOdd={index % 2 === 0}
          />
        ))}
      </div>
      </div>
    </section>
    </div>
  </div>  
  );
};

export default Timeline;
