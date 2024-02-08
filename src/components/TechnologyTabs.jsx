import React , {useState} from 'react'
import TechnologyOptions from './TechnologyOptions'

const TechnologyTabs = () => {

  const [toggle , setToggle] = useState(1)

const getData = (data)=>{
  setToggle(data)
}


  return (

    <>

    <div className={ toggle === 1 ? 'flex max-md:gap-10 max-md:w-full max-md:flex-col md:justify-between items-center max-md:mt-10' : 'hidden'}>
      <TechnologyOptions number={toggle === 1 ? '1' : " "} onClick={getData}/>
      <div className="w-[303px] max-md:order-3 max-md:w-[80%] lg:w-[35%] max-md:text-center">
        <p className="text-[16px] text-[#D0D6F9] uppercase">The terminology...</p>
        <h4 className='uppercase'>Launch vehicle</h4>
        <p className="h-[160px]">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!</p>
      </div>
      <div className="max-md:w-full max-md:h-full max-lg:w-[380px] max-lg:h-[415px]">
        <img className='max-md:hidden w-full h-full' src="\technology\image-launch-vehicle-portrait.jpg" alt="" />
        <img className='max-[420px]:h-[170px] max-md:h-[310px] max-[420px]:object-cover max-md:block hidden object-none max-md:order-1' src="\technology\image-launch-vehicle-landscape.jpg" alt="" />
      </div>
    </div>



<div className={ toggle === 2 ? 'flex max-md:gap-10 max-md:w-full max-md:flex-col md:justify-between items-center max-md:mt-10' : 'hidden'}>
      <TechnologyOptions number={toggle === 2 ? '2' : " "} onClick={getData}/>
      <div className="w-[303px] max-md:order-3 max-md:w-[80%] lg:w-[35%] max-md:text-center">
        <p className="text-[16px] text-[#D0D6F9] uppercase">The terminology...</p>
        <h4 className='uppercase'>Spaceport</h4>
        <p className="h-[160px]">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.</p>
      </div>
      <div className="max-md:w-full max-md:h-full max-lg:w-[380px] max-lg:h-[415px]">
        <img className='max-md:hidden w-full h-full' src="\technology\image-spaceport-portrait.jpg" alt="" />
        <img className='max-[420px]:h-[170px] max-md:h-[310px] max-[420px]:object-cover max-md:block hidden object-none max-md:order-1' src="\technology\image-spaceport-landscape.jpg" alt="" />
      </div>
    </div>



<div className={ toggle === 3 ? 'flex max-md:gap-10 max-md:w-full max-md:flex-col md:justify-between items-center max-md:mt-10' : 'hidden'}>
      <TechnologyOptions number={toggle === 3 ? '3' : " "} onClick={getData}/>
      <div className="w-[303px] max-md:order-3 max-md:w-[80%] lg:w-[35%] max-md:text-center">
        <p className="text-[16px] text-[#D0D6F9] uppercase">The terminology...</p>
        <h4 className='uppercase'>Space capsule</h4>
        <p className="h-[160px]">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.</p>
      </div>
      <div className="max-md:w-full max-md:h-full max-lg:w-[380px] max-lg:h-[415px]">
        <img className='max-md:hidden w-full h-full' src="\technology\image-space-capsule-portrait.jpg" alt="" />
        <img className='max-[420px]:h-[170px] max-md:h-[310px] max-md:block hidden max-[420px]:object-cover object-none max-md:order-1' src="\technology\image-space-capsule-landscape.jpg" alt="" />
      </div>
    </div>

    </>
  )
}

export default TechnologyTabs
