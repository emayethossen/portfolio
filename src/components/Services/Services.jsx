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
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="bg-gray-200 py-12 px-4 rounded-xl text-center service-style w-[228px] mx-auto h-[322px] shadow-xl">
                        <h2 className="font-semibold text-lg mb-4">UI/UX <br /> Designer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste repudiandae totam blanditiis, animi laudantium!</p>
                        <div className="divider"></div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="bg-gray-200 py-12 px-4 rounded-xl text-center service-style w-[228px] mx-auto h-[322px] shadow-xl">
                        <h2 className="font-semibold text-lg mb-4">UI/UX <br /> Designer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste repudiandae totam blanditiis, animi laudantium!</p>
                        <div className="divider"></div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="bg-gray-200 py-12 px-4 rounded-xl text-center service-style w-[228px] mx-auto h-[322px] shadow-xl">
                        <h2 className="font-semibold text-lg mb-4">UI/UX <br /> Designer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste repudiandae totam blanditiis, animi laudantium!</p>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;