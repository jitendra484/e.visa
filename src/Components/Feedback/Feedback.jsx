import React from 'react'
import './Feedback.css'
import { assets } from '../../assets/assets'

const Feedback = () => {
  return (
    <div className='feedback py-5 px-5'>
         <div className='about d-flex justify-content-start gap-3 py-4 '>
        <i className=" hicon bi bi-star-fill  "></i>
      <p className='free text-white  fw-semibold'>POPULAR</p>
      
      <i className="hicon bi bi-star-fill  "></i>

      
      </div>
      <div className="row">
      <div className='col-lg-10'>
      <div className='fw-bold d-flex justify-content-between'>
        <h1 className='text-white fw-bold'>Happy Student Feedback</h1>
        <h1 className='fd'>48</h1>
        </div>
        
      </div>
      <div className='col-lg-2 px-2'>
      <p className='text-white'>RATING FROM
          OUR CLIENTS</p>
          </div>
          </div>


          <div className=" student row py-5 px-5">
            <div className='img1 col-lg-4'>
              <div className='pcon text-white'>
                <img className='tquote' src={assets.t_quote} alt="" />
                <p className='py-1'>AMAERICA-BOUND STUDENT</p>
                <p className='py-5 fs-4 lh-2'>
                 "Unparalleled Student Visa Service: Delivering Expertise, Personalized Guidance, and Reliable, Timely Updates for a Seamless and Process"</p>

                 <h5>Gladriao Gomeza</h5>
              </div>
              
              
            </div>
            <div className='img2 col-lg-4'>
            <div className='pcon text-white'>
                <img className='tquote' src={assets.t_quote} alt="" />
                <p className='py-1'>CANADA-BOUND STUDENT</p>
                <p className='py-5 fs-4 lh-2'>
                "Profound Gratitude for Exceptional Student Visa Assistance: Painless Application and an Incredible Educational Journey in the UK"</p>

                 <h5>Gladriao Gomeza</h5>
              </div>
              
            </div>
            <div className=' img3 col-lg-4'>
            <div className='pcon text-white'>
                <img className='tquote' src={assets.t_quote} alt="" />
                <p className='py-1'>UK-BOUND STUDENT</p>
                <p className='py-5 fs-4 lh-2'>
                 "Unparalleled Student Visa Service: Delivering Expertise, Personalized Guidance, and Reliable, Timely Updates for a Seamless and Process"</p>

                 <h5>Olabira Lahardia</h5>
              </div>
              
            </div>
          </div>


          

    </div>
  )
}

export default Feedback