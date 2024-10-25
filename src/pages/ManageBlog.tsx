import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use React Router for navigation
import { format } from "date-fns";

interface Blog {
    _id: string;
    title: string;
    author: string;
    coverImage: string;
    isPremium: boolean;
    createdAt: string;
}

const ManageBlog = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Navigation hook for routing

    // Fetch all blogs when the component loads
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://my-portfolio-backend-zeta.vercel.app/api/blogs", {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }

                const data = await response.json();

                // Log the data to verify its structure
                console.log("Fetched Blogs:", data);

                // Extract blogs from the data object
                if (data.success && Array.isArray(data.blogs)) {
                    setBlogs(data.blogs); // Set the blogs array directly
                } else {
                    console.error("Expected an array but got:", data);
                    setBlogs([]); // Reset to an empty array if the data is not as expected
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setBlogs([]); // Reset to an empty array on error
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Handle delete functionality
    const handleDelete = async (blogId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (confirmDelete) {
            try {
                const response = await fetch(`https://my-portfolio-backend-zeta.vercel.app/api/blogs/${blogId}`, {
                    method: "DELETE",
                });

                if (!response.ok) {
                    throw new Error("Failed to delete blog");
                }

                setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
                alert("Blog deleted successfully");
            } catch (error) {
                console.error("Error deleting blog:", error);
                alert("There was an error deleting the blog.");
            }
        }
    };

    // Redirect to the BlogComponent for creating a new blog
    const handleAddBlog = () => {
        navigate("/dashboard/create-blog");
    };

    // Redirect to the BlogComponent for editing an existing blog
    const handleEdit = (blogId: string) => {
        navigate(`/dashboard/edit-blog/${blogId}`); // Pass blogId in the URL for editing
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Manage Blogs</h1>

            {/* Add Blog Button */}
            <div className="flex justify-end mb-6">
                <button
                    onClick={handleAddBlog}
                    className="py-3 px-6 bg-gradient-to-r from-[#F95C6B] to-[#E51284] text-white rounded-md font-semibold hover:from-red-200 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    Add Blog
                </button>
            </div>

            {/* Blog Table */}
            <div className="overflow-x-auto">
                {loading ? (
                    <p>Loading blogs...</p>
                ) : (
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Title</th>
                                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Author</th>
                                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Premium</th>
                                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Created At</th>
                                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(blogs) && blogs.length > 0 ? (
                                blogs.map((blog) => (
                                    <tr key={blog._id} className="border-b border-gray-200">
                                        <td className="py-4 px-6">{blog.title}</td>
                                        <td className="py-4 px-6">{blog.author}</td>
                                        <td className="py-4 px-6">{blog.isPremium ? "Yes" : "No"}</td>
                                        <td className="py-4 px-6">{format(new Date(blog.createdAt), "MMMM dd, yyyy")}</td>
                                        <td className="py-4 px-6 flex space-x-2">
                                            <button
                                                onClick={() => handleEdit(blog._id)}
                                                className="py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-400"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(blog._id)}
                                                className="py-2 px-4 bg-red-500 text-white rounded-md font-semibold hover:bg-red-400"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-4 text-center">No blogs available.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ManageBlog;
