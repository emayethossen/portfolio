import React, { useState, useEffect } from "react";
import { Project } from '../types/types'; // Import the Project interface

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (project: Project) => Promise<void>; // Ensure this is a Promise
    initialData?: Project | null; // Optional initial data for edit mode
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [link, setLink] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [technologies, setTechnologies] = useState<string>("");
    const [githubFrontendLink, setGithubFrontendLink] = useState<string>(""); 
    const [githubBackendLink, setGithubBackendLink] = useState<string>("");   

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.description);
            setLink(initialData.link || "");
            setImage(initialData.image || "");
            setTechnologies(initialData.technologies.join(", "));
            setGithubFrontendLink(initialData.githubFrontendLink || ""); 
            setGithubBackendLink(initialData.githubBackendLink || "");   
        } else {
            setTitle("");
            setDescription("");
            setLink("");
            setImage("");
            setTechnologies("");
            setGithubFrontendLink(""); 
            setGithubBackendLink("");   
        }
    }, [initialData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const techArray = technologies.split(",").map((tech) => tech.trim());

        const projectData: Project = {
            title,
            description,
            link,
            image,
            technologies: techArray,
            githubFrontendLink,
            githubBackendLink,
        };

        await onSave(projectData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                <h2 className="text-2xl font-bold mb-4">
                    {initialData ? "Edit Project" : "Create Project"}
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                            rows={4}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="link" className="block text-gray-700 font-semibold mb-2">
                            Project Link (Optional)
                        </label>
                        <input
                            id="link"
                            type="url"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                            Image URL (Optional)
                        </label>
                        <input
                            id="image"
                            type="url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="technologies" className="block text-gray-700 font-semibold mb-2">
                            Technologies (Comma separated)
                        </label>
                        <input
                            id="technologies"
                            type="text"
                            value={technologies}
                            onChange={(e) => setTechnologies(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="githubFrontendLink" className="block text-gray-700 font-semibold mb-2">
                            GitHub Frontend Link (Optional)
                        </label>
                        <input
                            id="githubFrontendLink"
                            type="url"
                            value={githubFrontendLink}
                            onChange={(e) => setGithubFrontendLink(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="githubBackendLink" className="block text-gray-700 font-semibold mb-2">
                            GitHub Backend Link (Optional)
                        </label>
                        <input
                            id="githubBackendLink"
                            type="url"
                            value={githubBackendLink}
                            onChange={(e) => setGithubBackendLink(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-2 px-4 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                            {initialData ? "Update" : "Create"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectModal;
