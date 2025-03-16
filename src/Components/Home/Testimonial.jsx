import React, { useContext } from "react";
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
    role: "Senior software engineer",
    image: vivek,
    text: "Working with him was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional.",
  },
  {
    id: 2,
    name: "Simran Bharti",
    role: "Tech Lead",
    image: simran,
    text: "One of the most dedicated developers I've worked with. Their ability to grasp complex requirements is impressive.",
  },
  {
    id: 3,
    name: "Saurabh Sharma",
    role: "Software Engineer",
    image: saurabh,
    text: "An exceptional team player with strong technical skills. They brought innovative ideas to every project.",
  },
  {
    id: 4,
    name: "Shruthi KK",
    role: "UX Designer",
    image: shruthi,
    text: "Great collaboration skills and attention to design details. They understand both aesthetics and functionality.",
  },
  // {
  //   id: 5,
  //   name: "Lisa Anderson",
  //   role: "Project Manager",
  //   image: "https://randomuser.me/api/portraits/women/5.jpg",
  //   text: "Excellent communication and always delivers on time. A reliable developer who takes initiative.",
  // },
  // {
  //   id: 6,
  //   name: "James Taylor",
  //   role: "Backend Developer",
  //   image: "https://randomuser.me/api/portraits/men/6.jpg",
  //   text: "Strong problem-solving abilities and great system architecture skills. Always writes clean, maintainable code.",
  // },
];

function TestimonialCard({ testimonial, isDark }) {
  return (
    <div className={`${isDark ? 'bg-white/5 hover:bg-white/10 border-white/5' : 'bg-[rgba(180,180,180,0.05)] hover:bg-[rgba(180,180,180,0.1)] border-[rgba(180,180,180,1)]'}
      rounded-xl shadow-xl 
      p-4 sm:p-6 md:p-8 
      w-[220px] sm:w-[320px] md:w-[380px] lg:w-[420px]
      h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]
      flex-shrink-0 mx-auto flex flex-col 
      transition-all duration-300 border
     
      shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}>
      <div className="flex flex-col items-center h-full">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-amber-500/20 rounded-full"></div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                rounded-full object-cover ring-2 ring-amber-500/50"
            />
          </div>
          <div className="text-center space-y-0.5 sm:space-y-1">
            <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {testimonial.name}
            </h3>
            <p className="text-amber-500 font-medium text-xs sm:text-sm md:text-base">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="flex-1 flex flex-col items-center justify-between mt-4 sm:mt-5 md:mt-6">
          <p className={`text-center text-xs sm:text-sm md:text-base lg:text-lg
            ${isDark ? 'text-gray-300' : 'text-gray-600'} 
            line-clamp-4 sm:line-clamp-5 italic`}>
            "{testimonial.text}"
          </p>
          
          {/* Explore Button */}
          <button 
            className="mt-4 sm:mt-5 md:mt-6 group flex items-center gap-2 
              px-4 sm:px-5 py-1.5 sm:py-2 
              rounded-full bg-amber-500/10 hover:bg-amber-500/20 
              transition-all duration-300 hover:scale-105"
            aria-label="Explore more"
          >
            <span className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
              Explore
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-3 h-3 sm:w-4 sm:h-4 ${isDark ? 'text-amber-400' : 'text-amber-600'} 
                transform group-hover:translate-x-1 transition-transform duration-300`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function Testimonial() {
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <section className={`w-full ${theme.themeColor} py-8 md:py-16 overflow-hidden`} id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Team <span className="text-amber-500">Endorsements</span>
          </h2>
        </div>

        {/* Testimonial Cards Scrolling Container */}
        <div className="max-w-7xl mx-auto relative">
          {/* Gradient Overlays */}
       
          
          {/* Scrolling Content */}
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll">
              {/* First set of cards */}
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="px-2 sm:px-3 md:px-4">
                  <TestimonialCard testimonial={testimonial} isDark={isDark} />
                </div>
              ))}
              {/* Second set */}
              {TESTIMONIALS.map((testimonial) => (
                <div key={`${testimonial.id}-duplicate`} className="px-2 sm:px-3 md:px-4">
                  <TestimonialCard testimonial={testimonial} isDark={isDark} />
                </div>
              ))}
              {/* Third set */}
              {TESTIMONIALS.map((testimonial) => (
                <div key={`${testimonial.id}-triplicate`} className="px-2 sm:px-3 md:px-4">
                  <TestimonialCard testimonial={testimonial} isDark={isDark} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

// Add these animations to your global CSS (src/index.css)
/*
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes pulse-subtle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 2s ease-in-out infinite;
}
*/
