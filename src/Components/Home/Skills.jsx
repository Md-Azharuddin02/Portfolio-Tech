import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "../../Store/ThemeContext ";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGit,
  FaJava,
  FaAws,
} from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
// import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiJest,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";


// Reusable style configurations
const STYLES = {
  container: (isDark) => `
    container mx-auto 
    grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
    gap-4 p-4 sm:p-6
    rounded-xl
    transition-all duration-300
    ${isDark
      ? 'bg-gray-900/70 bg-gradient-to-br from-gray-900/70 to-gray-800/70'
      : 'bg-white/60 bg-gradient-to-br from-white/60 via-white/30 to-gray-50/40'
    }
   
    shadow-lg
    border
    ${isDark ? 'border-gray-700/30' : 'border-white/60'}
  `,
  skillCard: (isDark) => `
    flex flex-col items-center justify-center
    p-3 sm:p-4
    rounded-lg
    transform transition-all duration-300
    group
    cursor-pointer
    hover:scale-105 sm:hover:scale-110
    hover:shadow-lg
    ${isDark
      ? 'bg-gray-800/30 hover:bg-gray-800/50'
      : 'bg-white/30 hover:bg-white/50'
    }
    border border-transparent
    ${isDark
      ? 'hover:border-gray-700/30'
      : 'hover:border-white/60'
    }
  `,
  icon: (color) => `
    text-2xl sm:text-3xl md:text-4xl ${color}
    transition-all duration-300
    group-hover:scale-110
    group-hover:rotate-6
    animate-bounce-subtle
  `,
  label: (isDark) => `
    text-center mt-2
    text-xs sm:text-sm
    font-medium
    transition-colors duration-300
    group-hover:text-amber-500
    ${isDark ? 'text-gray-300' : 'text-gray-700'}
  `,
  sectionTitle: (isDark) => `
    text-3xl sm:text-4xl lg:text-5xl 
    font-bold 
    mb-4
    ${isDark ? 'text-white' : 'text-gray-900'}
  `
};

// Skill configuration with categories
const SKILL_CATEGORIES = {
  frontend: [
    { Icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { Icon: FaReact, name: "React", color: "text-blue-400" },
    { Icon: TbBrandRedux, name: "Redux", color: "text-purple-500" },
    // { Icon: RiNextjsFill, name: "Next.js", color: "text-gray-900 dark:text-white" },
    // { Icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-teal-500" },
    { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500" },
    { Icon: SiJest, name: "Jest", color: "text-red-500" },
  ],
  backend: [
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { Icon: SiExpress, name: "Express", color: "text-gray-400" },
    { Icon: FaJava, name: "Java", color: "text-red-600" },
    { Icon: SiMysql, name: "MySQL", color: "text-yellow-500" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { Icon: SiRedis, name: "Redis", color: "text-red-500" },
  ],
  devops: [
    { Icon: FaGit, name: "Git", color: "text-orange-500" },
    { Icon: FaAws, name: "AWS", color: "text-blue-300" },
  ],
};

const SkillCard = ({ skill, isDark }) => (
  <div className={STYLES.skillCard(isDark)} role="listitem">
    <skill.Icon className={STYLES.icon(skill.color)} aria-hidden="true" />
    <span className={STYLES.label(isDark)}>{skill.name}</span>
  </div>
);

SkillCard.propTypes = {
  skill: PropTypes.shape({
    Icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  isDark: PropTypes.bool.isRequired,
};

const Skills = () => {
  const { theme, isDark } = useContext(ThemeContext);
  const allSkills = Object.values(SKILL_CATEGORIES).flat();

  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 transition-colors duration-200 ${theme.themeColor}`}
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 id="skills-title" className={STYLES.sectionTitle(isDark)}>
            My <span className="text-amber-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
        <div 
          className={STYLES.container(isDark)}
          role="list"
          aria-label="Skills grid"
        >
          {allSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
