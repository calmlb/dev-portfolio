import React from 'react'
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container' >
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Eric Mathias</h1>
            <p>I’m a full-stack developer building web 
                applications that support compassionate missons and directives of companies worldwide.</p>
            <div classname="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'> 
                    Resume <i classname='far fa-play-circle' />
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>
                    LinkedIn <i classname='far fa-play-circle' />
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>
                    GitHub <i classname='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
