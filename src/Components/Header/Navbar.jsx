import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import { ThemeContext } from '../../Store/ThemeContext '

function Navbar() {
    const { isDark, handleTheamChange, active, handleSetActive, isOpen, handleMenuBar } = useContext(ThemeContext);

    return (
        <header className="sticky top-0 z-[999] w-full">
            {/* Main Navbar */}
            <nav className={`
                relative 
                w-full 
                ${isDark ? 'bg-gray-900/90' : 'bg-white/90'} 
                backdrop-blur-md
                shadow-lg
                z-[1000]
            `}>
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between relative">
                        {/* Logo */}
                        <Link 
                            to="#" 
                            className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} relative z-[1000]`}
                        >
                            Portfolio
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['home', 'about', 'services', 'project', 'contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item}
                                    name={item}
                                    onClick={handleSetActive}
                                    className={`
                                        transition-colors
                                        duration-300
                                        hover:text-amber-500
                                        ${active === item 
                                            ? 'text-amber-500' 
                                            : isDark ? 'text-gray-300' : 'text-gray-600'
                                        }
                                    `}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            ))}
                        </div>

                        {/* Theme Toggle and Menu */}
                        <div className="flex items-center space-x-4 relative z-[1000]">
                            <button
                                onClick={handleTheamChange}
                                className={`text-2xl ${isDark ? 'text-amber-500' : 'text-amber-600'}`}
                                aria-label="Toggle theme"
                            >
                                {isDark ? <BsBrightnessHighFill /> : <MdDarkMode />}
                            </button>

                            <button
                                onClick={handleMenuBar}
                                className={`
                                    md:hidden 
                                    text-2xl 
                                    relative 
                                    p-2
                                    rounded-full
                                    transition-all
                                    duration-300
                                  
                                `}
                                aria-label="Toggle menu"
                            >
                                {isOpen 
                                    ? <MdCancel className="text-grey-900 " size={24} /> 
                                    : <RxHamburgerMenu className={isDark ? 'text-white' : 'text-gray-900'} size={24} />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Container */}
            <div className={`
                fixed 
                inset-0 
                md:hidden 
                z-[990]
                ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}
                transition-all 
                duration-300
            `}>
                {/* Overlay */}
                <div 
                    className={`
                        absolute 
                        inset-0 
                        bg-black/50 
                        backdrop-blur-sm
                        transition-opacity 
                        duration-300
                    `}
                    onClick={handleMenuBar}
                />

                {/* Menu Panel */}
                <div className={`
                    absolute 
                    top-0 
                    right-0 
                    h-full 
                    w-72
                    ${isDark ? 'bg-gray-900' : 'bg-white'}
                    shadow-xl
                    transform
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    transition-transform 
                    duration-300 
                    ease-in-out
                `}>
                    <div className="flex flex-col p-6 mt-16">
                        {['home', 'about', 'services', 'project', 'contact'].map((item) => (
                            <Link
                                key={item}
                                to={item}
                                name={item}
                                onClick={(e) => {
                                    handleSetActive(e);
                                    handleMenuBar();
                                }}
                                className={`
                                    py-3
                                    text-lg
                                    font-medium
                                    transition-colors
                                    duration-300
                                    hover:text-amber-500
                                    ${active === item 
                                        ? 'text-amber-500' 
                                        : isDark ? 'text-gray-300' : 'text-gray-600'
                                    }
                                `}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;