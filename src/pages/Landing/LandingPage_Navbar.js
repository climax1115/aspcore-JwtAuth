import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip,
} from "reactstrap";

function LandingPage_Navbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} expand="lg" color="navy">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
                            target="_blank"
                            id="navbar-brand"
                        >

                            <p style={{ fontSize: '14px' }}> NFT Masters' Project</p>
                        </NavbarBrand>
                        <UncontrolledTooltip target="#navbar-brand">
                            Designed by Invision. Coded by Creative Tim
                        </UncontrolledTooltip>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar>

                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    href="#pablo"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="now-ui-icons design_app mr-1"></i>
                                    <p style={{ fontSize: '14px' }}> NFT</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/index" tag={Link}>
                                        <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                                        About Us
                                    </DropdownItem>
                                    <DropdownItem
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                                        Portfolio
                                    </DropdownItem>
                                    <DropdownItem
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                                        Blog
                                    </DropdownItem>
                                    <DropdownItem
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                                        Careers
                                    </DropdownItem>
                                    <DropdownItem
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                                        Hire Resource
                                    </DropdownItem>
                                    <DropdownItem
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                                        Contact Us
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    href="#pablo"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="now-ui-icons design_app mr-1"></i>
                                    <p style={{ fontSize: '14px' }}> Exchange</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/index" tag={Link}>
                                        <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                                        Exchange Development Services
                                    </DropdownItem>
                                    <DropdownItem
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                                        Decentralized Platform
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    href="#pablo"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="now-ui-icons design_app mr-1"></i>
                                    <p style={{ fontSize: '14px' }}> Defi</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/index" tag={Link}>
                                        <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                                        Cryptocurrency Token
                                    </DropdownItem>
                                    <DropdownItem
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                                        Decentralized Platform
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    href="#pablo"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="now-ui-icons design_app mr-1"></i>
                                    <p style={{ fontSize: '14px' }}> Token</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/index" tag={Link}>
                                        <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                                        Cryptocurrency Token
                                    </DropdownItem>
                                    <DropdownItem
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                                        Decentralized Platform
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink
                                    href="#pablo"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .getElementById("download-section")
                                            .scrollIntoView();
                                    }}
                                >
                                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                                    <p style={{ fontSize: '14px' }}> Blog</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#pablo"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .getElementById("download-section")
                                            .scrollIntoView();
                                    }}
                                >
                                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                                    <p style={{ fontSize: '14px' }}> Portfolio</p>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    href="#pablo"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="now-ui-icons design_app mr-1"></i>
                                    <p style={{ fontSize: '14px' }}> Contact</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/index" tag={Link}>
                                        <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                                        Cryptocurrency Token
                                    </DropdownItem>
                                    <DropdownItem
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                                        Decentralized Platform
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>


                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default LandingPage_Navbar;