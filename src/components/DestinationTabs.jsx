import React, { useState } from 'react'
import DestinOpt from './destinationOptions'




const Moon = () => {
  
  const [toggle , setToggle] = useState(1)

const getData = (data)=>{
  setToggle(data)
}
  
  return (
    <>
    <div className={toggle === 1 ? 'flex flex-col md:flex-row items-center justify-around gap-2 w-full mt-8' : 'hidden'}>
      <div className="text-white max-[420px]:w-[170px] max-[420px]:h-[170px] w-[300px] h-[300px] md:h-[350px] md:w-[350px] lg:h-[445px] lg:w-[445px]">
        <img className='w-full h-full' src="\destination\image-moon.png" alt="" />
      </div>
      <div className="max-md:mt-7 flex flex-col max-md:items-center max-md:text-center max-md:w-[80%] md:w-[350px] lg:w-[445px]">
        <DestinOpt number={toggle === 1 ? '1' : " "} onClick={getData}/>
        <h2>MOON</h2>
        <p className='text-[#D0D6F9] leading-7 max-[420px]:h-[150px] max-[768px]:h-[90px] h-[90px] '>See our planet as you've never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you're there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.</p>
  <span className="h-[1px] w-full bg-[#383B4B] mt-16"></span>
  <div className="flex max-[420px]:flex-col max-[420px]:gap-8 max-md:justify-around mt-5 gap-20">
  <div>
    <p className="text-[14px] tracking-[2.36px] text-[#D0D6F9]">AVG. DISTANCE</p>
    <h5 className='uppercase'>384,400 km</h5>
  </div>
  <div>
    <p className="text-[14px] tracking-[2.36px] text-[#D0D6F9] uppercase">Est. travel time</p>
    <h5 className='uppercase'>3 days</h5>
  </div>
  </div>
      </div>
    </div>


    <div className={toggle === 2 ? 'flex flex-col md:flex-row items-center justify-around gap-2 w-full mt-8' : 'hidden'}>
      <div className="text-white max-[420px]:w-[170px] max-[420px]:h-[170px] w-[300px] h-[300px] md:h-[350px] md:w-[350px] lg:h-[445px] lg:w-[445px]">
        <img className='w-full h-full' src="\destination\image-mars.png" alt="" />
      </div>
      <div className="max-md:mt-7 flex flex-col max-md:items-center max-md:text-center max-md:w-[80%] md:w-[350px] lg:w-[445px]">
        <DestinOpt number={toggle === 2 ? '2' : " "} onClick={getData}/>
        <h2>MARS</h2>
        <p className='text-[#D0D6F9] leading-7 max-[420px]:h-[150px] max-[768px]:h-[90px] h-[90px] '>Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It's two and a half times 
  the size of Everest!</p>
  <span className="h-[1px] w-full bg-[#383B4B] mt-16"></span>
  <div className="flex max-[420px]:flex-col max-[420px]:gap-8 max-md:justify-around mt-5 gap-20">
  <div>
    <p className="text-[14px] tracking-[2.36px] text-[#D0D6F9]">AVG. DISTANCE</p>
    <h5 className='uppercase'>225 mil. km</h5>
  </div>
  <div>
    <p className="text-[14px] tracking-[2.36px] text-[#D0D6F9] uppercase">Est. travel time</p>
    <h5 className='uppercase'>9 months</h5>
  </div>
  </div>
      </div>
    </div>



    <div className={toggle === 3 ? 'flex flex-col md:flex-row items-center justify-around gap-2 w-full mt-8' : 'hidden'}>
      <div className="text-white max-[420px]:w-[170px] max-[420px]:h-[170px] w-[300px] h-[300px] md:h-[350px] md:w-[350px] lg:h-[445px] lg:w-[445px]">
        <img className='w-full h-full' src="\destination\image-europa.png" alt="" />
      </div>
      <div className="max-md:mt-7 flex flex-col max-md:items-center max-md:text-center max-md:w-[80%] md:w-[350px] lg:w-[445px]">
        <DestinOpt number={toggle === 3 ? '3' : " "} onClick={getData}/>
        <h2>EUROPA</h2>
        <p className='text-[#D0D6F9] leading-7 max-[420px]:h-[150px] max-[768px]:h-[90px] h-[90px] '>The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.</p>
  <span className="h-[1px] w-full bg-[#383B4B] mt-16"></span>
  <div className="flex max-[420px]:flex-col max-[420px]:gap-8 max-md:justify-around mt-5 gap-20">
  <div>
    <p className="text-[14px] tracking-[2.36px] text-[#D0D6F9]">AVG. DISTANCE</p>
    <h5 className='uppercase'>628 mil. km</h5>
  </div>
  <div>
    <p className="text-[14px] tracking-[2.36px] text-[#D0D6F9] uppercase">Est. travel time</p>
    <h5 className='uppercase'>3 years</h5>
  </div>
  </div>
      </div>
    </div>




    <div className={toggle === 4 ? 'flex flex-col md:flex-row items-center justify-around gap-2 w-full mt-8' : 'hidden'}>
      <div className="text-white max-[420px]:w-[170px] max-[420px]:h-[170px] w-[300px] h-[300px] md:h-[350px] md:w-[350px] lg:h-[445px] lg:w-[445px]">
        <img className='w-full h-full' src="\destination\image-titan.png" alt="" />
      </div>
      <div className="max-md:mt-7 flex flex-col max-md:items-center max-md:text-center max-md:w-[80%] md:w-[350px] lg:w-[445px]">
        <DestinOpt number={toggle === 4 ? '4' : " "} onClick={getData}/>
        <h2>TITAN</h2>
        <p className='text-[#D0D6F9] leading-7 max-[420px]:h-[150px] max-[768px]:h-[90px] h-[90px] '>The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.</p>
  <span className="h-[1px] w-full bg-[#383B4B] mt-16"></span>
  <div className="flex max-[420px]:flex-col max-[420px]:gap-8 max-md:justify-around mt-5 gap-20">
  <div>
    <p className="text-[14px] tracking-[2.36px] text-[#D0D6F9]">AVG. DISTANCE</p>
    <h5 className='uppercase'>1.6 bil. km</h5>
  </div>
  <div>
    <p className="text-[14px] tracking-[2.36px] text-[#D0D6F9] uppercase">Est. travel time</p>
    <h5 className='uppercase'>7 years</h5>
  </div>
  </div>
      </div>
    </div>

    </>
  )
}

export default Moon
