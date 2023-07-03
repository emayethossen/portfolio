import './Services.css';

const Services = () => {
    return (
        <section className='lg:w-4/5 mx-auto py-12'>
            <div className='mb-12'>
                <h2 className="text-3xl font-bold text-center">
                    Services
                </h2>
                <p className="font-semibold text-center">What I offer</p>
            </div>
            <div className="">
                <div className="grid lg:grid-cols-3 gap-10 justify-center items-center">
                    <div className="bg-gray-200 py-12 px-4 rounded-xl text-center service-style w-[228px] mx-auto h-[322px] shadow-xl">
                        <h2 className="font-semibold text-lg mb-4">Responsive Web Design</h2>
                        <p>I will create a responsive web design for your website, ensuring it looks great on all devices. Mobile-friendly and user-centric approach guaranteed
                        </p>
                        <div className="divider"></div>
                    </div>
                    <div className="bg-gray-200 py-12 px-4 rounded-xl text-center service-style w-[228px] mx-auto h-[322px] shadow-xl">
                        <h2 className="font-semibold text-lg mb-4">Frontend Web Developer</h2>
                        <p>I will create stunning and responsive websites using React, Tailwind & Bootstrap. Let me bring your vision to life with clean and intuitive user interfaces.</p>
                        <div className="divider"></div>
                    </div>
                    <div className="bg-gray-200 py-12 px-4 rounded-xl text-center service-style w-[228px] mx-auto h-[322px] shadow-xl">
                        <h2 className="font-semibold text-lg mb-4">MERN Stack Developer</h2>
                        <p>I will develop robust web applications using the MERN stack, ensuring seamless integration of MongoDB, Express.js, React, and Node.js.</p>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;