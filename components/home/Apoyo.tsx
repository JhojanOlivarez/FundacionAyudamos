import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './Apoyo.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  { src: '/assets/Colaboradores/LogoAGSOFTWORKS.avif', alt: 'Parroquia Santa Maria de los Ángeles' },
  { src: '/assets/Colaboradores/LogoAGSOFTWORKS.avif', alt: 'Clínica de Especia' },
  { src: '/assets/Colaboradores/Wellfit.avif', alt: 'Centro de Fe y Culturas' },
  { src: '/assets/Colaboradores/LogoWellfit.avif', alt: 'PMG Asesores de Seguros' },
  { src: '/assets/Colaboradores/LogoWellfit.avif', alt: 'TOBDDigital' },
];

const Apoyo = () => {
  return (
    <div className="App">
      <h1>Slider con React y Swiper</h1>
      <div className="container">
        <div className="swiperContainer">
          <Swiper
            modules={[Navigation, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.pagination',
              clickable: true,
            }}
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="carousel-card">
                  <img src={image.src} alt={image.alt} className="carousel-image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination"></div>
      </div>
    </div>
  );
};

export default Apoyo;
