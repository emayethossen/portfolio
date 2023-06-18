import img from '../../assets/linkedin.png'
import './Skills.css'
const Skills = () => {
    return (
        <section>
            <div className='my-12'>
                <h2 className="text-3xl font-bold text-center">
                    Skills
                </h2>
                <p className="font-semibold text-center">My favourite skills</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-8'>
                {/* Skills One */}
                <div>
                    <h3 className='flex items-center justify-center text-3xl font-semibold mb-10'>Frontend Developer</h3>
                    <div className='grid grid-cols-3 gap-10 px-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                    </div>
                </div>

                {/* Skills Two */}
                <div>
                    <h3 className='flex items-center justify-center text-3xl font-semibold mb-10'>Backend Developer</h3>
                    <div className='grid grid-cols-3 gap-10 px-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                <img className='w-10' src={img} alt="" />
                            </div>
                            <h3 className='font-semibold'>HTML</h3>
                            <p className='font-semibold text-sm'>Intermediate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;