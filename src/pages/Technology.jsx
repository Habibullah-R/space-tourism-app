import React from 'react'
import TechnologyTabs from '../components/TechnologyTabs'

const Technology = () => {
  return (
    <div className='technology max-[1440px]:h-[1024px] max-[1024px]:h-[100vh] max-[420px]:h-[130vh] max-[767px]:h-[1024px] text-white'>
      <div className="gap-[2px] max-md:ml-0 max-md:w-full lg:w-[92.5%] h-[100%] max-[830px]:w-[100%] max-[830px]:ml-[3%] ml-[7.5%] flex flex-col justify-center items-start">
        <h5 className='uppercase font-light max-md:ml-4 mt-[150px]' >
          <span className='text-[#979797] mr-4 font-bold'>03</span>
          space launch 101</h5>
          <div className="w-full">
            <TechnologyTabs/>
          </div>
      </div>
    </div>
  )
}

export default Technology
