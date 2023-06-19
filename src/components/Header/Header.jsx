import { Link } from 'react-router-dom';
import image from '../../assets/emayethossen.png';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import './Header.css';

const Header = () => {

    return (
        <section className=''>
            <h2 className='text-center font-semibold lg:text-4xl text-2xl my-8'>
                Hi, I&apos;m Emayet Hossen <br />
                <span className='flex gap-2 justify-center my-4'>
                    I&apos;m 
                    <p className='text-3xl lg:text-5xl' style={{ color: 'hotpink', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Junior Web Developer', 'Frontend Web Developer', 'Web Designer', 'MERN Stack Web Developer']}
                            loop={10}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </p>
                </span>
            </h2>
            <div className='grid lg:grid-cols-3 gap-12'>
                {/* Image section */}
                <div className='flex flex-col items-center gap-12 my-6'>

                    <div className='w-[250px] h-[330px] border  justify-self-center flex items-center justify-center place-items-center image-style'>
                        <div className='my-style w-[220px] h-[300px] flex items-center justify-center'>
                            <img className='w-[200px]' src={image} alt="" />
                        </div>
                        {/* <img src="" alt="" /> */}
                        {/* <img src="" alt="" /> */}
                    </div>
                    <ul className='flex gap-8 text-3xl'>
                        <Link to='https://www.linkedin.com/in/emayethossen' target='_blank'><FaLinkedin className='text-sky-700' /></Link>
                        <Link to='https://twitter.com/emayethossen' target='_blank'><FaTwitter className='text-sky-500' /></Link>
                        <Link to='https://github.com/emayethossen' target='_blank'><FaGithub className='text-gray-600' /></Link>
                        <Link to='https://www.instagram.com/emayethossen' target='_blank'><FaInstagram className='text-pink-400' /></Link>
                    </ul>
                </div>

                {/* Information One */}
                <div className='grid gap-8 lg:ml-0 ml-12 lg:order-first'>
                    <div>
                        <h3 className='mb-4 font-bold text-gray-500 uppercase'>
                            BIOGRAPHY
                        </h3>
                        <p className='font-semibold lg:pr-0 pr-32'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, expedita? Debitis et cum quas? Magni ab labore eaque tenetur voluptates.
                        </p>
                    </div>
                    <div>
                        <h3 className='mb-4 font-bold text-gray-500 uppercase'>
                            Contact
                        </h3>
                        <p className='font-semibold pr-32'>
                            Chattogam, Bangladesh <br />
                            emayethossen@gmail.com <br />
                            +8801881870749
                        </p>
                    </div>
                    <div>
                        <h3 className='mb-4 font-bold text-gray-500 uppercase'>
                            Services
                        </h3>
                        <p className='font-semibold pr-32'>
                            Web Design <br />
                            Ui/ux Design <br />
                            software development <br />
                        </p>
                    </div>
                </div>

                {/* Information Two */}
                <div className='grid gap-8 lg:ml-0 ml-12 lg:justify-end'>
                    <div>
                        <h3 className='mb-4 font-bold text-gray-500 uppercase'>
                            Years Of Experience
                        </h3>
                        <p className='font-semibold pr-32 text-4xl'>8+</p>
                    </div>
                    <div>
                        <h3 className='mb-4 font-bold text-gray-500 uppercase'>
                            Comlpleted Projects
                        </h3>
                        <p className='font-semibold pr-32 text-4xl'>24+</p>
                    </div>
                    <div>
                        <h3 className='mb-4 font-bold text-gray-500 uppercase'>
                            Companies Worked
                        </h3>
                        <p className='font-semibold pr-32 text-4xl'>07+</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;