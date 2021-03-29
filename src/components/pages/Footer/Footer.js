import React from 'react'
import '../Footer/Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer">
                <p className="footer-heading">
                    Made with React, Node.js, Firebase, Nodemailer, Axios, Cors, HTML, CSS. All rights reserved. Eric Mathias 2021.
                    <div className="hero-btns">
                    <div className="socialbtns">
                        <button className='social' >
                            <a href ="https://drive.google.com/file/d/1FOC_Ug4Xd9TI5TEqZ8K-kIoAPP2bPQOW/view?usp=sharing">
                                <img src="/images/resumeIcon.png" className="icons" alt=""></img>
                            </a>
                        </button>
                        <button className='social'>
                            <a href ="https://www.linkedin.com/in/ericgmathias/">
                                <img src="/images/linkedin.png" className="icons" alt=""></img>
                            </a>
                        </button>
                        <button className='social'>
                            <a href ="https://github.com/calmlb">
                                <img src="/images/GitHub-Mark.png" alt=""></img> 
                            </a>
                        </button>
                    </div>
            </div>
                </p> 
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
