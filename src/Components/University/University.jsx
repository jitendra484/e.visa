import React from 'react'
import './University.css'
import { assets } from '../../assets/assets'

const University = () => {
  return (
    <div className='ask py-5'>
        <div className='utit py-4'>
        <div className='about d-flex justify-content-center gap-3 py-4 '>
        <i className=" hicon bi bi-star-fill  "></i>
      <p className='free text-dark  fw-semibold'>TOP UNIVERSITY</p>
      
      <i className="hicon bi bi-star-fill  "></i>

      
      </div>

        </div>

        <div className="row px-4">
            <div className='col-lg-3'>
                <img className=' university w-100 border' src={assets.br_01} alt="" />

            </div>
            <div className='col-lg-3'>
                <img className=' university w-100 border' src={assets.br_02} alt="" />

            </div>
            <div className='col-lg-3'>
                <img className=' university w-100 border' src={assets.br_03} alt="" />

            </div>
            <div className='col-lg-3'>
                <img className=' university w-100 border' src={assets.br_04} alt="" />

            </div>
        </div>
        <div className="row px-4">
            <div className='col-lg-3'>
                <img className=' university w-100 border' src={assets.br_05} alt="" />

            </div>
            <div className='col-lg-3'>
                <img className=' university w-100 border' src={assets.br_06} alt="" />

            </div>
            <div className='col-lg-3'>
                <img className=' university w-100 border' src={assets.br_07} alt="" />

            </div>
            <div className='col-lg-3'>
                <img className=' university w-100 border' src={assets.br_08} alt="" />

            </div>
        </div>

    </div>
  )
}

export default University