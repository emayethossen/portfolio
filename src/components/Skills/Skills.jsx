
import { BsBraces, BsCodeSlash } from 'react-icons/bs';
import './Skills.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <section className='py-12 lg:w-4/5 mx-auto'>
            <div className='mb-12'>
                <h2 className="text-3xl font-bold text-center">
                    Skills
                </h2>
                <p className="font-semibold text-center">My favourite skills</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-10'>
                {/* Skills One */}
                <div>
                    <h3 className='flex items-center justify-center gap-2 text-3xl font-semibold mb-10'><BsBraces /> Frontend Developer</h3>
                    <div className='grid grid-cols-3 gap-10 px-4'>

                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-right" className='w-10' src="https://i.ibb.co/PFFrRkr/html.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-down" className='w-10' src="https://i.ibb.co/4F7NtH2/css-3.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>CSS</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-left" className='w-10' src="https://i.ibb.co/0My5TKY/bootstrap.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>Bootstrap</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-right" className='w-10' src="https://i.ibb.co/7CDDtww/download-1.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>Tailwind</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-up" className='w-10' src="https://i.ibb.co/7vnc46y/js.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>Javascript</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-left" className='w-10' src="https://i.ibb.co/nRPFSCf/science.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>React</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                    </div>
                </div>

                {/* Skills Two */}
                <div>
                    <h3 className='flex items-center justify-center gap-2 text-3xl font-semibold mb-10'><BsCodeSlash />Backend Developer</h3>
                    <div className='grid grid-cols-3 gap-10 px-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-right" className='w-10' src="https://i.ibb.co/5kGm8wC/icons8-nodejs-48.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>NodeJS</h3>
                            <p className='font-semibold text-sm'>Familiar</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-down" className='w-10' src="https://i.ibb.co/Y8p2BTS/icons8-mongodb-48.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>MongoDB</h3>
                            <p className='font-semibold text-sm'>Familiar</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-left" className='w-10' src="https://i.ibb.co/TM4stFS/download.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>Firebase</h3>
                            <p className='font-semibold text-sm'>Comfortable</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-right" className='w-10' src="https://i.ibb.co/fQXP3N0/download.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>ExpressJS</h3>
                            <p className='font-semibold text-sm'>Comfortable</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img data-aos="fade-up" className='w-10' src="https://i.ibb.co/vhCX0d3/download-1.png" alt="" />
                            </div>
                            <h3 className='font-semibold'>Rest API</h3>
                            <p className='font-semibold text-sm'>Familiar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;