import React from 'react'
import '../Cards.css';
import CardItem from '../CardItem';

export default function Compliment(props) {
    return (
        <div className="cards">
            <h1> Compliment My Clothes </h1>
            <p> Weather-based complimentary color wardrobe selecting app</p>
            <div classname="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="images/ComplimentMyClothes.jpg"
                        text="Created with Python, Django, CSS3, HTML5, Postgres, AWS-3, API, Heroku"
                        label="/Compliment"
                        path="/Compliment"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}