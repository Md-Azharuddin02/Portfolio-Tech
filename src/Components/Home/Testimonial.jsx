import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Store/ThemeContext ";
import vivek from "../../assets/people/Vivek.jfif";
import saurabh from "../../assets/people/saurabh.jfif";
import simran from "../../assets/people/Simran.jfif";
import shruthi from "../../assets/people/one.jpg";

// Testimonial data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Vivek Kumar Mishra",
    role: "Senior software engineer at M&S Consulting",
    image: vivek,
    text: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional.",
    delay: "0",
  },
  {
    id: 2,
    name: "Simran Bharti",
    role: "Tech Lead",
    image: simran,
    text: "One of the most dedicated developers I've worked with. Their ability to grasp complex requirements is impressive.",
    delay: "1000",
  },
  {
    id: 3,
    name: "Saurabh Sharma",
    role: "Software Engineer",
    image: saurabh,
    text: "An exceptional team player with strong technical skills. They brought innovative ideas to every project.",
    delay: "2000",
  },
  {
    id: 4,
    name: "Shruthi KK",
    role: "UX Designer",
    image: shruthi,
    text: "Great collaboration skills and attention to design details. They understand both aesthetics and functionality.",
    delay: "3000",
  },
  // {
  //   id: 5,
  //   name: "Lisa Anderson",
  //   role: "Project Manager",
  //   image: "https://randomuser.me/api/portraits/women/5.jpg",
  //   text: "Excellent communication and always delivers on time. A reliable developer who takes initiative.",
  //   delay: "4000",
  // },
  // {
  //   id: 6,
  //   name: "James Taylor",
  //   role: "Backend Developer",
  //   image: "https://randomuser.me/api/portraits/men/6.jpg",
  //   text: "Strong problem-solving abilities and great system architecture skills. Always writes clean, maintainable code.",
  //   delay: "5000",
  // },
];

function TestimonialCard({ testimonial, isDark, isCenter, position }) {
  const getPositionClasses = () => {
    switch (position) {
      case "left":
        return "translate-x-8 -translate-y-4 scale-75 opacity-40 rotate-2";
      case "right":
        return "-translate-x-8 -translate-y-4 scale-75 opacity-40 -rotate-2";
      default: // center
        return "translate-y-0 scale-100 opacity-100 rotate-0";
    }
  };

  return (
    <div
      className={`
        flex-shrink-0
        transform 
        transition-all
        duration-700
        ease-in-out
        group
        ${isCenter ? "w-[450px] z-20" : "w-[300px] z-10"}
        ${getPositionClasses()}
      `}
    >
      {/* Card with glass effect */}
      <div
        className={`
        relative
        overflow-hidden
        rounded-2xl
        transition-all
        duration-700
        hover:shadow-2xl
        ${isDark ? "shadow-black/20" : "shadow-gray-200/20"}
      `}
      >
        {/* Glass background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-amber-500/[0.05]" />
        <div className="absolute inset-0 border border-white/10" />

        {/* Hover effect overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-amber-500/10 to-transparent" />

        {/* Content */}
        <div className="relative p-8">
          {/* Profile section */}
          <div className="flex flex-col items-center gap-4 mb-6">
            {/* Image with glass effect container */}
            <div
              className={`
              relative
              rounded-full
              p-1
              transition-transform
              duration-700
              transform
              ${isCenter ? "scale-100" : "scale-95"}
              bg-gradient-to-br
              from-amber-500/20
              to-transparent
              backdrop-blur-sm
            `}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent animate-pulse" />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={`
                  relative
                  rounded-full 
                  object-cover
                  transition-all 
                  duration-700
                  ring-2
                  ring-white/20
                  group-hover:ring-amber-500/30
                  ${isCenter ? "w-28 h-28" : "w-20 h-20"}
                `}
              />
            </div>

            {/* Text content */}
            <div className="text-center space-y-2">
              <h3
                className={`
                font-bold
                transition-all 
                duration-700
                ${isCenter ? "text-2xl" : "text-xl"}
                ${isDark ? "text-white/90" : "text-gray-900/90"}
              `}
              >
                {testimonial.name}
              </h3>
              <p
                className={`
                font-medium
                transition-all 
                duration-700
                ${isDark ? "text-amber-400/80" : "text-amber-600/80"}
                ${isCenter ? "text-lg" : "text-base"}
              `}
              >
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* Testimonial text */}
          <div className="relative">
            {/* Quote marks */}
            <div className="absolute -top-4 -left-2 text-4xl opacity-20 text-amber-500">
              "
            </div>
            <div className="absolute -bottom-4 -right-2 text-4xl opacity-20 text-amber-500">
              "
            </div>

            <p
              className={`
              text-center
              transition-all 
              duration-700
              leading-relaxed
              ${isDark ? "text-gray-300/80" : "text-gray-700/80"}
              ${isCenter ? "text-base" : "text-sm"}
            `}
            >
              {testimonial.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonial() {
  const { theme, isDark } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getVisibleTestimonials = () => {
    const lastIndex = TESTIMONIALS.length - 1;
    const prev = currentIndex === 0 ? lastIndex : currentIndex - 1;
    const next = currentIndex === lastIndex ? 0 : currentIndex + 1;
    return [
      { index: prev, position: "left" },
      { index: currentIndex, position: "center" },
      { index: next, position: "right" },
    ];
  };

  useEffect(() => {
    if (isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <section
      className={`w-full ${theme.themeColor} overflow-hidden py-16 lg:py-20 relative`}
      id="testimonials"
    >
      {/* Background glass effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-5 relative">
          <div className="absolute inset-0 -top-8 -bottom-8 backdrop-blur-sm bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl" />
          <div className="relative">
            <h2
              className={`text-4xl lg:text-5xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
               <span className="text-amber-500">Testimonials</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-16 py-16">
            {getVisibleTestimonials().map(({ index, position }) => (
              <div
                key={TESTIMONIALS[index].id}
                className="transition-all duration-700 ease-in-out transform"
                onClick={() => {
                  if (!isTransitioning && position !== "center") {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 700);
                  }
                }}
              >
                <TestimonialCard
                  testimonial={TESTIMONIALS[index]}
                  isDark={isDark}
                  isCenter={position === "center"}
                  position={position}
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 700);
                  }
                }}
                className={`
                  w-2 h-2 rounded-full transition-all duration-700 ease-in-out
                  ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-amber-400 to-amber-600 w-8"
                      : isDark
                      ? "bg-gray-600/50 hover:bg-gray-500/70"
                      : "bg-gray-300/50 hover:bg-gray-400/70"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
