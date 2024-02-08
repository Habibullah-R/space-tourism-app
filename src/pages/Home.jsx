import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home text-center md:text-left text-white flex flex-col md:flex-row items-center justify-center sm:justify-around gap-10">
      <div className="w-[445px] mt-[60px] sm:mt-[200px] md:mt-[150px]">
        <h5 className='uppercase'>So, you want to travel to</h5>
        <h1>SPACE</h1>
        <p className='w-[70%] sm:w-[445px] mx-auto'>Let's face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we'll give you a truly out of this world experience!</p>
      </div>
      <div className='md:mt-[200px]'>
        <Link className='border relative z-10 flex items-center justify-center rounded-[50%] hover:pointer w-[150px] h-[150px] sm:w-[230px] sm:h-[230px] lg:w-[274px] lg:h-[274px] bg-white text-black' to='/destination'>
        <h3 >Explore</h3>
        </Link>
      </div>
    </div>
  )
}

export default Home
