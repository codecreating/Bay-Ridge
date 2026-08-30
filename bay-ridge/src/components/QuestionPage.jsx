import {useState} from "react";
import cards from "../data/cards";
import FlipCard from "./FlipCard";
//import "./QuestionPage.css";

function QuestionPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

const isFinished =  currentIndex === cards.length;

    const goPrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1,0));
    };

    const goNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, cards.length));
    };

    const restart = () => {
        setCurrentIndex(0);
    };

    if (isFinished) {
        return (
            <div className="question-page">
                <div className="congrats-screen">
                    <h2>Congratulations!</h2>
                    <p>You made it through all {cards.length} questions.</p>
                    <button onClick={restart}>Start Over</button>
                </div>
            </div>
        );
    }

    const currentCard = cards[currentIndex];

    return(
        <div className="question-page">
            <FlipCard key={currentCard.id} card={currentCard} />

            <div className="nav-buttons">
                <button onClick={goPrevious} disabled={currentIndex === 0}>
                    Previous
                </button>
                <span className="progress">
                    {currentIndex + 1} of {cards.length}
                </span>
                <button onClick={goNext}>
                    {currentIndex === cards.length - 1 ? "Finish" : "Next"} 
                </button>
            </div>
        </div>
    );
}

export default QuestionPage;

