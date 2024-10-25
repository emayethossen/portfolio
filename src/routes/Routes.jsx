import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Skills from "../components/Skills/Skills";
import Qualification from "../components/Qualification/Qualification";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import ProjectDetails from "../components/Projects/ProjectDetails";
import Contact from "../components/Contact/Contact";
import Login from "../pages/Login";
import AdminDashboard from "../layout/AdminDashboard";
import ProtectedRoute from "./ProtectedRoutes";
import ManageBlog from "../pages/ManageBlog";
import BlogModal from "../pages/BlogModal";
import ManageProject from "../pages/ManageProjects";
import ManageSkill from "../pages/ManageSkill";
import AllBlogs from '../components/Blogcard/AllBlog'
import BlogDetails from '../components/BlogDetails/BlogDetails'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/qualification",
                element: <Qualification />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/blogs",
                element: <AllBlogs />
            },
            {
                path: "/blogs/:id",
                element: <BlogDetails />
            },
            {
                path: "/projects/:id",
                element: <ProjectDetails />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute><AdminDashboard /></ProtectedRoute>,
        children:[
            {
                path: "blogs",
                element: <ManageBlog />
            },
            {
                path: "create-blog",
                element: <BlogModal />
            },
            {
                path: "edit-blog/:id",
                element: <BlogModal />
            },
            {
                path: "projects",
                element: <ManageProject />
            },
            {
                path: "skills",
                element: <ManageSkill />
            },
        ]
    }
]);

export default router;