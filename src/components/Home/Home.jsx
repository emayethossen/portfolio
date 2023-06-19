import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Qualification from "../Qualification/Qualification";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="lg:w-4/5 mx-auto dark:bg-slate-800 dark:text-white">
            <Header />
            <Skills />
            <Qualification />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;