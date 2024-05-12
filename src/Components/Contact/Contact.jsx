import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='py-5'>
        <div className="container bg-dark">
          <div className="row py-5">
            <div className='col-lg-6'>
              <div >
              <div className='about d-flex justify-content-start gap-3 py-4 px-5'>

        <i className=" hicon bi bi-star-fill  "></i>
      <p className='free text-white  fw-semibold'>CONTACT</p>
      
      <i className="hicon bi bi-star-fill   "></i>
      </div>
      <div className='px-5'>
        <h3 className='text-white'>If You Have Any Question, Fell Free to
        Contact With Us.</h3>
      </div>

      <div className='form-group py-3 px-5'>

      <i className=" ciconn bi bi-person-fill fs-3 text-white px-4 py-2"></i>
        <input type="text" name='name' className='input-field' placeholder='Enter your name' autoComplete='off' required/>

       <div className='py-4'>
       <i class=" ciconn bi bi-envelope-at-fill fs-3 text-white px-4 py-2"></i>
        <input type="email" name='email' className='input-field' placeholder='abc11@gmail.com' autoComplete='off' required/>
       </div>

       <div className='pb-4'>
       <i class=" ciconn bi bi-telephone-fill  fs-3 text-white px-4 py-2"></i>
       <input type="tel" name='number' className='input-field' placeholder='+979800000000' autoComplete='off' required />

       </div>

       <div>
       <i class=" ciconn bi bi-chat-square-text-fill fs-3 text-white px-4 py-2"></i>
       <input type="text" name='message' className='input-field' placeholder='Write your message ' required defaultValue={""} />
       </div>

       <div className='py-4'>
       <button type="button" class="btn11 rounded-pill py-3 px-4 text-white"> Send Message<i class="bi bi-arrow-right text-white"></i></button>
        
        
       </div>
        


      </div>



    
                
              </div>
             

            </div>
            <div className='col-lg-6'>
              <img className='w-100' src={assets.cf_bg} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact