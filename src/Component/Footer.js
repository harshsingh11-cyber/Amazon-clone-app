import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__container">
                <div className="footer__section">
                    <h4>Get to Know Us</h4>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>

                </div>
                <div className="footer__section">
                    <h4>Connect with Us</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>

                </div>
                <div className="footer__section">
                    <h4>Make Money with Us</h4>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Fulfilment by Amazon</p>
                </div>
                <div className="footer__section">
                    <h4>Let Us Help You</h4>
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                </div>
            </div>
            <br />
            <hr />
            <div className="footer__end">
                <div className="footer__endcontainer">
                    <img className="footer__endlogo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </div>
                <div className="footer__last">
                    <p className='new'>
                        <span>Conditions of Use & Sale</span>
                         <span>Privacy Notice</span>
                        <span>Interest-Based Ads</span>
                    </p>
                    <p className='newtwo'>

                        <span className='span_one'>
                            © 1996-2023
                        </span>
                        <span>
                            Amazon.com, Inc. or its affiliates
                        </span>


                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer
