import React from 'react'
import ImageItem from './ImageItem'


const Menu = ({items}) => {
  return (
   <div className='section-center'>
    {items.map((item) => {
        return <ImageItem key={item.id} {...item} />
    })}
   </div>
  )
}

export default Menu