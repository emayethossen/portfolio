import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Qualification from "../Qualification/Qualification";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <>
            <Header />
            <Skills />
            <Qualification />
            <Services />
            <Contact />
        </>
    );
};

export default Home;