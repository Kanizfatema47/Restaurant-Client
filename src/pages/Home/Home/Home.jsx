import { Helmet } from "react-helmet-async";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Restaurant | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu/>
      <Featured/>
      <Testimonials/>
    </div>
  )
}
