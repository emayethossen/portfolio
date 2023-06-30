import { Link } from 'react-router-dom';
import image from '../../assets/emayethossen.png';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <section className='lg:w-4/5 mx-auto'>
            <div className='py-12'>
                <h2 data-aos="fade-down" className='text-center font-semibold lg:text-4xl text-2xl my-8'>
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
                                <img data-aos="zoom-in" className='w-[200px]' src={image} alt="" />
                            </div>
                            {/* <img src="" alt="" /> */}
                            {/* <img src="" alt="" /> */}
                        </div>
                        <ul className='flex gap-8 text-3xl'>
                            <Link to='https://www.linkedin.com/in/emayethossen' target='_blank' data-aos="fade-up" ><FaLinkedin className='text-sky-700' /></Link>
                            <Link data-aos="fade-down" to='https://twitter.com/emayethossen' target='_blank'><FaTwitter className='text-sky-500' /></Link>
                            <Link data-aos="fade-up" to='https://github.com/emayethossen' target='_blank'><FaGithub className='text-gray-600' /></Link>
                            <Link data-aos="fade-down" to='https://www.instagram.com/emayethossen' target='_blank'><FaInstagram className='text-pink-400' /></Link>
                        </ul>
                    </div>

                    {/* Information One */}
                    <div className='grid gap-8 lg:ml-0 ml-12 lg:order-first'>
                        <div>
                            <h3 data-aos="flip-right" className='mb-4 font-bold text-gray-500 uppercase'>
                                BIOGRAPHY
                            </h3>
                            <p data-aos="fade-right" className='font-semibold lg:pr-0 pr-32'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, expedita? Debitis et cum quas? Magni ab labore eaque tenetur voluptates.
                            </p>
                        </div>
                        <div>
                            <h3 data-aos="flip-right" className='mb-4 font-bold text-gray-500 uppercase'>
                                Contact
                            </h3>
                            <p data-aos="fade-right" className='font-semibold pr-32'>
                                emayethossen@gmail.com <br />
                                +8801881870749 <br />
                                Chattogam, Bangladesh <br />
                            </p>
                        </div>
                        <div>
                            <h3 data-aos="flip-right" className='mb-4 font-bold text-gray-500 uppercase'>
                                Services
                            </h3>
                            <p data-aos="fade-right" className='font-semibold pr-32 uppercase'>
                                Mern Stack developer <br />
                                Frontend web developer <br />
                                Web Designer <br />
                            </p>
                        </div>
                    </div>

                    {/* Information Two */}
                    <div className='grid gap-8 lg:ml-0 ml-12 lg:justify-end'>
                        <div>
                            <h3 data-aos="flip-left" className='mb-4 font-bold text-gray-500 uppercase'>
                                Years Of Experience
                            </h3>
                            <p data-aos="fade-left" className='font-semibold pr-32 text-4xl'>1+</p>
                        </div>
                        <div>
                            <h3 data-aos="flip-left" className='mb-4 font-bold text-gray-500 uppercase'>
                                Comlpleted Projects
                            </h3>
                            <p data-aos="fade-left" className='font-semibold pr-32 text-4xl'>10+</p>
                        </div>
                        <div>
                            <h3 data-aos="flip-left" className='mb-4 font-bold text-gray-500 uppercase'>
                                Companies Worked
                            </h3>
                            <p data-aos="fade-left" className='font-semibold pr-32 text-4xl'>01+</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;