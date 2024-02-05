import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderStyle.css'

const Header = () => {
  return (
      <div className="z-10 flex h-[96px] w-full absolute top-0 md:top-[40px] items-center justify-between">
        <div className="w-[42.4%]">
            <img src="../shared/logo.svg" className='ml-[3.81%]' alt="" />
        </div>
        <div className="flex items-center justify-center w-[57.6%] border-transarent h-full backdrop-blur-[81.55px] relative brightness-150">
          <div className="h-[1px] opacity-50 bg-[#979797] w-[57%] absolute top-[50%] left-[-52%]">
          </div>

          <ul className='flex justify-between w-[85%] xl:w-[65%] uppercase'>
              <li className='text-sm font-light text-skin'>
                <NavLink activeclassname="active" className='tracking-[2.7px] flex' to='/'>
                <span className='hidden lg:block max-[375px]:block font-bold mr-[8px]'>00</span> Home
                </NavLink>
              </li>
              <li className='text-sm font-light text-skin'>
                <NavLink activeclassname="active" className='tracking-[2.7px] flex'  to='/destination'>
                <span className='hidden lg:block max-[375px]:block font-bold mr-[8px]'>01</span> Destination
                </NavLink>
              </li>
              <li className='text-sm font-light text-skin'>
                <NavLink activeclassname="active" className='tracking-[2.7px] flex'  to='/crew'>
                <span className='hidden lg:block max-[375px]:block font-bold mr-[8px]'>02</span> Crew
                </NavLink>
              </li>
              <li className='text-sm font-light text-skin'>
                <NavLink activeclassname="active" className='tracking-[2.7px] flex'  to='/technology'>
                <span className='hidden lg:block max-[375px]:block font-bold mr-[8px]'>03</span> Technology
                </NavLink>
              </li>
            </ul>


        </div>
      </div>
  )
}

export default Header
