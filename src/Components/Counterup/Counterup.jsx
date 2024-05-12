import React, { useState } from 'react'
import './Counterup.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Counterup = () => {
    const [counterState, setCounterState] = useState(false)
  return (
    <div className='container'>
         <ScrollTrigger onEnter={()=>setCounterState(true)} onExit={()=>setCounterState(false)}>
        <div className="row py-5 px-5">
           
            <div className='col-lg-4 text-center'>
                <h2 className='cup'>
                {counterState &&
                <CountUp
                 start={0} 
                 end={37}> 
                 duration={3}
                 </CountUp>}K
                
                </h2>
                <i className=" dot bi bi-three-dots fs-2 "></i>
                <p className='cup1'>We Have Worked
                   With Clients</p>
            </div>
            <div className='col-lg-4 text-center'>
                <h2 className='cup'>
                    { counterState &&

                   
                <CountUp
                 start={0} 
                 end={100}> 
                 duration={3}
                 </CountUp>}%
                </h2>
                <i className=" dot bi bi-three-dots fs-2 "></i>
                <p className='cup1'>Successful Visa
                    Process Rate</p>
            </div>
            <div className='col-lg-4 text-center'>
                <h2 className='cup'>
                    {counterState &&

                    
                <CountUp
                 start={0} 
                 end={5}> 
                 duration={4}
                 </CountUp> }Day
                    
                </h2>
                <i className=" dot bi bi-three-dots fs-2 "></i>
                <p className='cup1'>Application Approval
                  Processing Time</p>
            </div>
            
        </div>
        </ScrollTrigger>

    </div>
  )
}

export default Counterup

