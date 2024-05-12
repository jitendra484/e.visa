import React from 'react'
import './Footerr.css'

const Footerr = () => {
  return (
    <div className='f '>
        <div className=" frow row px-5">
            <div className='col-lg-3 text-white '>
                <h4>OUR ADDRESS</h4>
                <p>Sunshine Business park, Floor
                 No 05A,Sector-94,Ukrine</p>
            </div>
            <div className='col-lg-3 text-white'>
                <h4>OPENING HOUR</h4>
                <p>Monday - Saturday
                   11:00 AM - 10:00 PM</p>
            </div>
            <div className='col-lg-3 text-white'>
                <h4>OFF DAY</h4>
                <p>Saturday
                  11:00 AM - 10:00 PM</p>
            </div>
            <div className='col-lg-3 text-white'>
                <h4>OUR SOCIAL MEDIA</h4>
                <div>
                <ul className=" d-flex justify-content-start gap-3">
                <li><a href="https://www.facebook.com/"><i className=" sicon bi bi-facebook fs-4 " /></a></li>
                 <li><a href="https://www.facebook.com/"><i className=" sicon bi bi-instagram fs-4" /></a></li>
                 <li><a href="https://www.facebook.com/"><i className=" sicon bi bi-linkedin fs-4" /></a></li>
                 
              </ul>
                </div>
               
            </div>
            <div className='border border-buttom'>
                
            </div>
        </div>
         <div className='row text-white px-5 py-4 '>
            <div className='col-lg-4 py-5'>
                <p>Copyright © 2023 e.visa. All rights reserved.</p>
            </div>
            <div className='col-lg-5 py-3 '>
                <div>
                    <ul className='d-flex gap-3'>
                        <li> <a href="">Our Services</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">How Its Works</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-3 py-5'>
                <ul className='d-flex gap-5'>
                    <li><a href="">Privicy Policy</a></li>
                    <li><a href="">Cockies</a></li>
                </ul>
            </div>

         </div>
        

    </div>
  )
}

export default Footerr