import { Link } from 'react-router-dom';
import image from '../../assets/emayethossen.png';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    return (
        <section>
            <div className='grid gap-12'>
                <div className='flex flex-col items-center gap-12 my-6'>
                    <h2 className='text-center font-semibold text-2xl'>
                        Hi, I&apos;m Emayet Hossen <br />
                        Frontend Developer <br />
                        React Developer <br />
                    </h2>
                    <div className='w-[200px] h-[290px] border  justify-self-center flex items-center justify-center place-items-center image-style'>
                        <div className='my-style w-[170px] h-[260px] flex items-center justify-center'>
                            <img className='w-[150px]' src={image} alt="" />
                        </div>
                        {/* <img src="" alt="" /> */}
                        {/* <img src="" alt="" /> */}
                    </div>
                    <ul className='flex gap-8 text-3xl'>
                        <Link to='#' target='_blank'><FaLinkedin className='text-sky-700' /></Link>
                        <Link to='#' target='_blank'><FaTwitter className='text-sky-500' /></Link>
                        <Link to='#' target='_blank'><FaGithub className='text-gray-600' /></Link>
                        <Link to='#' target='_blank'><FaInstagram className='text-pink-400' /></Link>
                    </ul>
                </div>
                {/* Information One */}
                <div className='grid gap-8 ml-12'>
                    <div>
                        <h3 className='mb-4 font-bold text-gray-500 uppercase'>
                            BIOGRAPHY
                        </h3>
                        <p className='font-semibold pr-32'>
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
                <div className='grid gap-8 ml-12'>
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

export default Home;