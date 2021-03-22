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
                        text="View Eric's skills"
                        label="O-Marche"
                        path="/projects"
                        />
                         <CardItem 
                        src="images/ComplimentMyClothes.jpg"
                        text=""
                        label="Compliment"
                        path="/projects"
                        />
                         <CardItem 
                        src="images/Blackjack.jpg"
                        text="Blackjack game made with Javascript, HTML, CSS"
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

