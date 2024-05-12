import React from 'react'
import './Services.css'
import { assets } from '../../assets/assets'

const Services = () => {
  return (
    <div>
        <div className="container">
            <div className="row py-4  border-bottom border-3">
                <div className='col-lg-3 d-flex align-items-end gap-3'>
                    <img className='simg' src={assets.fr_02} alt="" />
                    <p>Visa Process, no Interviews</p>
                </div>
                <div className='col-lg-3 d-flex align-items-end gap-3'>
                    <img className='simg' src={assets.f_02} alt="" />
                    <p>Faster Processing</p>
                </div>
                <div className='col-lg-3 d-flex align-items-end gap-3'>
                    <img className='simg' src={assets.fr_03} alt="" />
                    <p>Up-to-Date Information</p>
                </div>
                <div className='col-lg-3 d-flex align-items-end gap-3'>
                    <img className='simg' src={assets.f_04} alt="" />
                    <p>Reasonable Cost</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services