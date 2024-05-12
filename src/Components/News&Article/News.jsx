import React from 'react'
import './News.css'
import { assets } from '../../assets/assets'



const News = () => {
  return (
    <div className='pb-5'>
        <div className="ntit py-5">
        <div className='about d-flex justify-content-center gap-3 py-4 '>
        <i className=" hicon bi bi-star-fill  "></i>
      <p className='free text-dark  fw-semibold'>LATEST NEWS</p>
      
      <i className="hicon bi bi-star-fill  "></i>

      
      </div>
      <h1 className='text-center fw-bold '>Latest Blog & Article</h1>

        </div>


        <div>
            <div className="row">
                <div className='col-lg-7 px-5 py-3'>
                    <img className=' bimg w-100' src={assets.img_04} alt="" />

                </div>
               







                <div className='col-lg-5'>
                    <div className='px-2 py-3'>
                        <div className='d-flex gap-2'>
                        <i className=" dot bi bi-three-dots-vertical fs-4"></i>
                        <i className="  bi bi-tag-fill fs-4"></i>
                        <p className='fw-semibold fs-4'>Study Visa</p>
                        </div>
                        <h3>Student Visa Consulting and the Road to Higher Education.. </h3>
                        
                        
                        
                        <p className=''>The realm of visa applications is a and ever-changing landscape..</p>
                        

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className='px-2 py-2'>
                        <div className='d-flex gap-2'>
                        <i className=" dot bi bi-three-dots-vertical fs-4"></i>
                        <i className="  bi bi-tag-fill fs-4"></i>
                        <p className='fw-semibold fs-4'>Study Visa</p>
                        </div>
                        <h3>Student Visa Consulting and the Road to Higher Education..</h3>
                        <p>The realm of visa applications is a and ever-changing landscape..</p>
                        

                         </div>
                            

                        </div>
                    </div>


                
                    

                </div>
                
            </div>

            <div>
                <div className="row">
                    <div className='col-lg-7 d-flex gap-5'>
                        <div className='d-flex gap-3'>
                        <i className=" dot bi bi-three-dots-vertical fs-4"></i>
                        <i className=" dot  bi bi-tag-fill fs-4"></i>
                        <p className='fw-semibold fs-4'>Study Visa</p>
                        </div>
                        <div>
                        <i className=" dot bi bi-calendar-check fs-4">16/08/2024</i>

                        </div>


                        <i class=" dot bi bi-chat-text-fill fs-4">55</i>


                        

                       
                        

                        


                    </div>



                   

                </div>
             <div className="row ">
                <div className='col-lg-7'>
                    <h1 className='fw-bold py-4 px-4'>The Impact of Student Visa Consulting on Study Abroad..</h1>
                    <p className='px-4'>Student visa consulting agencies are equipped with professionals who specialize in the intricacies of visa applications.</p>
                </div>
                <div className='col-lg-5'>
                <div className='px-2 '>
                        <div className='d-flex gap-2'>
                        <i className=" dot bi bi-three-dots-vertical fs-4"></i>
                        <i className="  bi bi-tag-fill fs-4"></i>
                        <p className='fw-semibold fs-4'>Study Visa</p>
                        </div>
                        <h3>Student Visa Consulting and the Road to Higher Education..</h3>
                        <p className=''>The realm of visa applications is a and ever-changing landscape..</p>
                        

                    </div>
                    
                </div>

             </div>



            </div>
          
             
         </div>
        
        
        
        


    </div>
  )
}

export default News