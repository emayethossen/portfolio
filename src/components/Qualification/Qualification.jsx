
const Qualification = () => {
    return (
        <section>
            <div className='my-12'>
                <h2 className="text-3xl font-bold text-center">
                    Qualification
                </h2>
                <p className="font-semibold text-center">Experience & Education</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Qualification One */}
                <div className="grid gap-8 justify-center lg:ml-0 ml-12">
                    <div>
                        <h3 className="font-bold text-2xl text-center mb-8">Education</h3>
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
                </div>
                {/* Qualification Two */}
                <div className="grid justify-center gap-8 lg:ml-0 ml-12">
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
                </div>
            </div>
        </section>
    );
};

export default Qualification;