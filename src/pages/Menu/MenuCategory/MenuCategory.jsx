import React from 'react'
import MenuItem from '../../../Shared/MenuItem/MenuItem'
import Cover from '../../../Shared/Cover/Cover'

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className='mx-auto grid md:grid-cols-2 gap-10'>
        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
          />


          )
        }
      </div>
    </div>
  )
}

export default MenuCategory