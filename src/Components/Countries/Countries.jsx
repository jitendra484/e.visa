import React from 'react'
import './Countries.css'
import { assets } from '../../assets/assets'

const Countries = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          
          <div className='about d-flex justify-content-center gap-3 py-4 '>
        <i className=" hicon bi bi-star-fill  "></i>
      <p className='free text-dark  fw-semibold'>COUNTRIES</p>
      
      <i className="hicon bi bi-star-fill  "></i>

      
      </div>

        
        </div>
        <div className="row">
          <div className='col-lg-3'></div>
          <div className='col-lg-6 text-center fw-bold '>
            <h1 className='fc'>Best Countries to Study
                      Abroad</h1>
          </div>
          <div className='col-lg-3'></div>

        </div>
        <div className='flag d-flex gap-5 py-5 '>
          <div className="can">
            <img src={assets.flg_01} alt="" />
            <h5 className='px-5 py-2'>Canada</h5>
          </div>
          <div className="can">
            <img src={assets.flg_02} alt="" />
            <h5 className='px-5 py-2'>America</h5>
          </div>
          <div className="can">
            <img src={assets.flg_03} alt="" />
            <h5 className='px-5 py-2'>Australia</h5>
          </div>
          <div className="can">
            <img src={assets.flg_04} alt="" />
            <h5 className='px-5 text-center py-2'>UK</h5>
          </div>
          <div className="can">
            <img src={assets.flg_05} alt="" />
            <h5 className='px-5 py-2'>Spain</h5>
          </div>
          <div className="can">
            <img src={assets.flg_06} alt="" />
            <h5 className='px-5 py-2'>Germany</h5>
          </div>
          <div className="can">
            <img src={assets.flg_01} alt="" />
            <h5 className='px-5 py-2'>Canada</h5>
          </div>
          <div className="can">
            <img src={assets.flg_04} alt="" />
            <h5 className='px-5 text-center py-2'>UK</h5>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Countries