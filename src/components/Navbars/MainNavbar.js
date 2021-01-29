import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    Nav,
    Container,
    UncontrolledTooltip,
} from "reactstrap";

// core components

function MainNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [bodyClick, setBodyClick] = React.useState(false);
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();

        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 499 ||
                document.body.scrollTop > 499
            ) {
                setNavbarColor("black");
            } else if (
                document.documentElement.scrollTop < 500 ||
                document.body.scrollTop < 500
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
            {bodyClick ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setBodyClick(false);
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar
                className={classnames("fixed-top", navbarColor)}
                id="navbar-main"
                expand="lg"
            >
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
                            ECCC
                    </NavbarBrand>
                        <UncontrolledTooltip placement="bottom" target="navbar-brand">
                            ECCC
                    </UncontrolledTooltip>
                        <button
                            className="navbar-toggler"
                            id="navigation"
                            type="button"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setBodyClick(true);
                                setCollapseOpen(true);
                            }}
                        >
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <Collapse navbar isOpen={collapseOpen}>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle color="default" caret nav>
                                    Services Offered
                            </DropdownToggle>
                                <DropdownMenu className="dropdown-clear">
                                    <DropdownItem
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Personal Coaching
                                </DropdownItem>
                                    <DropdownItem
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Professional Coaching
                                </DropdownItem>
                                    <DropdownItem
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Corporate Training
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="mr-2" color="black" caret nav>
                                    Our Coaches
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-clear" right>
                                    <DropdownItem to="/index" tag={Link}>
                                        Personal Coaches
                                    </DropdownItem>
                                    <DropdownItem to="/presentation" tag={Link}>
                                        Profession Coaches
                                    </DropdownItem>
                                    <DropdownItem to="/corporate-training" tag={Link}>
                                        Corporate Training Coaches
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle className="mr-2" color="black" caret nav>
                                        Become a Member
                                        </DropdownToggle>
                                    <DropdownMenu className="dropdown-clear" right>
                                        <DropdownItem to="/index" tag={Link}>
                                            Become a Client
                                        </DropdownItem>
                                        <DropdownItem to="/examples" tag={Link}>
                                            Become a Coach
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle className="mr-2" color="black" caret nav>
                                        Coaching 101
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-clear" right>
                                        <DropdownItem to="/index" tag={Link}>
                                            Coaching Training Program
                                    </DropdownItem>
                                        <DropdownItem className="mr-2" color="black">
                                            Extra Resources
                                    </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MainNavbar;