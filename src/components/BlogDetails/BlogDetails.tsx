// src/components/BlogDetails.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { format } from "date-fns";

interface Author {
    _id: string;
    name: string;
    profilePicture?: string;
}

interface Blog {
    _id: string;
    title: string;
    author: Author;
    coverImage: string;
    isPremium: boolean;
    createdAt: string;
    content: string;
    upvotes: number;
    downvotes: number;
}

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://my-portfolio-backend-zeta.vercel.app/api/blogs/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch blog details");
                }
                const data = await response.json();
                setBlog(data.blog);
            } catch (err) {
                setError("Error fetching blog details. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <p>Loading blog details...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold text-center mb-4">{blog.title}</h1>
            <div className="flex justify-center items-center mb-4">
                <a href={`/profile/${blog.author._id}`}>
                    <img
                        src={blog.author.profilePicture || "/path/to/default-avatar.png"}
                        alt={blog.author.name}
                        className="w-10 h-10 rounded-full mr-2"
                    />
                </a>
                <p className="text-gray-600 font-bold">
                    By <span className='text-[#F44A72]'>{blog.author.name}</span>
                </p>
                <p className="text-gray-500 font-medium ml-4">
                    {format(new Date(blog.createdAt), 'MMMM dd, yyyy')}
                </p>
            </div>

            <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-64 object-cover mb-4 rounded-lg"
            />

            <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: blog.content }} />

            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <ThumbsUp className="w-5 h-5 mr-1" />
                    <span>{blog.upvotes}</span>
                </div>
                <div className="flex items-center">
                    <ThumbsDown className="w-5 h-5 mr-1" />
                    <span>{blog.downvotes}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
