import React from 'react'
import './Top.css'
import { assets } from '../../assets/assets'


const Top = () => {
  return (
    <>
    <div className="top pt-3 d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className='col-lg-3'>
                <img className='logo1' src={assets.logo1} alt="" />
                
                    
                    

                </div>

                <div className='col-lg-6'>
                    <ul className='fs-5 d-flex justify-content-around  text-white '>
                        <li ><i className=" ticon bi bi-envelope-at-fill  fs-4"></i>infoe.visa@gmail.com</li>
                        <li ><i class=" ticon bi bi-telephone-plus-fill fs-4"></i>+9800000000</li>
                    </ul>
            
                </div>

                <div className='col-lg-3'>
                <ul className=" d-flex justify-content-end gap-3">
                <li><a href="https://www.facebook.com/"><i className=" sicon bi bi-facebook fs-6 " /></a></li>
                 <li><a href="https://www.facebook.com/"><i className=" sicon bi bi-instagram fs-6" /></a></li>
                 <li><a href="https://www.facebook.com/"><i className=" sicon bi bi-linkedin fs-6" /></a></li>
                 
              </ul>
                        
                            
                    

                </div>
                
            </div>
        </div>
        </div>

    </>
  )
}

export default Top