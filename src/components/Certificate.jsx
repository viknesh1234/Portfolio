import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import CodeTech from "../assets/CodeTech.png";
import Google from "../assets/Google.png";
import Java from "../assets/Java.png";
import Secondprice from "../assets/Secondprice.png";
import Internship from "../assets/Internship.png";
import Ksr from "../assets/Ksr.png";
import Iee from "../assets/Iee.png";
import SriShti from "../assets/SriShti.png";
import Online from "../assets/Online.png";

const Certificates = () => {
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

  return (
    <div
      id='certificates'
      className='scroll-mt-24 py-16 bg-gray-900 text-gray-300 z-50'
    >
      <h1 className='text-center text-3xl lg:text-5xl font-extrabold mb-4 text-white'>
        My Certificates
      </h1>
      <h2 className='text-center text-2xl lg:text-4xl font-bold mb-10'>
        Achievements & Events
      </h2>

      <div className='max-w-6xl mx-auto px-4'>
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#555",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={700}
          autoplay={{ delay: 4500 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          className="mySwiper"
        >
          {certificates.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='bg-gray-900 border border-gray-700 rounded-lg shadow-lg shadow-blue-500/30 p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300'>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-contain mb-4 rounded"
                />
                <h3 className='font-semibold text-blue-500 text-lg mb-1'>{item.title}</h3>
                <p className='text-sm italic text-gray-400 mb-1'>{item.institution}</p>
                <p className='text-sm text-gray-500'>{item.type}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-pagination mt-10'></div>
      </div>
    </div>
  );
};

export default Certificates;
