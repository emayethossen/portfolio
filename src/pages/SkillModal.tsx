// src/components/SkillModal.tsx

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface SkillForm {
    _id: any;
    name: string;
    proficiency: string;
    category?: string;
    imageUrl?: string; // Field for the image URL
}

interface SkillModalProps {
    skill: SkillForm | null;
    onClose: () => void;
    onSave: (newSkill: SkillForm) => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose, onSave }) => {
    const { register, handleSubmit, reset } = useForm<SkillForm>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (skill) {
            reset(skill); // Populate the form with skill data if editing
        } else {
            reset(); // Clear the form if adding a new skill
        }
    }, [skill, reset]);

    const onSubmit = async (data: SkillForm) => {
        setLoading(true);

        try {
            const method = skill ? "PUT" : "POST"; // Use PUT if editing, otherwise POST
            const url = skill
                ? `https://my-portfolio-backend-zeta.vercel.app/api/skills/${skill._id}` // URL for editing
                : `https://my-portfolio-backend-zeta.vercel.app/api/skills`; // URL for adding

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to save skill");
            }

            onSave(data); // Call the onSave callback with the new or updated skill
            alert("Skill saved successfully!");
        } catch (error) {
            console.error("Error saving skill:", error);
            alert("There was an error saving your skill.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    {skill ? "Edit Skill" : "Add Skill"}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block font-semibold text-lg mb-1">
                            Skill Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register("name", { required: true })}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F95C6B] transition"
                            placeholder="Enter skill name"
                        />
                    </div>

                    {/* Proficiency Input */}
                    <div>
                        <label htmlFor="proficiency" className="block font-semibold text-lg mb-1">
                            Proficiency Level
                        </label>
                        <select
                            id="proficiency"
                            {...register("proficiency", { required: true })}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F95C6B] transition"
                        >
                            <option value="">Select proficiency</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>

                    {/* Category Input */}
                    <div>
                        <label htmlFor="category" className="block font-semibold text-lg mb-1">
                            Category (optional)
                        </label>
                        <input
                            id="category"
                            type="text"
                            {...register("category")}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F95C6B] transition"
                            placeholder="Enter category (e.g., Frontend)"
                        />
                    </div>

                    {/* Image URL Input */}
                    <div>
                        <label htmlFor="imageUrl" className="block font-semibold text-lg mb-1">
                            Image URL (optional)
                        </label>
                        <input
                            id="imageUrl"
                            type="text"
                            {...register("imageUrl")}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F95C6B] transition"
                            placeholder="Enter image URL for the skill"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-gradient-to-r from-[#F95C6B] to-[#E51284] text-white rounded-md font-semibold hover:from-red-200 hover:to-red-400 transition"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save Skill"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SkillModal;
