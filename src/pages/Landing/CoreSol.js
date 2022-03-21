import React from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";

function CoreSol(props) {
    return (
        <>


            <div className="section section-team" data-background-color="pink">
                <Container>
                    <Row>
                        <Col lg="5" md="12">
                            <div>
                                <img
                                    alt="..."
                                    className="n-logo"
                                    src={require("assets/img/coresol.jfif").default}
                                >

                                </img>
                            </div>
                            <br />
                            <h3><b>OUR CORE BLOCKCHAIN SOLUTIONS AND SERVICES</b></h3>
                            <h4>EXCHANGE</h4>
                            <p className="solution_desc">The Exchanges can be developed as Centralized Exchange, Decentralized
                                Exchange, Hybrid Exchanges as per the Cryptopreneurs preferences. The Exchanges serve as the
                                direct entities serving the cause of Crypto aspirants. The Exchanges are a prior need of every
                                Crypto audience to buy, bid and sell Cryptocurrencies to attain most modern means of
                                monetisation to users.
                            </p>
                            <Button className="btn-round" color="light" outline type="button">
                                TALK TO OUR EXPERTS
                            </Button>
                        </Col>
                        <Col lg="7" md="12">
                            <table className='table-core' border="1">
                                <tbody>
                                    <tr>
                                        <td className='active'>
                                            <h4>Exchange</h4>
                                        </td>
                                        <td ><h4>Token Creation</h4></td>
                                    </tr>
                                    <tr>
                                        <td><h4>NFT MarketPlace</h4></td>
                                        <td><h4>Defi Solutions</h4></td>
                                    </tr>
                                    <tr>
                                        <td><h4>Defi DEX Exchange</h4></td>
                                        <td><h4>Smart Contract</h4></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>


                    </Row>


                </Container>
            </div>
        </>
    );
}

export default CoreSol;