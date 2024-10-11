import React from "react";
import "./Footer.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faInstagram,
    faGooglePay,
    faCcPaypal,
    faApplePay,
    faCcMastercard,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; // Using react-router-dom for React routing

const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="upperSection">
                    <div className="subscribe">
                        <h3>BE THE FIRST KNOW</h3>
                        <br />
                        <p>Sign up for updates from abc.</p>
                        <br />
                        <form action="">
                            <input
                                type="email"
                                name="email"
                                id="emailField"
                                placeholder="Enter your e-mail..."
                            />
                            <input
                                type="submit"
                                name="subscribe"
                                id="subscribeBtn"
                                value="SUBSCRIBE"
                            />
                        </form>
                    </div>
                    <hr className="responsiveHr" />
                    <div className="contactUs">
                        <h3>CONTACT US</h3>
                        <br />
                        <p>+44 221 133 5360</p>
                        <br />
                        <p>customercare@abc.com</p>
                        <br />
                        <hr className="responsiveHr" />
                        <h3>CURRENCY</h3>
                        <br />
                        <h5>USD</h5>
                        <br />
                        <small className="bigScreenFooter">
                            Transactions will be completed in Euros and a currency reference
                            is available on hover
                        </small>
                    </div>
                </div>
                <hr className="mainHr" />
                <div className="lowerSection">
                    <div className="abcContainer">
                        <h3>abc</h3>
                        <br />
                        <div className="bigScreenFooter">
                            <Link to="" className="abc Links">
                                About Us
                            </Link>
                            <br />
                            <Link to="" className="abc Links">
                                Stories
                            </Link>
                            <br />
                            <Link to="" className="abc Links">
                                Artisans
                            </Link>
                            <br />
                            <Link to="" className="abc Links">
                                Boutiques
                            </Link>
                            <br />
                            <Link to="" className="abc Links">
                                Contact Us
                            </Link>
                            <br />
                            <Link to="" className="abc Links">
                                EU Compliance Docs
                            </Link>
                            <br />
                        </div>
                    </div>
                    <hr className="responsiveHr" />
                    <div className="quickLinks">
                        <h3>QUICK LINKS</h3>
                        <br />
                        <div className="bigScreenFooter">
                            <Link to="" className="q Links">
                                Orders & Shipping
                            </Link>
                            <br />
                            <Link to="" className="q Links">
                                Join/Login as a Seller
                            </Link>
                            <br />
                            <Link to="" className="q Links">
                                Payment & Pricing
                            </Link>
                            <br />
                            <Link to="" className="q Links">
                                Return & Refunds
                            </Link>
                            <br />
                            <Link to="" className="q Links">
                                FAQs
                            </Link>
                            <br />
                            <Link to="" className="q Links">
                                Privacy & Policy
                            </Link>
                            <br />
                            <Link to="" className="q Links">
                                Terms & Conditions
                            </Link>
                            <br />
                        </div>
                    </div>
                    <hr className="responsiveHr" />
                    <div className="social">
                        <h3>FOLLOW US</h3>
                        <br />
                        <div className="bigScreenFooter social-icons">
                            <div className="iconContainer">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size="xl"
                                    className="footerIcons"
                                />
                            </div>
                            <div className="iconContainer">
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    size="xl"
                                    className="footerIcons"
                                />
                            </div>
                        </div>
                        <br />
                        <hr className="responsiveHr" />
                        <h3>abc ACCEPTS</h3>
                        <br />
                        <div>
                            <FontAwesomeIcon
                                icon={faGooglePay}
                                size="2x"
                                className="footerIcons"
                            />
                            <FontAwesomeIcon
                                icon={faCcPaypal}
                                size="2x"
                                className="footerIcons"
                            />
                            <FontAwesomeIcon
                                icon={faApplePay}
                                size="2x"
                                className="footerIcons"
                            />
                            <FontAwesomeIcon
                                icon={faCcMastercard}
                                size="2x"
                                className="footerIcons"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRightSection">
                <small>Copyright &#169; 2023 abc. All rights reserved</small>
            </div>
        </>
    );
};

export default Footer;
