import React from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";

function AboutUs(props) {
    return (
        <>


            <div className="section section-team" data-background-color="indigo">


                <Container>


                    <Row>
                        <Col lg="6" md="6">
                            <h2><b>ABOUT US</b></h2>
                            <h3>MATICZ TECHNOLOGIES - THE LEADING BLOCKCHAIN DEVELOPMENT SERVICES COMPANY</h3>

                            <p>Functions with the prime aim of booming Blockchain exposure to its seekers. A
                                King is known by his territory and so does Maticz, Maticz is known for its dominance in the Crypto
                                Territory. The Entire Empire of Cryptos is sovereignly held through our technical expertise and our
                                ability to solve queries in the Blockchain based domains. We avail the business strategies that come up
                                with the perspective of leveraging the participant’s investment.we make each and every penny of yours worth it.</p>
                            <Button className="btn-round" color="light" outline type="button">
                                SKYPE US
                            </Button>
                            {'     '}
                            <Button className="btn-round" color="light" outline type="button">
                                TELEGRAM US
                            </Button>
                        </Col>
                        <Col lg="6" md="6">

                            <img
                                alt="..."
                                className="n-logo"
                                src={require("assets/img/hero-image-1.png").default}
                            ></img>
                        </Col>


                    </Row>





                </Container>
            </div>
        </>
    );
}

export default AboutUs;