import { Swiper, SwiperSlide } from 'swiper/react';
import './SkillLogo.css'

import 'swiper/css';

export default function SkillLogo() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false, 
          disableOnInteraction: false,
        }}
        speed={2000}
        slidesPerView={5}
        className="mySwiper"
      >
        <SwiperSlide className=''><img className="html" src="https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="css" src="https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="javascript" src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-3521515-2945018.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="node" src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="react" src="https://cdn.iconscout.com/icon/free/png-256/free-react-3521666-2945110.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="bootstrap" src="https://cdn.iconscout.com/icon/free/png-256/free-bootstrap-226077.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="tailwind" src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="material" src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="wordpress" src="https://seeklogo.com/images/W/wordpress-icon-logo-45667D3313-seeklogo.com.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="shopify" src="https://seeklogo.com/images/S/shopify-logo-1C711BCDE4-seeklogo.com.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="figma" src="https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="canva" src="https://seeklogo.com/images/C/canva-logo-C21344F8C5-seeklogo.com.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
    
  );
}
