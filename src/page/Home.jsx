import React from 'react'
import Navbar from '../component/Navbar'
import Hero from './Hero'
import Location from './Location'
import PopularCar from './PopularCar'

const Home = () => {
  return (
    <div className='container mx-auto md:px-8 px-5 py-5 font-Jakarta  md:mt-10 mt-5'>
      <Hero/>
      <Location/>
      <PopularCar/>
    </div>
  )
}

export default Home