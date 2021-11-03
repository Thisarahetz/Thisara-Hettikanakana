import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typical from 'react-typical'
const TopContaner = () => {
    return ( 
        <>
      
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={12} md={6} className="section-top-left mt-7">
              <img className="max-w-md mx-auto" src="/assets/lastpic.png" />
            </Col>
            <Col xs={12} md={6} className="section-top-right shadow">
              <div className="plate-img-container">
                <img
                  className="plate-img img-fluid"
                  src="/assets/Software.png"
                />
              </div>
              <h6  style={{fontSize:'15px',color:'#16213E '}}>Hello, I am</h6>
              <h1 style={{fontSize:'50px',color:'#f7f8f9 '}}>Thisara Hettikankanama</h1>
              <p style={{fontSize:'30px',color:'#16213E '}}>I'm a {''}
              
                  <Typical
                    loop={Infinity}
                    wrapper={'b'}
                    steps={
                        [
                            'Developer 💻',
                            1000,
                            'Designer 🖌',
                            1000,
                            'open source contributor ♾',
                            1000,
                            'Social worker 🤝',
                            1000,
                            'Hard-working person 🤝',
                            1000,
                            'undergraduate🎖',
                            1000
                            

                        ]
                    }                 
                  />               
              </p>
              <Button variant="outline-warning"> Download CV </Button>
            </Col>
          </Row>
        </Container>
      
    </>
     );
}
 
export default TopContaner;