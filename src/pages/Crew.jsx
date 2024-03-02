import React from 'react'
import CrewTabs from '../components/CrewTabs'

const Crew = () => {
  return (
    <div className='crew text-white'>
    <div className="w-100% h-[100%] mx-auto flex flex-col justify-center items-start">
      <h5 className='uppercase font-light ml-[10%] max-lg:ml-[5%] max-[850px]:ml-[2.5%] mt-[150px] md:mt-[282px]' >
        <span className='text-[#979797] mr-4 font-bold'>02</span>
        meet your crew</h5>
        <div className="w-full">
        <CrewTabs/>
        </div>
    </div>
  </div>
  )
}

export default Crew
