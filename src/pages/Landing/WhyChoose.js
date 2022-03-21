import React from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";

function WhyChoose(props) {
    return (
        <>


            <div className="section section-team" data-background-color="red">


                <Container>


                    <Row>
                        <Col lg="6" md="6">
                            <h2><b>WHY CHOOSE MATICZ AS YOUR BLOCKCHAIN DEVELOPMENT COMPANY</b></h2>
                           

                            <p className="solution_desc">Get onboarded with the B2B Business acumen and dominate the Crypto domains
                through our best in class product delivery. Clients into comrades that is what Maticz is known for?
                Looking for the most productive Blockchain Development Company kudos you are already into it. We don’t
                meet the market's requirements, rather we are the market’s requirements. Trade-mark techie team of
                expertise, organized by the Industrialists knowing nuke and corner of the market’s performance. What's
                next? Avail your Blockchain Development with Maticz.
              </p>
              <p className="solution_desc">Maticz the Best in the Industry Blockchain Development company avail the audience
                with top-notch quality of service along with Throughput leveraging Development services. The Blockchain
                Development Services aided through us, are in the Superlative class and deserve a higher degree of
                preference and consideration compared with its counterparts. Maticz’s Blockchain Development service
                enlist itself as the best among the Crypto domains through best in class product delivery along with
                delivery time meeting deadlines. Pioneering the art of Crypto Product delivery, Maticz has the
                capability to make the difference in the existing Cryptosphere.</p>
   <Button className="btn-round" color="light" outline type="button">
                                GET QUOTE
                            </Button>
                            {'     '}
                            <Button className="btn-round" color="light" outline type="button">
                               GET DEMO
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

export default WhyChoose;