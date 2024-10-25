import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1F2937] text-white">
            <div className='py-12'>
                <h2 className="text-3xl font-bold text-center">
                    Emayet Hossen
                </h2>
                <p className="font-semibold text-center">Frontend Developer</p>
                <ul className="flex justify-center my-10 gap-10 font-semibold">
                    <li>
                        <Link className="hover:font-bold" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:font-bold" to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link className="hover:font-bold" to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className="hover:font-bold" to="/contact">Contact</Link>
                    </li>
                </ul>

                <ul className="flex justify-center my-10 gap-10 text-3xl">
                    <Link to='https://www.linkedin.com/in/emayethossen' target='_blank'><FaLinkedin className='text-sky-700' /></Link>
                    <Link to='https://twitter.com/emayethossen' target='_blank'><FaTwitter className='text-sky-500' /></Link>
                    <Link to='https://github.com/emayethossen' target='_blank'><FaGithub className='text-gray-600' /></Link>
                    <Link to='https://www.instagram.com/emayethossen' target='_blank'><FaInstagram className='text-pink-400' /></Link>
                </ul>
                <span className="block text-center font-semibold"> &#169; Copyright Emayet Hossen. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
