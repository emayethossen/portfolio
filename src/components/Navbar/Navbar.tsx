import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 dark:bg-red-400">
            <div className='lg:w-5/6 mx-auto'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between">
                            <div className="flex-shrink-0 flex z-10">
                                <Link to='/'><span className="text-white text-3xl font-semibold uppercase head-logo">Emayet</span></Link>
                            </div>
                            <div className="hidden ml-10 lg:flex uppercase  space-x-4">
                                <Link to='/' className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link to='/projects' className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                                <Link to='/blogs' className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                                <Link to='/contact' className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>

                            </div>

                        </div>
                        <div className='hidden lg:flex'>
                            <ThemeSwitcher />
                        </div>
                        <div className="-mr-2 flex gap-4 md:hidden z-10">
                            <ThemeSwitcher />
                            <button
                                onClick={toggleNavbar}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden" id="mobile-menu">
                        <div className="px-2 sm:px-3 nav-menu text-center flex flex-col justify-start w-full absolute top-0 left-0 dark:text-white items-stretch nav-menu uppercase text-black py-20 space-y-8 text-2xl">
                            <Link to='/' className="flex items-center justify-center gap-1"><FaHome />Home</Link>
                            <Link to='/blogs' className="flex items-center justify-center gap-1"><FaHome />Blog</Link>
                            <Link to='/projects' className="flex items-center justify-center gap-1"><AiFillProject />Projects</Link>
                            <Link to='/contact' className="flex items-center justify-center gap-1"><IoMdContact />Contact</Link>
                        </div>
                    </div>
                )
                }
            </div>
        </nav >
    );
};

export default Navbar;
