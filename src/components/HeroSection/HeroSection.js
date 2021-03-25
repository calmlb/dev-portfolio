import React from 'react'
import '../../App.css';
// import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container' >
            {<img src="/images/connected2.jpg" alt="" className="background"/> }
            <h1>Eric Mathias</h1>
            <p>Full-stack developer building web 
                applications in support of compassionate company missions and directives.</p>
                
                <div classname="hero-btns">
            <a href ="https://drive.google.com/file/d/1FOC_Ug4Xd9TI5TEqZ8K-kIoAPP2bPQOW/view?usp=sharing">
                <button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>
                    <div classname="Resume">
                    <img src="/images/resumeIcon.png" className="resume" alt=""></img>
                </div>
                Resume <i classname='far fa-play-circle' />
                </button>
                </a>
                <a href ="https://www.linkedin.com/in/ericgmathias/">
                <button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>
                    <div classname="linkedin">
                    <img src="/images/linkedInLogo.png" className="linkedInIcon" alt=""></img>
                </div>
                <i classname='far fa-play-circle' />
                </button>
                </a>
                <a href ="https://github.com/calmlb">
                <button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>
                   <div classname="github">
                    <img src="/images/Octocat.png" className="githubIcon" alt=""></img>
                </div> 
                <i classname='far fa-play-circle' />
                </button>
                </a>
            </div>
        </div>
    )
}

export default HeroSection
