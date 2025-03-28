import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import CodeTech from "../assets/CodeTech.png";
import Google from "../assets/Google.png";
import Java from "../assets/Java.png";
import Secondprice from "../assets/Secondprice.png";
import Internship from "../assets/Internship.png";
import Ksr from "../assets/Ksr.png";
import Iee from "../assets/Iee.png";
import SriShti from "../assets/SriShti.png";
import Online from "../assets/Online.png";

const certificates = [
  { title: "Programming in Java", institution: "NPTEL", type: "Offline Exam", image: Java },
  { title: "Internship", institution: "CodeTech Technology", type: "Course", image: CodeTech },
  { title: "Internship", institution: "Zen1 Tech Park", type: "Course", image: Internship },
  { title: "Presentation", institution: "Mahendra Engineering College", type: "Event", image: Secondprice },
  { title: "Hackathon", institution: "SNS College Coimbatore", type: "Event", image: Google },
  { title: "Workshop", institution: "KSR IET College Tiruchengode", type: "Event", image: Ksr },
  { title: "International Webinar", institution: "Study World College Coimbatore", type: "Event", image: Iee },
  { title: "FSD Webinar", institution: "Code Purple", type: "Event", image: Online },
  { title: "Symposium", institution: "PSG College Coimbatore", type: "Event", image: SriShti },
];

const chunkSize = 6; 
const certificateChunks = [];
for (let i = 0; i < certificates.length; i += chunkSize) {
  certificateChunks.push(certificates.slice(i, i + chunkSize));
}

const Certificates = () => {
  return (
    <section className="py-6 px-4 bg-gray-900" id="certificates">
      <div className="container mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-300 mb-5">My Certifications</h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          spaceBetween={15}
          slidesPerView={1}
          freeMode={true} // Enables natural scrolling
          speed={800} // Adjusts transition speed
          cssMode={true} // Native browser scrolling for smooth experience
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-6"
        >
          {certificateChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4">
                {chunk.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-950 shadow-md rounded-lg p-2 sm:p-3 hover:scale-105 transition-transform text-center"
                  >
                    <a href={cert.image} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-24 sm:h-28 object-cover rounded-md" 
                      />
                    </a>
                    <h3 className="text-xs sm:text-sm font-semibold mt-2 text-gray-300">{cert.title}</h3>
                    <p className="text-[10px] sm:text-xs text-gray-400">{cert.institution}</p>
                    <span className="text-[10px] sm:text-xs bg-gray-800 text-white px-2 py-1 rounded-full mt-1 inline-block">
                      {cert.type}
                    </span>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
