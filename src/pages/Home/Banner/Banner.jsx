import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import banner_img1 from '../../../assets/home/01.jpg'
import banner_img2 from '../../../assets/home/02.jpg'
import banner_img3 from '../../../assets/home/03.png'
import banner_img4 from '../../../assets/home/04.jpg'
import banner_img5 from '../../../assets/home/05.png'
import banner_img6 from '../../../assets/home/06.png'
export default function Banner() {
    return (
        <div>
            <Carousel autoPlay className=''>
                <div>
                    <img src={banner_img1} />
                </div>
                <div>
                    <img src={banner_img2} />
                </div>
                <div>
                    <img src={banner_img3} />
                </div>
                <div>
                    <img src={banner_img4} />
                </div>
                <div>
                    <img src={banner_img5} />
                </div>
                <div>
                    <img src={banner_img6} />
                </div>
            </Carousel>
        </div>

    )
}
