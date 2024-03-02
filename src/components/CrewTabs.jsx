import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CrewTabsStyle.css"


const CrewTabs = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <>

<Slider {...settings} className='w-full'>

  <div>
  <div className='mx-auto w-[80%] max-lg:w-[90%] max-[850px]:w-[95%]'>
<div className='flex max-[470px]:flex-col-reverse flex-col md:flex-row items-end max-md:items-center max-md:justify- justify-between'>
<div className="max-md:mt-7 flex flex-col md:mb-[200px] max-md:items-center max-md:text-center max-md:w-[80%] mx-auto md:w-[350px] lg:w-[445px]">
        <h3 className='text-[#979797]'>Commander</h3>
        <h4 className='md:mb-[60px]'>Douglas Hurley</h4>
        <p className='text-[#D0D6F9] leading-7 max-[420px]:h-[150px] max-[768px]:h-[90px] h-[90px] '>
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</p>
      </div>
      <div className="relative w-[568px] h-[700px] max-md:w-[456px] max-md:h-[585px] max-md:mt-[31px] max-[470px]:h-[300px] max-[470px]:w-[300px]">
        <img className='w-full h-full ' src="\crew\image-douglas-hurley.png" alt="" />
        <div className="hidden max-[470px]:block absolute w-[96%] opacity-15 h-[1px] bg-[#979797] left-[2%] right-[2%] "></div>
      </div>
    </div>
    </div>
    </div>

    {/* 2 */}

    <div>
  <div className='mx-auto w-[80%] max-lg:w-[90%] max-[850px]:w-[95%]'>
<div className='flex max-[470px]:flex-col-reverse flex-col md:flex-row items-end max-md:items-center max-md:justify- justify-between'>
<div className="max-md:mt-7 flex flex-col md:mb-[200px] max-md:items-center max-md:text-center max-md:w-[80%] mx-auto md:w-[350px] lg:w-[445px]">
        <h3 className='text-[#979797]'>Mission Specialist</h3>
        <h4 className='md:mb-[60px]'>Mark Shuttleworth</h4>
        <p className='text-[#D0D6F9] leading-7 max-[420px]:h-[150px] max-[768px]:h-[90px] h-[90px] '>
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist..</p>
      </div>
      <div className="relative w-[568px] h-[700px] max-md:w-[456px] max-md:h-[585px] max-md:mt-[31px] max-[470px]:h-[300px] max-[470px]:w-[300px]">
        <img className='w-full h-full ' src="\crew\image-mark-shuttleworth.png" alt="" />
        <div className="hidden max-[470px]:block absolute w-[96%] opacity-15 h-[1px] bg-[#979797] left-[2%] right-[2%] "></div>
      </div>
    </div>
    </div>
    </div>
   


    <div>
  <div className='mx-auto w-[80%] max-lg:w-[90%] max-[850px]:w-[95%]'>
<div className='flex max-[470px]:flex-col-reverse flex-col md:flex-row items-end max-md:items-center max-md:justify- justify-between'>
<div className="max-md:mt-7 flex flex-col md:mb-[200px] max-md:items-center max-md:text-center max-md:w-[80%] mx-auto md:w-[350px] lg:w-[445px]">
        <h3 className='text-[#979797]'>Pilot</h3>
        <h4 className='md:mb-[60px]'>Victor Glover</h4>
        <p className='text-[#D0D6F9] leading-7 max-[420px]:h-[150px] max-[768px]:h-[90px] h-[90px] '>
        Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64.</p>
      </div>
      <div className="relative w-[568px] h-[700px] max-md:w-[456px] max-md:h-[585px] max-md:mt-[31px] max-[470px]:h-[300px] max-[470px]:w-[300px]">
        <img className='w-full h-full ' src="\crew\image-victor-glover.png" alt="" />
        <div className="hidden max-[470px]:block absolute w-[96%] opacity-15 h-[1px] bg-[#979797] left-[2%] right-[2%] "></div>
      </div>
    </div>
    </div>
    </div>




    <div>
  <div className='mx-auto w-[80%] max-lg:w-[90%] max-[850px]:w-[95%]'>
<div className='flex max-[470px]:flex-col-reverse flex-col md:flex-row items-end max-md:items-center max-md:justify- justify-between'>
<div className="max-md:mt-7 flex flex-col md:mb-[200px] max-md:items-center max-md:text-center max-md:w-[80%] mx-auto md:w-[350px] lg:w-[445px]">
        <h3 className='text-[#979797]'>Flight Engineer</h3>
        <h4 className='md:mb-[60px]'>Anousheh Ansari</h4>
        <p className='text-[#D0D6F9] leading-7 max-[420px]:h-[150px] max-[768px]:h-[90px] h-[90px] '>
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
      </div>
      <div className="relative w-[568px] h-[700px] max-md:w-[456px] max-md:h-[585px] max-md:mt-[31px] max-[470px]:h-[300px] max-[470px]:w-[300px]">
        <img className='w-full h-full ' src="\crew\image-anousheh-ansari.png" alt="" />
        <div className="hidden max-[470px]:block absolute w-[96%] opacity-15 h-[1px] bg-[#979797] left-[2%] right-[2%] "></div>
      </div>
    </div>
    </div>
    </div>

    </Slider>
    </>
  )
}

export default CrewTabs
