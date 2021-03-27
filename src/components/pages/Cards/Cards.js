import React from 'react'
import CardItem from "./CardItem";
import './Cards.css';

function Cards(props) {
    return (
        <div className="cards">
            <h1> Projects </h1>
            <div classname="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="images/O-Marche.jpg"
                        text="O-Marche: Farmer's Market finder using React, HTML,  CSS, API"
                        label="O-Marche"
                        path="/projects"
                        />
                         <CardItem 
                        src="images/clothing.png"
                        text="Weather-based complimentary color clothing app using Python, Django, HTML, CSS"
                        label="Clothing"
                        path="/projects"
                        />
                         <CardItem 
                        src="images/Blackjack.jpg"
                        text="Blackjack game using Javascript, HTML, CSS"
                        label="Blackjack"
                        path="/projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;

