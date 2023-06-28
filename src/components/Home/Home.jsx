import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Qualification from "../Qualification/Qualification";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="lg:w-4/5 mx-auto dark:bg-slate-800 dark:text-white">
            <Header />
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="qualification">
                <Qualification />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;