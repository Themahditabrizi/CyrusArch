import React from 'react'
import './hero.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gallery from './Gallery';
import Button from 'react-bootstrap/Button';
function Hero() {
  return (
        <div> 
             <Container>
      <Row>
        <Col sm={4}  >
        <h1>We Are Here To Make A Dream Become Reality</h1>
        <h5>We Are Experienced Architectural Consultant.Who Can Make Your Dreams Come True</h5>
        
        <Row s={2} md={4} lg={6}>
        <Col s={2} md={4} lg={6}><Button variant="outline-secondary">Contact Us</Button></Col>
        <Col s={2} md={4} lg={6}><Button variant="outline-secondary">See Our Work </Button></Col>
        
        </Row>
        
        </Col>
        <Col sm={8} lg={{ span: 4, offset: 2 }} md={4}>
        <Gallery/>
        </Col>
      </Row>
      <Row>
       
      </Row>
    </Container>
                       
            
        
        </div>
        
  
    

  )
}

export default Hero