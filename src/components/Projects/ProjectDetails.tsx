import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

// Define the interface for a project
interface Project {
    _id: string;
    title: string;
    description: string;
    link: string;
    image: string;
    technologies: string[];
    githubFrontendLink: string; // Added GitHub frontend link
    githubBackendLink: string;  // Added GitHub backend link
}

const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>(); // Specify that id is a string
    const [project, setProject] = useState<Project | null>(null); // Initial state can be null

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await fetch(`https://my-portfolio-backend-zeta.vercel.app/api/projects/${id}`); // Update with your backend URL
                if (!response.ok) throw new Error('Failed to fetch project details');
                const data = await response.json();
                setProject(data.project);
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };
        fetchProjectDetails();
    }, [id]);

    if (!project) return <div>Loading...</div>; // Loading state

    return (
        <div className="py-12 px-4 lg:w-4/5 mx-auto">
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <img className="w-full rounded-xl mb-5" src={project.image} alt={project.title} />
            <p className="mb-4">{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            <Link to={project.link}>
                <button className="flex font-semibold gap-2 text-blue-500 justify-center items-center">
                    View Demo <FaArrowRight />
                </button>
            </Link>

            {/* Conditionally render GitHub links if they exist */}
            {project.githubFrontendLink && (
                <a href={project.githubFrontendLink} target="_blank" rel="noopener noreferrer">
                    <button className="flex font-semibold gap-2 text-blue-500 justify-center items-center mt-4">
                        View Frontend Code <FaArrowRight />
                    </button>
                </a>
            )}
            {project.githubBackendLink && (
                <a href={project.githubBackendLink} target="_blank" rel="noopener noreferrer">
                    <button className="flex font-semibold gap-2 text-blue-500 justify-center items-center mt-2">
                        View Backend Code <FaArrowRight />
                    </button>
                </a>
            )}
        </div>
    );
};

export default ProjectDetails;
