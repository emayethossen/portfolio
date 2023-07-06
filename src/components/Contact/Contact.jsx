import { FaRocketchat, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsFillSendFill } from 'react-icons/bs'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nk9386q', 'template_r7u7epf', form.current, '5Ur_IMUlIVuH6XCIt')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
            
    };

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
                    <h3 className="hidden lg:flex text-2xl font-semibold justify-center  gap-2 mb-10"><BsFillSendFill />Write me your project</h3>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">

                    <div className="grid gap-8 ml-12">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-gray-500 dark:text-slate-200">Email </span>
                            <span className="text-gray-600 dark:text-white">emayethossen@gmail.com</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-gray-500 dark:text-slate-200">Whatsapp </span>
                            <span className="text-gray-600 dark:text-white">+8801881870749</span>
                            <Link className="flex items-center gap-2" target="_blank">Write me <FaArrowRight /></Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-gray-500 dark:text-slate-200">Telegram </span>
                            <span className="text-gray-600 dark:text-white">@emayethossen</span>
                            <Link target="_blank">Write me</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="md:hidden text-2xl flex font-semibold justify-center gap-2 mb-10"><BsFillSendFill />Write me your project</h3>
                        <form className="form-control mx-6" ref={form} onSubmit={sendEmail}>
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
                            <textarea name="message" className="input w-full bg-gray-100 h-32 py-2" placeholder="Write your project details"></textarea>

                            <input type="submit" value='Submit' className="input text-gray-600 bg-red-200 font-semibold w-full mt-6" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;