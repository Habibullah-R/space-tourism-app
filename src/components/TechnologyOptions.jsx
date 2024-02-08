import React from 'react'
import { useState } from 'react'

const TechnologyOptions = (props) => {

  const [toggle,setToggle] = useState(1)

  const toggleActive = (id)=>{
    setToggle(id)
    props.onClick(id)
  }


  return (
    <div className='flex flex-row md:flex-col gap-8 max-md:order-2'>
      <h3 onClick={()=>toggleActive(1)} className={props.number === '1' ? "bg-white text-black border-white border-[1px] rounded-[50%] max-lg:w-[60px] max-lg:h-[60px] h-[80px] w-[80px] flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-black transition"
      : 
      "border-[#979797] border-[1px] rounded-[50%] max-lg:w-[60px] max-lg:h-[60px] h-[80px] w-[80px] flex items-center justify-center hover:cursor-pointer hover:border-white transition"}>1</h3>
      <h3 onClick={()=>toggleActive(2)} className={props.number === '2' ? "bg-white text-black border-white border-[1px] rounded-[50%] max-lg:w-[60px] max-lg:h-[60px] h-[80px] w-[80px] flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-black transition"
      : 
      "border-[#979797] border-[1px] rounded-[50%] max-lg:w-[60px] max-lg:h-[60px] h-[80px] w-[80px] flex items-center justify-center hover:cursor-pointer hover:border-white transition"}>2</h3>
      <h3 onClick={()=>toggleActive(3)} className={props.number === '3' ? "bg-white text-black border-white border-[1px] rounded-[50%] max-lg:w-[60px] max-lg:h-[60px] h-[80px] w-[80px] flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-black transition"
      : 
      "border-[#979797] border-[1px] rounded-[50%] max-lg:w-[60px] max-lg:h-[60px] h-[80px] w-[80px] flex items-center justify-center hover:cursor-pointer hover:border-white transition"}>3</h3>
      
    </div>
  )
}

export default TechnologyOptions
