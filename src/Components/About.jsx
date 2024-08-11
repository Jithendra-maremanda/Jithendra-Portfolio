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
        🚀 Hi, I’m Jithendra Maremanda — a tech enthusiast working at Mashreq Global Services with over 1.7 years of experience at the intersection of banking and technology.

🌩️ I'm deeply passionate about DevOps, cloud computing, and crafting automated, scalable systems that drive efficiency and innovation.
        </p>

        <br />

        <p className="text-xl">
        🛠️ Tech Stack & Tools I Work With:
Amazon Web Services (AWS): EC2, S3, IAM, CloudWatch, Lambda

CI/CD Pipelines: GitHub Actions

Containers: Docker

Scripting & Version Control: Linux, Shell Scripting, Git
        </p>
        <br />

<p className="text-xl">
✨ Through hands-on projects and continuous upskilling, I'm actively building a strong foundation in DevOps and Cloud Engineering. I love solving real-world problems by implementing automation, monitoring, and robust deployment pipelines.
</p>
      </div>
    </div>
  );
};

export default About;