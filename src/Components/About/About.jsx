import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

export const About = () => {
  return (
    <div>
        <div className='about d-flex justify-content-center gap-3 py-5 '>
        <i className="hicon bi bi-star-fill  "></i>
      <p className='text-dark fw-semibold'>A B O U T - U S</p>
      
      <i className="hicon bi bi-star-fill  "></i>
      </div>

      <div className="atit">
        
        <h1 className=' atit1 fw-bold  px-4'>Since 1998 - Unparalleled Comprehensive
Student Visa Guide</h1>
<div className="row py-5">
            <div className='col-lg-9'>
<p className='px-5 fs-4'>Expert advice, step-by-step instructions, and insider tips to help you navigate the student visa application process with
confidence and success Simplified Steps, Proven Strategies, Unwavering Support!"</p>
       <div className='row d-flex justify-content-evenly align-items-center py-5'>
        <div className='col-lg-4'>
        <button  type="button" class=" abtn btn btn-primary rounded-pill px-4 py-2 fs-4 ">Know More About Us</button>

        </div>
        <div className='col-lg-6 '>
            <p className='fs-5'>Unlock Your Educational Journey Abroad: The Essential Student Visa GuideYour Gateway to Global Learning</p>
            <a href="">Explore More About US</a>


        </div>
         
       </div>
      </div>
      <div className='col-lg-3'>
        <img className='aimg' src={assets.about_img2} alt="" />
      </div>

      
      </div>
      
    </div>
    </div>
  )
}
