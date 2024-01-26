import React from 'react'

const Title = ({text}) => {
  return (
    <div>
        <h2 className='title'>{text}</h2>
        <h4 className='mini-title'>Chapter 1</h4>
        <h2 className='title-underline'></h2>
    </div>
  )
}

export default Title