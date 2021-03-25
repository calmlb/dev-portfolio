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
                        text="Tech used: MERN, API, HTML,  CSS"
                        label="O-Marche"
                        path="/projects"
                        />
                         <CardItem 
                        src="images/ComplimentMyClothes.jpg"
                        text="Tech used: Python, Django, HTML, CSS"
                        label="Compliment"
                        path="/projects"
                        />
                         <CardItem 
                        src="images/Blackjack.jpg"
                        text="Blackjack: using JS, HTML, CSS"
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

