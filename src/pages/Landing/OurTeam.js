import React from 'react';

import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

function OurTeam() {

    return (
        <div>
            <div className="section section-team text-center">

                <Container>
                    <h2>Our Team</h2>
                    <div className="team">
                        <Row>
                            <Col md="4">
                                <div className="team-player">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluid img-raised"
                                        src={require("assets/img/avatar.jpg").default}
                                    ></img>
                                    <h4 className="title">Romina Hadid</h4>
                                    <p className="category text-info">Model</p>
                                    <p className="description">
                                        You can write here details about one of your team members.
                                        You can give more details about what they do. Feel free to
                                        add some{" "}
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            links
                                        </a>{" "}
                                        for people to be able to follow them outside the site.
                                    </p>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-facebook-square"></i>
                                    </Button>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="team-player">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluid img-raised"
                                        src={require("assets/img/ryan.jpg").default}
                                    ></img>
                                    <h4 className="title">Ryan Tompson</h4>
                                    <p className="category text-info">Engineer</p>
                                    <p className="description">
                                        You can write here details about one of your team members.
                                        You can give more details about what they do. Feel free to
                                        add some{" "}
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            links
                                        </a>{" "}
                                        for people to be able to follow them outside the site.
                                    </p>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </Button>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="team-player">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluid img-raised"
                                        src={require("assets/img/eva.jpg").default}
                                    ></img>
                                    <h4 className="title">Eva Jenner</h4>
                                    <p className="category text-info">Designer</p>
                                    <p className="description">
                                        You can write here details about one of your team members.
                                        You can give more details about what they do. Feel free to
                                        add some{" "}
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            links
                                        </a>{" "}
                                        for people to be able to follow them outside the site.
                                    </p>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-google-plus"></i>
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default OurTeam;