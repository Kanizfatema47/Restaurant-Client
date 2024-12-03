
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from 'swiper/modules';
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <SectionTitle subHeading="What our client Say"
                heading='Testimonials'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='m-24'>
                            <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating}>

                            </Rating>
                            <p>{review.name}</p>
                            <p>{review.details}</p>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>

        </div>

    )
}

export default Testimonials