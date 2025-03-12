import React, { useContext } from "react";
import projects from "./projectsData";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ThemeContext } from "../../Store/ThemeContext ";

function Project() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${theme.themeColor} py-8 sm:py-12 md:py-8 lg:py-20`}
      id="project"
    >
     <div className="text-center mb-10 sm:mb-12 lg:mb-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="text-amber-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 
                    gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-10"
        >
          {projects.map((project, index) => (
            <article
              key={index}
              className="relative rounded-2xl shadow-lg overflow-hidden group
                        w-full max-w-[20rem] sm:max-w-sm mx-auto"
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform 
                           duration-500 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div
                className="absolute inset-0
                          bg-gradient-to-t from-yellow-600/0 via-yellow-500/0 to-yellow-400/0
                          group-hover:from-yellow-400/90 group-hover:via-yellow-400/70 
                          group-hover:to-yellow-400/50
                          flex flex-col justify-end items-center
                         
                          translate-y-full group-hover:translate-y-0 
                          transition-all duration-500 ease-in-out"
              >
                <div className="text-center  sm:space-y-4">
                  <h4
                    className="text-lg sm:text-xl md:text-2xl font-bold text-black 
                              leading-tight"
                  >
                    {project.name}
                  </h4>
                  <p
                    className="text-xs sm:text-sm md:text-base text-black/90
                              line-clamp-3 px-2 leading-relaxed"
                  >
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    className="inline-flex justify-center items-center 
                              w-10 h-6 sm:w-12 sm:h-8 md:w-14 md:h-14
                              bg-[var(--text-color)] rounded-full 
                              hover:scale-110 transition-transform duration-300
                              text-black"
                    aria-label={`Visit ${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="sm:w-6 sm:h-6 sm:w-3 sm:h-5 lg:w-11 " />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
