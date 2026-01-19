import React from 'react'
import Navbar from '../component/Navbar'
import Hero from './Hero'
import Location from './Location'

const Home = () => {
  return (
    <div className='container mx-auto px-8 py-5 font-Jakarta  md:mt-10 mt-5'>
      <Hero/>
      <Location/>
    </div>
  )
}

export default Home