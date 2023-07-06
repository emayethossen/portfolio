import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Qualification from "../Qualification/Qualification";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="dark:bg-slate-800 dark:text-white">
            <div>
            <Header />
            </div>
            <div id="skills" className="bg-white dark:bg-slate-600">
                <Skills />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="qualification" className="bg-white dark:bg-slate-600">
                <Qualification />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="contact" className="bg-white dark:bg-slate-600">
                <Contact />
            </div>
        </div>
    );
};

export default Home;