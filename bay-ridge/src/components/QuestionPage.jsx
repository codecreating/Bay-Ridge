import {useState} from "react";
import cards from "../data/cards";
import FlipCard from "./FlipCard";

function QuestionPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrevious = () => {
        setCurrentIndex(Math.max(0, currentIndex - 1));
    };

    const goNext = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const currentCard = cards[currentIndex];

    return(
        <div className="question-page">
            <FlipCard card={currentCard} />
            <button onClick={goPrevious}>Previous</button>
            <button onClick={goNext}>Next</button>
        </div>
    );
}

export default QuestionPage;

