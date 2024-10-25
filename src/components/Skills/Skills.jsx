import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsBraces, BsCodeSlash } from 'react-icons/bs';
import Skeleton from '../Skeleton/Skeleton'; 
import './Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [frontendSkills, setFrontendSkills] = useState([]);
    const [backendSkills, setBackendSkills] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [loaded, setLoaded] = useState(false); // Loaded state for animation

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get('https://my-portfolio-backend-zeta.vercel.app/api/skills'); // Adjust the API endpoint as needed
                setSkills(response.data.skills);
            } catch (error) {
                console.error('Error fetching skills:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
                setTimeout(() => setLoaded(true), 100); // Trigger loaded state after a short delay
            }
        };

        fetchSkills();
    }, []);

    useEffect(() => {
        const frontSkills = skills.filter(skill => skill.category === 'Frontend');
        const backSkills = skills.filter(skill => skill.category === 'Backend' || skill.category === 'Database');
        setFrontendSkills(frontSkills);
        setBackendSkills(backSkills);
    }, [skills]);

    return (
        <section className='container py-12 lg:w-4/5 mx-auto'>
            <div className='mb-8'>
                <h2 className="text-3xl font-bold text-center">Skills</h2>
                <p className="font-semibold text-center">My favourite skills</p>
            </div>

            <div className='space-y-12'>

                {/* Frontend Skills */}
                <div>
                    <h3 className='flex items-center justify-center gap-2 text-3xl font-semibold mb-10'><BsBraces /> Frontend Developer</h3>
                    <div className='grid md:grid-cols-6 grid-cols-3 gap-10 px-4'>
                        {loading ? (
                            // Show skeletons while loading
                            Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className={`skeleton ${loaded ? 'loaded' : ''}`}>
                                    <Skeleton />
                                </div>
                            ))
                        ) : (
                            frontendSkills.map(skill => (
                                <div key={skill._id} className={`skill-card ${loaded ? 'loaded' : ''}`}>
                                    <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                        <img className='w-10' src={skill.imageUrl} alt={skill.name} />
                                    </div>
                                    <h3 className='font-semibold'>{skill.name}</h3>
                                    <p className='font-semibold text-sm'>{skill.proficiency}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Backend Skills */}
                <div>
                    <h3 className='flex items-center justify-center gap-2 text-3xl font-semibold mb-10'><BsCodeSlash /> Backend Developer</h3>
                    <div className='grid md:grid-cols-6 grid-cols-3 gap-10 px-4'>
                        {loading ? (
                            // Show skeletons while loading
                            Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className={`skeleton ${loaded ? 'loaded' : ''}`}>
                                    <Skeleton />
                                </div>
                            ))
                        ) : (
                            backendSkills.map(skill => (
                                <div key={skill._id} className={`skill-card ${loaded ? 'loaded' : ''}`}>
                                    <div className='w-20 h-24 bg-slate-100 skill-img flex justify-center items-center mb-4'>
                                        <img className='w-10' src={skill.imageUrl} alt={skill.name} />
                                    </div>
                                    <h3 className='font-semibold'>{skill.name}</h3>
                                    <p className='font-semibold text-sm'>{skill.proficiency}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
