import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import image from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20 text-white">
            <SectionTitle subHeading="check it out" heading="Featured Item">
            </SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa repudiandae quam sequi cumque itaque odit ipsum omnis nesciunt eligendi, earum nobis blanditiis qui sunt ea fugit quaerat esse dolorum! Expedita.</p>
                    <button className="btn btn-outline text-white"> Order now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured