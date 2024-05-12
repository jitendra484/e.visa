import React from 'react'
import './Freevisa.css'
import { assets } from '../../assets/assets'

const Freevisa = () => {
  return (
    <div className='aa'>
        <div className="container">
            <div className=" row">
                <div className='col-lg-4'>
                    <img className='cta' src={assets.cta_img} alt="" />


                </div>



                <div className=' freevisa col-lg-8 ' >
                <div className="ftitle">
        <div className='about d-flex justify-content-start gap-3 py-4 '>
        <i className=" hicon bi bi-star-fill  "></i>
      <p className='free text-white  fw-semibold'>FREE VISA</p>
      
      <i className="hicon bi bi-star-fill  "></i>

      
      </div>

      <div className='d-flex justify-content-between'>
        <div className='text-white'>
        <h1>Students and Experts Love Us
            100% Success Rate</h1>
            <a href="">More Services</a><i className="bi bi-arrow-right-circle-fill py-2"></i>
        </div>
        


        </div>
        </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Freevisa