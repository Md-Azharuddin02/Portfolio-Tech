import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Store/ThemeContext ";
import img from "../../assets/images/img.png";
// Data Configuration
const ABOUT_DATA = {
  education: [
    {
      year: "2019 - 2023",
      title: "Bachelor of Technology",
      institution: "Maharishi Markandeshwar University",
      description:
        "Computer Science and Engineering",
    },
    {
      year: "2016 - 2018",
      title: "Higher Secondary",
      institution: "Marwari College",
      description: "Science with Computer Science",
    },
  ],
  experience: [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      Organization: "M&S Consulting Noida",
      description:
        "Developing and maintaining web applications using React, Node.js, and MongoDB",
    },
    {
      year: "2022 - 2023",
      title: "Software Engineering Virtual Experience",
      institution: "JPMorgan Chase & Co.",
      description:
        "Worked on responsive web design and React-based applications",
    },
  ],
};

// Reusable Components
const TabButton = ({ isActive, onClick, children, isDark }) => (
  <button
    onClick={onClick}
    className={`
            px-6 py-3
            rounded-lg
            font-medium
            text-base
            transition-all
            duration-300
            ${
              isActive
                ? "bg-amber-500 text-white shadow-lg transform scale-105"
                : isDark
                ? "bg-gray-800/40 text-gray-200 hover:bg-gray-700/50 hover:text-white"
                : "bg-white/30 text-gray-800 hover:bg-white/40 hover:text-gray-900"
            }
            hover:shadow-md
            hover:transform
            hover:scale-105
        `}
  >
    {children}
  </button>
);

const InfoCard = ({ item, isDark, className }) => (
  <div
    className={`
            p-6
            rounded-xl
            transition-all
            duration-300
            ${
              isDark
                ? "bg-gray-800/30 hover:bg-gray-800/40 border-gray-700/30"
                : "bg-white/20 hover:bg-white/30 border-white/30"
            }
            border
            hover:shadow-xl
            hover:transform
            hover:scale-[1.02]
            ${className}
        `}
  >
    <div className="flex justify-between items-start mb-3">
      <h3
        className={`font-bold text-lg ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {item.title}
      </h3>
      <span className="text-amber-500 font-semibold">{item.year}</span>
    </div>
    <p
      className={`text-base font-medium ${
        isDark ? "text-gray-300" : "text-gray-700"
      }`}
    >
      {item.institution}
    </p>
    <p
      className={`text-base mt-2 leading-relaxed ${
        isDark ? "text-gray-400" : "text-gray-600"
      }`}
    >
      {item.description}
    </p>
  </div>
);

function About() {
  const [activeTab, setActiveTab] = useState("education");
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <div className={`w-full  overflow-hidden`}>
      <section className="py-16 lg:py-20 relative" id="about">
        {/* Glass Background Effect */}
        <div className="absolute inset-0 backdrop-blur-xl  pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Title */}
          <div className="text-center mb-12 lg:mb-5">
            <h2
              className={`text-4xl lg:text-5xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              About <span className="text-amber-500">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div
            className={`
                        max-w-6xl mx-auto
                        rounded-2xl
                        p-8
                     
                        ${
                          isDark
                            ? "bg-gray-900/40 shadow-black/20"
                            : "bg-white/30 shadow-gray-200/30"
                        }
                        shadow-xl
                        border
                        ${isDark ? "border-gray-700/30" : "border-white/40"}
                    `}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Side - Image */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="relative w-72 aspect-[3/4] group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl group-hover:blur-3xl transition-all duration-500" />
                  <img
                    src={img}
                    alt="About Me"
                    className="relative w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-[1.02] shadow-xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-amber-500/30 group-hover:ring-amber-500/50 transition-all duration-500" />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-8">
                {/* Tab Buttons */}
                <div className="flex justify-center lg:justify-start gap-6">
                  <TabButton
                    isActive={activeTab === "education"}
                    onClick={() => setActiveTab("education")}
                    isDark={isDark}
                  >
                    Education
                  </TabButton>
                  <TabButton
                    isActive={activeTab === "experience"}
                    onClick={() => setActiveTab("experience")}
                    isDark={isDark}
                  >
                    Experience
                  </TabButton>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {ABOUT_DATA[activeTab].map((item, index) => (
                    <InfoCard
                      key={index}
                      item={item}
                      isDark={isDark}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
