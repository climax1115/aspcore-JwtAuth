import React from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";

function OurBlog(props) {
    return (
        <>


            <div className="section section-team text-center" data-background-color="pink">
                <h2 className='title'>Our Blog</h2>
                <Container>

                    <div>
                        <Row>
                            <Col className='text-center' lg="4" md="6">
                                <a href="examples/landing-page.html" target="_blank">
                                    <img

                                        alt="..."
                                        className="img-raised"
                                        src={require("assets/img/landing.jpg").default}
                                    ></img>
                                </a>
                                <Button
                                    className="btn-round"
                                    color="default"
                                    to="/landing-page"
                                    outline
                                    tag={Link}
                                >
                                    1
                                </Button>
                            </Col>
                            <Col className='text-center' lg="4" md="6">
                                <a href="examples/landing-page.html" target="_blank">
                                    <img
                                        alt="..."
                                        className="img-raised"
                                        src={require("assets/img/landing.jpg").default}
                                    ></img>
                                </a>
                                <Button
                                    className="btn-round"
                                    color="default"
                                    to="/landing-page"
                                    outline
                                    tag={Link}
                                >
                                    2
                                </Button>
                            </Col>
                            <Col className='text-center' lg="4" md="6">
                                <a href="examples/landing-page.html" target="_blank">
                                    <img
                                        alt="..."
                                        className="img-raised"
                                        src={require("assets/img/landing.jpg").default}
                                    ></img>
                                </a>
                                <Button
                                    className="btn-round"
                                    color="default"
                                    to="/landing-page"
                                    outline
                                    tag={Link}
                                >
                                    3
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                </Container>
            </div>
        </>
    );
}

export default OurBlog;