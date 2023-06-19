import { FaRocketchat, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsFillSendFill } from 'react-icons/bs'
import './Contact.css';

const Contact = () => {
    return (
        <section>
            <div className='my-12'>
                <h2 className="text-3xl font-bold text-center">
                    Contact Me
                </h2>
                <p className="font-semibold text-center">Get in touch</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h3 className="flex text-2xl font-semibold items-center justify-center gap-2 mb-10"><FaRocketchat /> Talk to me</h3>
                    <div className="grid gap-8 ml-12">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-gray-500">Email </span>
                            <span className="text-gray-600">emayethossen@gmail.com</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-gray-500">Whatsapp </span>
                            <span className="text-gray-600">+8801881870749</span>
                            <Link className="flex items-center gap-2" target="_blank">Write me <FaArrowRight /></Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-gray-500">Telegram </span>
                            <span className="text-gray-600">@emayethossen</span>
                            <Link target="_blank">Write me</Link>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8">
                    <h3 className="flex text-2xl font-semibold justify-center  gap-2 mb-10"><BsFillSendFill />Write me your project</h3>
                    <form className="grid relative gap-8" action="">
                        <div className="relative h-16">
                            <label className="absolute -top-3 left-5 z-10 dark:bg-slate-800 bg-white p-1" htmlFor="">Name</label>
                            <input className="absolute top-0 left-0 w-full h-full contact-input p-6" type="text" name="user_name" placeholder="Enter your name" required />
                        </div>
                        <div className="relative h-16">
                            <label className="absolute -top-3 left-5 z-10 dark:bg-slate-800 bg-white p-1" htmlFor="">Email</label>
                            <input className="absolute top-0 left-0 w-full h-full contact-input p-6" type="email" name="user_email" placeholder="Enter your email" required />
                        </div>
                        <div className="relative h-16">
                            <label className="absolute -top-3 left-5 z-10 dark:bg-slate-800 bg-white p-1" htmlFor="">Project</label>
                            <textarea className="absolute top-0 left-0 w-full h-full resize-none contact-textarea p-6" name="user_project" placeholder="Write your project details"></textarea>
                        </div>
                        <button className="flex justify-center items-center bg-red-500 w-24 p-2 rounded-xl mx-auto" type="submit">Submit<BsFillSendFill /></button>
                    </form>
                </div>
            </div> 
        </section>
    );
};

export default Contact;