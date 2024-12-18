import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

export default function Category() {
    return (
        <div>
            <SectionTitle
                subHeading={"From 11:00AM to 10:00PM"}
                heading={"Order Online"} >
            </SectionTitle>
            <Swiper

                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-16'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-16'>Pizza</h3>


                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-16'>Soup</h3>


                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-16'>Desserts</h3>


                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-16'>Salad</h3>


                </SwiperSlide>

            </Swiper>
        </div>
    )
}
