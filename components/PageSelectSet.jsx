import React from "react";
import { Header } from "./Header";
import { BtnSet } from "./BtnSet";
import cards from "../src/data.json"; 

export function PageSelectSet() {
    
    const uniqueSets = cards.reduce((acc, item) => {
        if (item.setName && !acc.includes(item.setName)) {
            acc.push(item.setName);
        }
        return acc;
    }, []);

    
    const sets = uniqueSets.map((name, index) => (
        <BtnSet key={name} name={name} id={index} />
    ));

    return (
        <div>
            <Header />
            <h2>Выбор сетов</h2>
            <ul className="set-list">
                {sets}
            </ul>
        </div>
    );
}