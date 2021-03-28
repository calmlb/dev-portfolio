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
                        text="O-Marche: farmer's market locator using React, HTML5,  CSS3, API"
                        label="O-Marche"
                        path="/projects"
                        />
                         <CardItem 
                        src="images/clothing.png"
                        text="Compliment My Clothing: weather-based complimentary color clothing app using Python, Django, HTML5, CSS3"
                        label="Clothing"
                        path="/projects"
                        />
                         <CardItem 
                        src="images/Blackjack.jpg"
                        text="Blackjack: game developed using vanilla Javascript, HTML5, CSS3"
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

