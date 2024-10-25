import React, { useEffect, useState } from "react";
import { format } from "date-fns"; // For date formatting
import ProjectModal from "./ProjectModal"; // Import ProjectModal component
import { Project } from '../types/types'; // Import the Project interface

const ManageProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://my-portfolio-backend-zeta.vercel.app/api/projects", {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }

                const data = await response.json();
                console.log("Fetched Projects:", data);

                if (data.success && Array.isArray(data.projects)) {
                    setProjects(data.projects);
                } else {
                    console.error("Expected an array but got:", data);
                    setProjects([]);
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleAddProject = () => {
        setEditingProject(null);
        setIsModalOpen(true);
    };

    const handleEdit = (project: Project) => {
        setEditingProject(project);
        setIsModalOpen(true);
    };

    const handleSaveProject = async (project: Project) => {
        if (editingProject) {
            const response = await fetch(`https://my-portfolio-backend-zeta.vercel.app/api/projects/${editingProject._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            });

            if (!response.ok) {
                alert("Failed to update project");
            } else {
                alert("Project updated successfully!");
                setProjects((prevProjects) =>
                    prevProjects.map((p) =>
                        p._id === editingProject._id ? { ...p, ...project } : p
                    )
                );
            }
        } else {
            const response = await fetch("https://my-portfolio-backend-zeta.vercel.app/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            });

            if (!response.ok) {
                alert("Failed to create project");
            } else {
                const newProject = await response.json();
                alert("Project created successfully!");
                setProjects((prevProjects) => [...prevProjects, newProject.project]);
            }
        }

        setIsModalOpen(false);
    };

    const handleDelete = async (projectId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this project?");
        if (confirmDelete) {
            try {
                const response = await fetch(`https://my-portfolio-backend-zeta.vercel.app/api/projects/${projectId}`, {
                    method: "DELETE",
                });

                if (!response.ok) {
                    throw new Error("Failed to delete project");
                }

                setProjects((prevProjects) =>
                    prevProjects.filter((project) => project._id !== projectId)
                );
                alert("Project deleted successfully");
            } catch (error) {
                console.error("Error deleting project:", error);
                alert("There was an error deleting the project.");
            }
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Manage Projects</h1>

            <div className="flex justify-end mb-6">
                <button
                    onClick={handleAddProject}
                    className="py-3 px-6 bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white rounded-md font-semibold hover:from-green-200 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    Add Project
                </button>
            </div>

            <div className="overflow-x-auto">
                {loading ? (
                    <p>Loading projects...</p>
                ) : (
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Title</th>
                                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Technologies</th>
                                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Created At</th>
                                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.length > 0 ? (
                                projects.map((project) => (
                                    <tr key={project._id} className="border-b border-gray-200">
                                        <td className="py-4 px-6">{project.title}</td>
                                        <td className="py-4 px-6">{project.technologies.join(", ")}</td>
                                        <td className="py-4 px-6">
                                            {project.createdAt ? format(new Date(project.createdAt), "MMMM dd, yyyy") : "N/A"}
                                        </td>
                                        <td className="py-4 px-6 flex space-x-2">
                                            <button
                                                onClick={() => handleEdit(project)}
                                                className="py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-400"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (project._id) {
                                                        handleDelete(project._id);
                                                    }
                                                }}
                                                className="py-2 px-4 bg-red-500 text-white rounded-md font-semibold hover:bg-red-400"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="py-4 text-center">
                                        No projects available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>

            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveProject}
                initialData={editingProject}
            />
        </div>
    );
};

export default ManageProjects;
