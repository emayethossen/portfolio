import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Projects.css"
// import required modules
import { Navigation, EffectCoverflow, Pagination, Mousewheel, Keyboard } from "swiper";

const Projects = () => {
   return (
      <section className="py-12 lg:w-4/5 mx-auto">
         <div className=''>
            <h2 className="text-3xl font-bold text-center">
               Projects
            </h2>
            <p className="font-semibold text-center">Latest Projects</p>
         </div>
         <div>
            <div>

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
                     <SwiperSlide className="">

                        {/* Project one */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/HpT27Fb/ggg.png" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='https://superlative-kulfi-6fb8cf.netlify.app/' target="_blank">
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Two */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/ydpP5NZ/fddv.png" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='https://baby-toys-2a463.web.app/' target="_blank">
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Three */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/MCyrqLc/fbb.png" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='https://transcendent-salamander-db1d1a.netlify.app/' target="_blank">
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Four */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/6HsMRWj/sss.png" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='https://econosewer.com/' target="_blank">
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Projects;