import React from 'react'
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src="/images/connected2.jpg" alt="" className="background"/> 
            <h1>Eric Mathias</h1>
            <p>Full-stack developer building elegant web 
                applications for clients with compassionate missions and directives. </p>
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
        </div>
    )
}

export default HeroSection
