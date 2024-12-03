import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover/Cover'
import bannerimg from '../../assets/menu/banner3.jpg'
const Menu = () => {
    return (

        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <Cover img={bannerimg}
            title='Our Menu'
            />
        </div>
    )
}

export default Menu