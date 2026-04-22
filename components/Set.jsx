import { useState } from "react";
import allCards from "../src/data.json"; 
import { Card } from "./Card";
import { useLocation, useParams } from "react-router-dom";
import "./Set.css";

export function Set() {
    const location = useLocation();
    const setName = location.state?.setName; 
    const param = useParams();
    console.log(param.id);
    
    const cards = allCards.filter(item => item.setName === setName);
    
    const [step, setStep] = useState(0);
    const totalCards = cards.length;
    const left = "<";
    const right = ">";
    
    const goToPrev = () => {
        setStep((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
    };

    const goToNext = () => {
        setStep((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
    };

    if (totalCards === 0) {
        return <div>Набор не найден</div>;
    }

    return (
        <div>
            <h2>{setName}</h2>
            <Card front={cards[step].front} back={cards[step].back} key={cards[step].id}/>
            <div className="navigation">
                <button onClick={goToPrev} className="nav-btn">{left}</button>
                <span className="counter">{step + 1} / {totalCards}</span>
                <button onClick={goToNext} className="nav-btn">{right}</button>
            </div>
        </div>
    );
}