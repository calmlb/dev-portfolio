import React from 'react'
import '../Cards.css';
import CardItem from '../CardItem';

export default function Blackjack(props) {
    return (
        <div className="cards">
            <h1> Blackjack </h1>
            <p> Simple Blackjack game</p>
            <div classname="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="images/Blackjack.jpg"
                        text="Blackjack: made using Javascript, HTML5,  CSS3, Heroku"
                        label="Blackjack"
                        path="/Blackjack"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}