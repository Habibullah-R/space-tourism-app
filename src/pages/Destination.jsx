import React from 'react'
import DestinationTabs from '../components/DestinationTabs'

const Destination = () => {
  return (
    <div className='destination text-white'>
      <div className="max-lg:w-[95%] w-[85%] h-[100%] mx-auto flex flex-col justify-center items-start">
        <h5 className='uppercase font-light mt-[150px]' >
          <span className='text-[#979797] mr-4 font-bold'>01</span>
          pick your destination</h5>
          <div className="w-full">
            <DestinationTabs/>
          </div>
      </div>
    </div>
  )
}

export default Destination
