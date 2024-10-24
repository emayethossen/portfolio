

const Qualification = () => {
    return (
        <section className="container mx-auto py-12">
            <div className='mb-12'>
                <h2 className="text-3xl font-bold text-center">
                    Qualification
                </h2>
                <p className="font-semibold text-center">Education</p>
            </div>
            <div className="">
                {/* Qualification One */}
                <div className="grid gap-8 justify-center">
                    <div>
                        <div className="grid grid-cols-2 ml-8 justify-center items-center lg:divide-x">
                            <div className="flex flex-col gap-48 lg:mr-16">
                                <div>
                                    <h3 className="font-semibold text-lg my-4">HSC In Science</h3>
                                    <span className="block dark:text-white text-gray-500 font-semibold">Sir A.T Government College </span>
                                    <span className="block dark:text-white text-gray-500 font-semibold">2019 - 2021</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg my-4">Web Development</h3>
                                    <span className="block dark:text-white text-gray-500 font-semibold">Programming Hero </span>
                                    <span className="block dark:text-white text-gray-500 font-semibold">2022 - 2023</span>
                                </div>
                            </div>
                            <div className="lg:pl-16">
                                <h3 className="font-semibold text-lg my-4">BSc in Mathematics</h3>
                                <span className="block dark:text-white text-gray-500 font-semibold">Government City College</span>
                                <span className="block dark:text-white text-gray-500 font-semibold">Present</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Qualification Two */}
                {/* <div className="grid justify-center gap-8 lg:ml-0 ml-12">
                    <div>
                        <h3 className="font-bold text-2xl text-center mb-8">Work</h3>
                        <div>
                            <h3 className="font-semibold text-lg my-4">HSC In Science</h3>
                            <span className="block text-gray-500 font-semibold">Sir A.T Government College </span>
                            <span className="block text-gray-500 font-semibold">2019 - 2021</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg my-4">Web Development</h3>
                            <span className="block text-gray-500 font-semibold">Programming Hero </span>
                            <span className="block text-gray-500 font-semibold">2022 - 2023</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg my-4">React Developer</h3>
                            <span className="block text-gray-500 font-semibold">Institute - Bangladesh </span>
                            <span className="block text-gray-500 font-semibold">2019 - 2021</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Qualification;