import {useState} from 'react';
import './FlipCard.css';

function FlipCard({card}){
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="flip-card">
            <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>

                <div className="flip-card-front">
                    <h2>{card.question}</h2>
                    <p>{card.line1}</p>
                    <p>{card.line2}</p>
                    <p>{card.line3}</p>
                    <button onClick={() => setIsFlipped(true)}>Reveal Answer</button>
            </div>

            <div className="flip-card-back">
                <img src={card.image} alt="" className="card-image" />
                <p className="card-answer">{card.answer}</p>
                <a href={card.link} target="_blank" rel="noreferrer">
                    Learn More
                </a>
                <button on Click={() => setIsFlipped(false)}>Back to Question</button>
            </div>

        </div>
        </div>
       
    )
}

export default FlipCard;