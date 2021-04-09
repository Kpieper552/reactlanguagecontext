import React, { useContext } from 'react';
import content from '../../data/content.json';
import { LanguageContext } from '../../context/LanguageContext';

function AllPlants() {
    const { test } = useContext(LanguageContext);

    return (
        <div className="page-container">
            <p>{test}</p>
            <h2>{content.nl.plants.title}</h2>
            <p>{content.nl.plants.text}</p>
            <ul>
                {content.nl.plants.plants.map((plant) => <li>{plant}</li>)}
            </ul>
        </div>
    );
}

export default AllPlants;

