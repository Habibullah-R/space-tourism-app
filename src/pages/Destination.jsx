import React from 'react'
import DestinationTabs from '../components/DestinationTabs'
// import Mars from '../components/Mars'
// import Europa from '../components/Europa'
// import Titan from '../components/Titan'

const Destination = () => {
  return (
    <div className='destination text-white'>
      <div className="w-[100%] md:w-[80%] h-[100%] mx-auto flex flex-col justify-center items-start">
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
