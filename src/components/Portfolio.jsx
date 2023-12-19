import React from "react";
import bankManagementSystem from "../assets/portfolio/bankManagementSystem.png";
import capchaGenerator from "../assets/portfolio/capchaGenerator.png";
import myPortfolio from "../assets/portfolio/myPortfolio.png";
import carSharing from "../assets/portfolio/carSharing.png";
import rythuSeva from "../assets/portfolio/rythuSeva.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: rythuSeva,
      url: "https://github.com/Poojitha193/Rythu-Seva.git",
      href: "https://poojitha193.github.io/Rythu-Seva/"
    },
    {
      id: 2,
      src: myPortfolio,
      url: "https://github.com/Poojitha193/myPortfolio.git",
      href: "https://poojitha193.github.io/myPortfolio/"
    },
    {
      id: 3,
      src: carSharing,
      url: "https://github.com/Poojitha193/CarPooling.git",
      href: "https://github.com/Poojitha193/CarPooling.git",
    },
    {
      id: 4,
      src: bankManagementSystem,
      url: "https://github.com/Poojitha193/BankManagementC.git",
      href: "https://github.com/Poojitha193/BankManagementC.git"
    },
    {
      id: 5,
      src: capchaGenerator,
      url: "https://github.com/Poojitha193/CaptchaGenerator.git",
      href: "https://github.com/Poojitha193/CaptchaGenerator.git"
    } 
  ];

  const handleCode = (url) => {
    window.open(url, '_blank'); // '_blank' opens the link in a new tab
  };

  const handleDemo = (href) => {
    window.open(href, '_blank'); // '_blank' opens the link in a new tab
  };
  
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
        <p className="py-6"> </p>
        <p className="py-6"> </p>
        <p className="py-6"> </p>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio 
          </p>
          <p className="py-4">Check out some of my works Here..</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,url,href}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick={() => handleCode(url)}>
                  Code
                </button>
                <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick={() => handleDemo(href)}>
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;