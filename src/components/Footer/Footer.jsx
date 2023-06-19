import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className='my-12'>
                <h2 className="text-3xl font-bold text-center">
                    Emayet Hossen
                </h2>
                <p className="font-semibold text-center">Frontend Developer</p>
                <ul className="flex justify-center my-10 gap-10 font-semibold">
                    <li>
                        <Link className="hover:font-bold">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:font-bold">Skills</Link>
                    </li>
                    <li>
                        <Link className="hover:font-bold">Projects</Link>
                    </li>
                    <li>
                        <Link className="hover:font-bold">Contact</Link>
                    </li>
                </ul>

                <ul className="flex justify-center my-10 gap-10 text-3xl">
                    <Link className="text-gray-600" to='/' target='_blank'><FaGithub /></Link>
                    <Link className="text-pink-600" to='/' target='_blank'><FaInstagram /></Link>
                    <Link className="text-sky-500" to='/' target='_blank'><FaTwitter /></Link>
                    <Link className="text-sky-700" to='/' target='_blank'><FaLinkedin /></Link>
                </ul>
                <span className=" block text-center font-semibold"> &#169; Copyright Emayet Hossen. All rights reserved..</span>
            </div>

        </footer>
    );
};

export default Footer;