import React from 'react'
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container' >
            {<img src="/images/connected2.jpg" alt="" className="background"/> }
            <h1>Eric Mathias</h1>
            <p>Full-stack developer building web 
                applications that support compassionate missions and directives of companies worldwide.</p>
            <div classname="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>
                    <div classname="Resume">
                    <img src="/images/resumeIcon.png" className="resume" to="https://drive.google.com/file/d/1FOC_Ug4Xd9TI5TEqZ8K-kIoAPP2bPQOW/view?usp=sharing" alt=""></img>
                </div>
                Resume <i classname='far fa-play-circle' />
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>
                    <div classname="linkedin">
                    <img src="/images/linkedInLogo.png" className="linkedInIcon" to="https://www.linkedin.com/in/ericgmathias/" alt=""></img>
                </div>
                <i classname='far fa-play-circle' />
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>
                   <div classname="github">
                    <img src="/images/Octocat.png" className="githubIcon" to="https://github.com/calmlb" alt=""></img>
                </div> 
                <i classname='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
