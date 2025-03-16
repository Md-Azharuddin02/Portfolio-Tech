import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../Store/ThemeContext ";
import { gsap } from "gsap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import img from "../../assets/images/img.png";

// Social media configuration
const SOCIAL_LINKS = [
  { Icon: FaFacebook, url: "https://www.facebook.com/prince.sainger02" },
  { Icon: FaInstagram, url: "https://www.instagram.com/__clay__02" },
  { Icon: FaTwitter, url: "https://x.com/Md_Azharuddin02" },
  { Icon: FaLinkedin, url: "https://www.linkedin.com/in/mdazharuddin02/" },
  { Icon: FaGithub, url: "https://github.com/Md-Azharuddin02" },
];

const SOCIAL_ICON_STYLES = `
  text-2xl sm:text-3xl
  transition-transform duration-300 ease-in-out
  group-hover:scale-110
  group-hover:text-amber-400
`;

const BUTTON_STYLES = `
  bg-amber-500
  text-white
  px-6 sm:px-8 
  py-3 sm:py-4
  rounded-lg
  text-base sm:text-lg 
  font-medium
  transform
  transition-all duration-300
  hover:bg-amber-600
  hover:scale-[1.02]
  hover:-translate-y-1
  focus:outline-none 
  focus:ring-2
  focus:ring-amber-500 
  focus:ring-offset-2
  shadow-lg 
  hover:shadow-xl
  active:scale-[0.98]
`;

function HomePageHero() {
  const { theme, isDark } = useContext(ThemeContext);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const socialIconsRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Initial setup - hide elements
    gsap.set(imageRef.current, { x: 100, opacity: 0 });
    gsap.set(contentRef.current.children, { y: 30, opacity: 0 });
    gsap.set(socialIconsRef.current.children, { scale: 0, opacity: 0 });
    gsap.set(buttonRef.current, { y: 20, opacity: 0 });

    // Create timeline for animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate content
    tl.to(contentRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
    })
    // Animate image
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
    }, "-=0.5")
    // Animate social icons
    .to(socialIconsRef.current.children, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
    }, "-=0.5")
    // Animate button
    .to(buttonRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    }, "-=0.3");

    // Cleanup
    return () => tl.kill();
  }, []);

  const textColorClass = isDark ? "text-gray-200" : "text-gray-700";
  const headingColorClass = isDark ? "text-white" : "text-gray-900";
  const accentColorClass = isDark ? "text-amber-500" : "text-amber-600";
  const descColorClass = isDark ? "text-gray-300" : "text-gray-600";

  return (
    <section className={`flex items-center w-full ${theme.themeColor}`}>
      <div className="w-full py-5 sm:py-5 lg:py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 md:space-y-8 text-center md:text-left" ref={contentRef}>
                <div className="space-y-3 md:space-y-4">
                  <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${textColorClass} tracking-wide`}>
                    Hello, It's Me
                  </h1>
                  <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold ${headingColorClass} leading-tight`}>
                    Md Azharuddin
                  </h2>
                  <p className={`text-lg sm:text-xl lg:text-2xl font-medium ${accentColorClass}`}>
                    A Full Stack Developer
                  </p>
                </div>

                <p className={`text-base sm:text-lg max-w-2xl mx-auto md:mx-0 ${descColorClass} leading-relaxed`}>
                  I am passionate about building excellent software that improves the lives of those around me.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start gap-4 sm:gap-6" ref={socialIconsRef}>
                  {SOCIAL_LINKS.map(({ Icon, url }, index) => (
                    <a
                      key={index}
                      href={url}
                      className="group relative p-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${Icon.name.replace('Fa', '')}`}
                    >
                      <Icon className={`${SOCIAL_ICON_STYLES} ${accentColorClass}`} />
                      <span className="absolute -inset-2 bg-amber-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </a>
                  ))}
                </div>

                {/* Download CV Button */}
                <div className="pt-2" ref={buttonRef}>
                  <button className={BUTTON_STYLES}>
                    Download CV
                  </button>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative mt-8 md:mt-0" ref={imageRef}>
                <div className="relative max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-2xl animate-pulse" />
                  <div className="relative group">
                    <img
                      src={img}
                      alt="Md Azharuddin Profile"
                      className="w-full h-auto object-cover rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-[1.02] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePageHero;
