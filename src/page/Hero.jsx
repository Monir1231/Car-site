import React from 'react'
import bgImage1 from '/public/bg-1.png'
import bgImage2 from '/public/bg-2.png'
import HeroImg1 from '/public/hero-img-1.png'
import HeroImg2 from '/public/hero-img-2.png'
import Common from '../component/Common'
import { Button1, Button2 } from '../component/Button'

const Hero = () => {
  return (
    <div className=' flex items-center justify-between gap-8'>
       <div className=' w-full mx-auto md:w-[640px] md:h-[360px] h-[232px] bg-[#54A6FF] rounded-lg relative '>
        <div className=' absolute top-0 left-0  w-full h-full bg-cover ' style={{ backgroundImage: `url(${bgImage1})` }}>
          <div className=' px-4 py-6'>
            <Common Head="The Best Platform  for Car Rental"/>
            <Common des="Ease of doing a car rental safely and reliably. Of course at a low price."/>
           <div className='mt-2'>
             <Button1  text='Rental Car'/>
           </div>
           <div className=' flex items-center justify-center mt-2'>
            <img className='md:w-fit w-[196px]' src={HeroImg1}/>
           </div>
          </div>
        </div>
       </div> 

        <div className='md:flex hidden md:w-[640px] md:h-[360px]  bg-primary rounded-lg relative '>
        <div className=' absolute top-0 left-0  w-full h-full bg-cover ' style={{ backgroundImage: `url(${bgImage2})` }}>
          <div className=' px-4 py-6'>
            <Common Head="Easy way to rent a car at a low price"/>
            <Common des="Providing cheap car rental services and safe and comfortable facilities."/>
           <div className='mt-2 '>
             <Button2 text='Rental Car'/>
           </div>
           <div className=' flex items-center justify-center mt-2'>
            <img className='md:w-fit w-[196px]' src={HeroImg2}/>
           </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Hero