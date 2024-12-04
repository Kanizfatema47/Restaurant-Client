import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../../Shared/Cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu'
import FoodCard from '../../../components/SectionTitle/FoodCard/FoodCard';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const { category } = useParams()

  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex)

  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  const salad = menu.filter(item => item.category === 'salad')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>

      <Cover img={orderCover} title='Order Food' />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab> Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad} />

        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />

        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />

        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />

        </TabPanel>
        <TabPanel>
          <OrderTab items={offered} />

        </TabPanel>
      </Tabs>


    </div>


  )
}

export default Order