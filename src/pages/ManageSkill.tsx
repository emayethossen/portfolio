// src/pages/ManageSkill.tsx

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import SkillModal from "./SkillModal"; // Import your modal component

interface Skill {
    _id: string;
    name: string;
    proficiency: string;
    category?: string;
    createdAt: string;
}

const ManageSkill = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
    const navigate = useNavigate();

    // Fetch skills when the component mounts
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch("https://my-portfolio-backend-zeta.vercel.app/api/skills");
                if (!response.ok) throw new Error("Failed to fetch skills");
                const data = await response.json();
                setSkills(data.skills);
            } catch (error) {
                console.error("Error fetching skills:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSkills();
    }, []);

    const handleAddSkill = () => {
        setCurrentSkill(null); // Reset the current skill for adding a new one
        setShowModal(true);
    };

    const handleEdit = (skill: Skill) => {
        setCurrentSkill(skill); // Set the current skill to edit
        setShowModal(true);
    };

    const handleDelete = async (skillId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this skill?");
        if (confirmDelete) {
            try {
                const response = await fetch(`https://my-portfolio-backend-zeta.vercel.app/api/skills/${skillId}`, {
                    method: "DELETE",
                });
                if (!response.ok) throw new Error("Failed to delete skill");
                setSkills((prevSkills) => prevSkills.filter((skill) => skill._id !== skillId));
                alert("Skill deleted successfully");
            } catch (error) {
                console.error("Error deleting skill:", error);
                alert("There was an error deleting the skill.");
            }
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Manage Skills</h1>

            {/* Add Skill Button */}
            <div className="flex justify-end mb-6">
                <button
                    onClick={handleAddSkill}
                    className="py-3 px-6 bg-gradient-to-r from-[#F95C6B] to-[#E51284] text-white rounded-md font-semibold hover:from-red-200 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    Add Skill
                </button>
            </div>

            {/* Skills Table */}
            {loading ? (
                <p>Loading skills...</p>
            ) : (
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Proficiency</th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Category</th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Created At</th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.length > 0 ? (
                            skills.map((skill) => (
                                <tr key={skill._id} className="border-b border-gray-200">
                                    <td className="py-4 px-6">{skill.name}</td>
                                    <td className="py-4 px-6">{skill.proficiency}</td>
                                    <td className="py-4 px-6">{skill.category || "N/A"}</td>
                                    <td className="py-4 px-6">{format(new Date(skill.createdAt), "MMMM dd, yyyy")}</td>
                                    <td className="py-4 px-6 flex space-x-2">
                                        <button
                                            onClick={() => handleEdit(skill)}
                                            className="py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-400"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(skill._id)}
                                            className="py-2 px-4 bg-red-500 text-white rounded-md font-semibold hover:bg-red-400"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="py-4 text-center">No skills available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}

            {/* Skill Modal */}
            {showModal && (
                <SkillModal
                    skill={currentSkill}
                    onClose={() => setShowModal(false)}
                    onSave={() => {
                        setShowModal(false);
                        // Refresh skills after adding/updating
                        // You might want to refetch skills here or update the state accordingly
                    }}
                />
            )}
        </div>
    );
};

export default ManageSkill;
