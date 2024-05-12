import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='htext d-flex gap-3 d-flex justify-content-center'>
      <i className="hicon bi bi-star-fill  "></i>
      <p className='text-white fs-5'>WELCOME  TO  VISA  ADVISOR</p>
      
      <i className="hicon bi bi-star-fill  "></i>
      </div>

      <div className='hhtext '>
        <h1 className='hhhtext'>EXPERT STUDENT</h1>
        <h1 className='hhhhtext m-auto'>VISA.HELP</h1>
        
      </div>
      
      <button  type="button" class=" hbtn btn btn-primary rounded-pill px-4 ">Book Appintment Today</button>
  
     
      <div className='d-flex justify-content-center'>
        <img className='herop ' src={assets.herop} alt="" />

        
        
      </div>

      

      
      
     
        
    </div>
    
  )
}

export default Hero