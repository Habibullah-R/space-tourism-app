import React,{useState} from 'react'
import './HeaderStyle.css'

const destinationOptions = (props) => {

  const [toggle,setToggle] = useState(1)

  const toggleActive = (id)=>{
    setToggle(id)
    props.onClick(id)
  }

  return (
    <div className='nav-text'>
      <ul className='uppercase flex items-center gap-5  tracking-[2.7px]'>
        <li>
            <a className={props.number === '1'?'active before:bottom-[-12px]':"before:bottom-[-12px]"} onClick={()=>toggleActive(1)}>Moon</a>
            </li>
            <li>
            <a className={props.number === '2'?'active before:bottom-[-12px]':"before:bottom-[-12px]"} onClick={()=>toggleActive(2)}>Mars</a>
            </li>
            <li>
            <a className={props.number === '3'?'active before:bottom-[-12px]':"before:bottom-[-12px]"} onClick={()=>toggleActive(3)}>Europa</a>
            </li>
            <li>
            <a className={props.number === '4'?'active before:bottom-[-12px]':"before:bottom-[-12px]"} onClick={()=>toggleActive(4)}>Titan</a>
            </li>
      </ul>
    </div>
  )
}

export default destinationOptions
