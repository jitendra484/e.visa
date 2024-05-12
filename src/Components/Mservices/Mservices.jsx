import React from 'react'
import './Mservices.css'
import { assets } from '../../assets/assets'

const Mservices = () => {
  return (
    <div className='mservices bg-dark text-white '>
        <div className="mtitle">
        <div className='about d-flex justify-content-start gap-3 py-5 '>
        <i className="hicon bi bi-star-fill  "></i>
      <p className='tspc  fw-semibold'>SERVICES</p>
      
      <i className="hicon bi bi-star-fill  "></i>

      
      </div>

      <div className='d-flex justify-content-between'>
        <div>
        <h1>Easy Studies Abroad</h1>
        </div>
        <div>
        <a href="">More Services</a><i className="bi bi-arrow-right-circle-fill"></i>
      </div>


        </div>
        </div>

        <div className="row">
            <div className='col-lg-3 py-5'>
                <div className='bservices py-4'>
                    <img src={assets.s_icon01} alt="" />
                    <h2 className='pt-4'>Career Counseling </h2>
                    
                    <p className='py-2'>Assignment of eligibility for different student visa....</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
            </div>
            <div className='col-lg-3 py-5'>
                <div className='bservices py-4'>
                    <img src={assets.s_icon02} alt="" />
                    <h2 className='pt-4'> Easy Visa Guidance </h2>
                    
                    <p className='py-2'>Assignment of eligibility for different student visa....</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
            </div>
            <div className='col-lg-3 py-5'>
                <div className='bservices py-4'>
                    <img src={assets.s_icon03} alt="" />
                    <h2 className='pt-4'>Financeial Planning </h2>
                    
                    <p className='py-2'>Assignment of eligibility for different student visa....</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
            </div>
            <div className='col-lg-3 py-5'>
                <div className='bservices py-4'>
                    <img src={assets.s_icon04} alt="" />
                    <h2 className='pt-4'>Application Planning </h2>
                    
                    <p className='py-2'>Assignment of eligibility for different student visa....</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
            </div>
        </div>


        
        <div className="row">
            <div className='col-lg-3 py-5'>
                <div className='bservices py-4'>
                    <img src={assets.s_icon01} alt="" />
                    <h2 className='pt-4'>Career Counseling </h2>
                    
                    <p className='py-2'>Assignment of eligibility for different student visa....</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
            </div>
            <div className='col-lg-3 py-5'>
                <div className='bservices py-4'>
                    <img src={assets.s_icon02} alt="" />
                    <h2 className='pt-4'> Easy Visa Guidance </h2>
                    
                    <p className='py-2'>Assignment of eligibility for different student visa....</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
            </div>
            <div className='col-lg-3 py-5'>
                <div className='bservices py-4'>
                    <img src={assets.s_icon03} alt="" />
                    <h2 className='pt-4'>Financeial Planning </h2>
                    
                    <p className='py-2'>Assignment of eligibility for different student visa....</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
            </div>
            <div className='col-lg-3 py-5'>
                <div className='bservices py-4'>
                    <img src={assets.s_icon04} alt="" />
                    <h2 className='pt-4'>Application Planning </h2>
                    
                    <p className='py-2'>Assignment of eligibility for different student visa....</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Mservices