import React, { useEffect, useState } from 'react';
import { ThumbsDownIcon, ThumbsUp } from 'lucide-react';
import { format } from 'date-fns';
import { useParams, Link } from 'react-router-dom'; 

const BlogDetails: React.FC = () => {
    const DEFAULT_AVATAR_URL = 'https://i.ibb.co.com/0jPH8hR/avatardefault-92824.png';
    const { id } = useParams<{ id: string }>(); // Get blog ID from URL parameters
    const [blogData, setBlogData] = useState<any>(null); // Replace with your specific blog data type
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`https://pet-care-server-ruby.vercel.app/api/posts/${id}`, {
                    cache: 'no-store',
                });

                if (!res.ok) {
                    throw new Error(`Failed to fetch post: ${res.statusText}`);
                }

                const { data } = await res.json();
                setBlogData(data);
            } catch (err) {
                setError('Error fetching blog details. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;

    return (
        <div className="container mx-auto md:grid grid-cols-3">
            <div className="col-span-2 py-8 px-4 sm:px-6">
                {/* Display the image */}
                <img
                    src={blogData.coverImage}
                    alt={blogData.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-4"
                />
                <h1 className="text-4xl text-center font-bold md:mb-4 mb-2">{blogData.title}</h1>

                {/* Author Info */}
                <div className="flex items-center justify-center md:py-4 gap-4 mb-3">
                    <Link to={`/profile/${blogData.author._id}`}>
                        <img
                            src={blogData.author.profilePicture || DEFAULT_AVATAR_URL}
                            alt={blogData.author.name}
                            className="w-10 h-10 rounded-full"
                        />
                    </Link>
                    <p className="text-gray-600 font-bold">
                        By <span className="text-[#F44A72]">{blogData.author.name}</span>
                    </p>
                    <p className="text-gray-500 font-medium">
                        {format(new Date(blogData.createdAt), 'MMMM dd, yyyy')}
                    </p>
                </div>

                {/* Post Content */}
                <div className="bg-white rounded-lg px-6 space-y-4">
                    <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <p>Author: {blogData.author.name}</p>
                        <p>Category: {blogData.category}</p>
                    </div>

                    {/* Upvotes, Downvotes, and Comments Count */}
                    <div className="flex mt-4 justify-between items-center">
                        <div className="flex items-center text-gray-600 space-x-4">
                            <div className="flex items-center">
                                <ThumbsUp className="w-5 h-5 mr-1" />
                                <span>{blogData.upvotes}</span>
                            </div>
                            <div className="flex items-center">
                                <ThumbsDownIcon className="w-5 h-5 mr-1" />
                                <span>{blogData.downvotes}</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Comments: {blogData.comments.length}</p>
                    </div>
                </div>
            </div>

            {/* Sidebar with Category and Popular Blogs */}
            <div className="hidden md:block pr-8 py-8">
                <div className="sticky top-20 space-y-8">
                    {/* <CategorySlider />
                    <PopularBlogs /> */}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
