import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './HeaderStyle.css'

const Header = () => {
  const [close ,setClose] = useState(true)

  const handleClose = ()=>{
    setClose(true)
  }
  const handleOpen = ()=>{
    setClose(false)
  }

  return (
      <div className="z-30 flex h-[96px] w-full absolute top-0 md:top-[40px] items-center justify-between">
        <div className="w-[42.4%]">
            <img src="../shared/logo.svg" className='ml-[3.81%]' alt="" />
        </div>

        <div className="absolute hidden max-sm:block top-[35px] hover:cursor-pointer right-[20px]"
          onClick={handleOpen}>
              <img src="\shared\icon-hamburger.svg" alt="" />
            </div>

        <div className={close === true ? "navbar absolute right-[-100%] top-0 w-[50vw] h-[100vh] flex sm:top-0 sm:right-0 sm:items-center sm:justify-center sm:w-[75%] md:w-[57.6%] border-transarent sm:h-full backdrop-blur-[81.55px] sm:relative brightness-150" :
         "navbar absolute right-0 top-0 w-[50vw] h-[100vh] flex sm:items-center sm:justify-center sm:w-[75%] md:w-[57.6%] border-transarent sm:h-full backdrop-blur-[81.55px] sm:relative brightness-150"   }>
          <div className="hidden md:block h-[1px] opacity-50 bg-[#979797] w-[57%] absolute top-[50%] left-[-52%]">
          </div>

          <div className="absolute hidden max-sm:block top-[35px] hover:cursor-pointer right-[20px]"
          onClick={handleClose}>
              <img src="\shared\icon-close.svg" alt="" />
            </div>


          <ul className='flex flex-col mt-24 ml-5 sm:ml-0 sm:mt-0 gap-5 sm:gap-0 sm:flex-row sm:justify-between  sm:w-[85%] xl:w-[65%] uppercase max-sm:w-full'>
            

              <li className='text-sm font-light text-skin'>
                <NavLink activeclassname="active" className='tracking-[2.7px] flex' 
                to='/'
                onClick={handleClose} >
                <span className='hidden lg:block max-sm:block font-bold mr-[8px]'>00</span> Home
                </NavLink>
              </li>
              <li className='text-sm font-light text-skin'>
                <NavLink activeclassname="active" className='tracking-[2.7px] flex'  
                onClick={handleClose} 
                to='/destination'>
                <span className='hidden lg:block max-sm:block font-bold mr-[8px]'>01</span> Destination
                </NavLink>
              </li>
              <li className='text-sm font-light text-skin'>
                <NavLink activeclassname="active" className='tracking-[2.7px] flex'  
                onClick={handleClose} 
                to='/crew'>
                <span className='hidden lg:block max-sm:block font-bold mr-[8px]'>02</span> Crew
                </NavLink>
              </li>
              <li className='text-sm font-light text-skin'>
                <NavLink activeclassname="active" className='tracking-[2.7px] flex'  
                to='/technology'
                onClick={handleClose} >
                <span className='hidden lg:block max-sm:block font-bold mr-[8px]'>03</span> Technology
                </NavLink>
              </li>
            </ul>


        </div>
      </div>
  )
}

export default Header
