import React from 'react'
import '../Cards.css';
import CardItem from '../CardItem';

export default function Omarche(props) {
    return (
        <div className="cards">
            <h1> O-Marche </h1>
            <p> Location-based farmer's market finder</p>
            <div classname="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="images/O-Marche.jpg"
                        text="Created using React, MongoDB, Express.js, Node.js, HTML5,  CSS3, API, Heroku"
                        label="O-Marche"
                        path="/Omarche"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}