/*eslint-disable*/
import React from "react";

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

function LandingPage_Header() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });
    return (
        <>
            <div className="page-header clear-filter" filter-color="blue">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/header.jpg").default + ")",
                    }}
                    ref={pageHeader}
                ></div>
                <Container>
                    <div className="content-center brand">
                        <img
                            alt="..."
                            className="n-logo"
                            src={require("assets/img/now-logo.png").default}
                        ></img>
                        <h1 className="h1-seo">BLOCKCHAIN DEVELOPMENT COMPANY</h1>
                        <h3>DIGITAL TRANSFORMARION </h3>
                    </div>
                    <h5 className="category category-absolute">
                        NFT Masters' Team
                    </h5>
                </Container>
            </div>
        </>
    );
}

export default LandingPage_Header;