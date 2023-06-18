import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Skills from "../components/Skills/Skills";
import Qualification from "../components/Qualification/Qualification";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

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
            }
        ]
    },
]);

export default router;