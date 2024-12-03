import React, { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import bannerimg from '../../../assets/menu/banner3.jpg'
import dessertimg from '../../../assets/menu/dessert-bg.jpeg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import pizzaimg from '../../../assets/menu/pizza-bg.jpg'
import soupimg from '../../../assets/menu/soup-bg.jpg'
import Cover from '../../../Shared/Cover/Cover'
import MenuCategory from '../MenuCategory/MenuCategory'
import useMenu from '../../../hooks/useMenu'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
const Menu = () => {
const    [menu]= useMenu()
const dessert = menu.filter(item=> item.category === 'dessert')
const soup = menu.filter(item=> item.category === 'soup')
const pizza = menu.filter(item=> item.category === 'pizza')
const offered = menu.filter(item=> item.category === 'offered')
const salad = menu.filter(item=> item.category === 'salad')

    return (

        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <Cover img={bannerimg}
            title='Our Menu'
            />
            <SectionTitle subHeading="Don't Miss" heading='Todays Offer' />
            <MenuCategory items={offered}/>
            <MenuCategory items={dessert}
            title="Dessert"
            img={dessertimg}/>
            <MenuCategory items={salad}
            title="Salad"
            img={saladimg}/>
            <MenuCategory items={pizza}
            title="Pizza"
            img={pizzaimg}/>
            <MenuCategory items={soup}
            title="Soup"
            img={soupimg}/>
              
        </div>
    )
}

export default Menu