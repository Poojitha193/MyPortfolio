import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a passionate computer science engineer graduating in the year 2024, seeking a dynamic role to apply expertise and contribute to innovative projects in a technology-driven environment. Skilled in utilizing programming languages such as Java, C, HTML, CSS, JavaScript for efficient project development and collaboration. Strong understanding on database management systems and SQL.
        </p>
        <br />
 
        <p className="text-xl">
        Also, I have great interest in sports and I have learned many important life lessons from it, one would be that communication is important before, during and after the game. I like to be creative and have a passion for drawing. I am enthusiastic person with high optimum and leadership skills.
        </p>
      </div>
    </div>
  );
};

export default About;
