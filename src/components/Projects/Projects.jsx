import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Projects.css";
import { Navigation, EffectCoverflow, Pagination, Mousewheel, Keyboard } from "swiper";

const Projects = () => {
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      const fetchProjects = async () => {
         try {
            const response = await fetch('https://my-portfolio-backend-zeta.vercel.app/api/projects'); // Update with your backend URL
            const data = await response.json();
            setProjects(data.projects);
         } catch (error) {
            console.error("Error fetching projects:", error);
         }
      };
      fetchProjects();
   }, []);

   return (
      <section className="container py-12 lg:w-4/5 mx-auto">
         <div>
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <p className="font-semibold text-center">Latest Projects</p>
         </div>
         <div className="flex justify-center items-center">
            <Swiper
               effect={"coverflow"}
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={"auto"}
               coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
               }}
               navigation={true}
               pagination={true}
               mousewheel={true}
               keyboard={true}
               modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard, Navigation]}
               className="mySwiper"
            >
               {projects.map(project => (
                  <SwiperSlide key={project._id}>
                     <div className="py-10 w-[250px] mx-auto">
                        <img className="w-[250px] mx-auto mb-5 rounded-xl" src={project.image} alt={project.title} />
                        <div className="flex flex-col items-center">
                           {/* <p>{project.technologies.join(", ")}</p> */}
                           <p>Web</p>
                           <h1 className="font-semibold mb-3 text-xl">{project.title}</h1>
                           <Link to={`/projects/${project._id}`}>
                              <button className="flex font-semibold gap-2 justify-center items-center">
                                 Project Details <FaArrowRight />
                              </button>
                           </Link>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};

export default Projects;
