import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUsSection'
import { homeObjOne } from '../components/AboutUsSection/Data'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <AboutUsSection {...homeObjOne} />
    </>
  )
}

export default Home