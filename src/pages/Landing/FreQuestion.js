import React from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";

function FreQuestion(props) {
    return (
        <>


            <div className="section section-team text-center" data-background-color="indigo">
                <h2 className='title'>Frequently Asked Questions</h2>
                <p className="sec_5_desc text-center">Everything you need to know, Get it cleared. Got it?
            </p>    
                <Container>
                    <Col lg="5" md="12">
                            <img src={require("assets/img/faq-img.webp").default} alt="img"  />
                       
                    </Col>

                    <br></br>
                    <br></br>
                    <br></br>

                </Container>
            </div>
        </>
    );
}

export default FreQuestion;