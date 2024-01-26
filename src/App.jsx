import { useState } from "react"
import images from "./data"
import Title from "./Title"
import Menu from "./Menu"
import img2 from './images/02.png';

function App() {
  const [image, setImage] =  useState(images)
  return (
    <section className="menu">
      <Title text='My Dress Up Darling' />
      <img src={img2} alt="" className='img' />
      <Menu items={image} />
    </section>
  )
}

export default App
