import React from 'react'
import './Help.css'
import { assets } from '../../assets/assets'

const Help = () => {
  return (
    <div className='border border-top border-4'>
        <div className="htit">
        <div className='about d-flex justify-content-center gap-3 py-5 '>
        <i className="hicon bi bi-star-fill  "></i>
      <p className='tspc text-dark fw-semibold'>HOW WE HELP CLIENT</p>
      
      <i className="hicon bi bi-star-fill  "></i>
      </div>
      <div>
        <h1 className='text-center fs-1'>Expertise from Seasoned
             Professionals</h1>
      </div>

        </div>

        <div className="row py-5 px-2">
            <div className='col-lg-4 text-center px-5 border border-3 py-4 rounded-2'>
                <img className='himg ' src={assets.fr_2} alt="" />
                <h3 className='pt-4'>University Information</h3>
                <p>University information is a crucial
                    component of your..hellooooooooooo</p>

            </div>
            <div className='col-lg-4 text-center px-5 border border-3 py-4 rounded-2'>
                <img className='himg ' src={assets.fr_02} alt="" />
                <h3 className='pt-4'>Student Visa</h3>
                <p>A student visa is a legal authorization
                  that allows international....hellooooooooooo</p>

            </div>
            <div className='col-lg-4 text-center px-5 border border-3 py-4 rounded-2'>
                <img className='himg ' src={assets.fr_03} alt="" />
                <h3 className='pt-4'>Our Coaching</h3>
                <p>Our Coaching offers life coaching that
                 helps clients navigate....hellooooooooooo</p>

            </div>
        </div>




    </div>
  )
}

export default Help