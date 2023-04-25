import React from 'react'
import './hero.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gallery from './Gallery';

function Hero() {
  return (
    <div className='hero' id='hero'>
     
        <div className='container continer' >
            <div className='title'>
              <h1>We Are Here To Make A Dream Become Reality</h1>
               <h5>We Are Experienced Architectural Consultant.Who Can Make Your Dreams Come True</h5>

               Contact Us
               See Our Work
            </div>
            

          
         
            <Gallery />
         
       
     </div>



    </div>




  )
}

export default Hero