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
      <section>
         <div className='my-12'>
            <h2 className="text-3xl font-bold text-center">
               Projects
            </h2>
            <p className="font-semibold text-center">Latest Projects</p>
         </div>
         <div>
            <div>
               <div className="grid md:hidden justify-center items-center">

                  <Swiper
                     cssMode={true}
                     navigation={true}
                     pagination={true}
                     mousewheel={true}
                     keyboard={true}
                     modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                     className="mySwiper"
                  >
                     <SwiperSlide>

                        {/* Project one */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/JRfFPQh/istockphoto-1425983331-170667a.webp" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='/'>
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Two */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/JRfFPQh/istockphoto-1425983331-170667a.webp" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='/'>
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Three */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/JRfFPQh/istockphoto-1425983331-170667a.webp" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='/'>
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Four */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/JRfFPQh/istockphoto-1425983331-170667a.webp" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='/'>
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Five */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/JRfFPQh/istockphoto-1425983331-170667a.webp" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='/'>
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Six */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/JRfFPQh/istockphoto-1425983331-170667a.webp" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='/'>
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>

                  </Swiper>

               </div>
               <div className="hidden lg:flex justify-center items-center">
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
                     <SwiperSlide>

                        {/* Project one */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/JRfFPQh/istockphoto-1425983331-170667a.webp" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='/'>
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Two */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/JRfFPQh/istockphoto-1425983331-170667a.webp" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='/'>
                                 <button className="flex font-semibold gap-6 justify-center items-center">View Demo <FaArrowRight /></button>
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        {/* Project Three */}
                        <div className="py-10 w-[250px] mx-auto">
                           <img className="w-[250px] mx-auto mb-5 rounded-xl" src="https://i.ibb.co/JRfFPQh/istockphoto-1425983331-170667a.webp" alt="" />
                           <div className="flex flex-col items-center">
                              <p>Web</p>
                              <h1 className="font-semibold mb-3 text-xl">Modern Website</h1>
                              <Link to='/'>
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