// src/pages/AdminDashboard.tsx

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-5">
                    <h1 className="text-xl font-bold">Admin Dashboard</h1>
                </div>
                <nav className="mt-10">
                    <ul>
                        <li>
                            <Link to="/dashboard/projects" className="block p-4 text-gray-700 hover:bg-gray-200">
                                Manage Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/skills" className="block p-4 text-gray-700 hover:bg-gray-200">
                                Manage Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/blogs" className="block p-4 text-gray-700 hover:bg-gray-200">
                                Manage Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/logout" className="block p-4 text-gray-700 hover:bg-gray-200">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10">
                <h2 className="text-2xl font-bold mb-5">Welcome to the Admin Dashboard</h2>
                <p>This is where you can manage projects, skills, and blogs.</p>

                {/* You can add your routing logic here for different pages */}
                <Outlet /> 
            </div>
        </div>
    );
};

export default AdminDashboard;
