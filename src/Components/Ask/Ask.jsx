import React from 'react'
import './Ask.css'
import { assets } from '../../assets/assets'
import Accordion from 'react-bootstrap/Accordion';

const Ask = () => {
  return (
    
    <div className='ask'>
    <div className='  d-flex px-5 py-5 justify-content-between'>
        <div className="ls">

        <div className='about d-flex  gap-3 py-4 '>
        <i className=" hicon bi bi-star-fill  "></i>
      <p className='free text-dark  fw-semibold'>POPULAR</p>
      
      <i className="hicon bi bi-star-fill  "></i>

      </div>
      <div>
        <h1 className='fw-bold'>Ask Question</h1>
      </div>
      </div>
      <div className='rts py-5'>
        <h6>WE HAVE WORLDWIDE 20K HAPPY STUDENT</h6>
        <img className='py-3 px-5' src={assets.user_avatar} alt="" />

      </div>

        </div>


        <div className="accordion px-5">


        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is a student visa and why do I need one?</Accordion.Header>
        <Accordion.Body>
        A student visa is a document issued by a foreign country that allows you to study there. You need it to legally enroll and attend an educational institution in that country. Here are some key points about student visas and why you might need one.

           Educational Pursuits.
            Legal Authorization.
            Academic Requirements.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How much do your services cost?</Accordion.Header>
        <Accordion.Body>
        We offer comprehensive immigration and visa consulting services,
          including visa application assistance, document preparation,

          Comprehensive Visa Assistance
         Visa Category Expertise
           Transparency and Communication
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I get started with your services?</Accordion.Header>
        <Accordion.Body>
        We offer comprehensive immigration and visa consulting services,
         including visa application assistance, document preparation,

          Comprehensive Visa Assistance
         Visa Category Expertise
          Transparency and Communication
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is your success rate with visa applications?</Accordion.Header>
        <Accordion.Body>
        We offer comprehensive immigration and visa consulting services,
        including visa application assistance, document preparation,

         Comprehensive Visa Assistance
         Visa Category Expertise
         Transparency and Communication
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

        </div>

    
  )
}

export default Ask



// import Accordion from 'react-bootstrap/Accordion';

// function AllCollapseExample() {
//   return (
//     <Accordion>
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// }

// export default AllCollapseExample;