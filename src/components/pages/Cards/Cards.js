import React from 'react'
import CardItem from "./CardItem";
import './Cards.css';

function Cards(props) {
    return (
        <div className="cards">
            <h1> Check out these epic skills!</h1>
            <div classname="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="images/MERN.jpg"
                        text="View Eric's skills"
                        label="Cards"
                        path="/projects.js"
                        />
                         <CardItem 
                        src="images/NodeExpress"
                        text=""
                        label="Cards"
                        path="/projects"
                        />
                         <CardItem 
                        src="images/React.jpg"
                        text=""
                        label="Cards"
                        path="/projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

