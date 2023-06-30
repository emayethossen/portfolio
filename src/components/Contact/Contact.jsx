import { FaRocketchat, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsFillSendFill } from 'react-icons/bs'
import './Contact.css';

const Contact = () => {
    return (
        <section className="py-12">
        <div className="lg:w-4/5 mx-auto">
            <div className='mb-12'>
                <h2 className="text-3xl font-bold text-center">
                    Contact Me
                </h2>
                <p className="font-semibold text-center">Get in touch</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                
                    <h3 className="flex text-2xl font-semibold items-center justify-center gap-2 mb-10"><FaRocketchat /> Talk to me</h3>
                    <h3 className="flex text-2xl font-semibold justify-center  gap-2 mb-10"><BsFillSendFill />Write me your project</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">

                <div className="grid gap-8 ml-12">
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-gray-500">Email </span>
                        <span className="text-gray-600 dark:text-white">emayethossen@gmail.com</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-gray-500">Whatsapp </span>
                        <span className="text-gray-600 dark:text-white">+8801881870749</span>
                        <Link className="flex items-center gap-2" target="_blank">Write me <FaArrowRight /></Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-gray-500">Telegram </span>
                        <span className="text-gray-600 dark:text-white">@emayethossen</span>
                        <Link target="_blank">Write me</Link>
                    </div>
                </div>

                <form className="form-control mx-6">
                    <label className="label">
                        <span className="label-text dark:text-white">Name</span>
                    </label>
                    <input type="name" name='user_name' placeholder="Enter your name" className="input w-full rounded bg-gray-100" required />
                    <label className="label">
                        <span className="label-text dark:text-white">Email</span>
                    </label>
                    <input type="email" name='user_email' placeholder="Enter your email" className="input rounded bg-gray-100 w-full" required />
                    <label className="label">
                        <span className="label-text dark:text-white">Project</span>
                    </label>
                    <textarea className="input w-full bg-gray-100 h-32 py-2" placeholder="Write your project details"></textarea>

                    <input type="submit" value='Submit' className="input text-slate-500 bg-red-200 font-semibold w-full mt-6" />
                </form>
            </div>
        </div>
        </section>
    );
};

export default Contact;