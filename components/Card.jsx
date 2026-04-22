import { useState } from 'react';
import './Card.css';

export function Card({front, back}) {
    const [checkCard, setCheckСard] = useState(false);

    const handleClick = () => {
        setCheckСard(!checkCard);
    }
   
    const className = `card ${checkCard ? 'card-check':''}`;

    return (
        <div className={className} onClick={handleClick} data-back={back}>
            {front}
        </div>
    )
}

