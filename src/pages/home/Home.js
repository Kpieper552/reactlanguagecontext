import React, { useContext } from 'react';
import content from '../../data/content.json';
import { LanguageContext } from '../../context/LanguageContext';

function Home() {
    const { test } = useContext(LanguageContext);
    return (
        <div className="page-container">
            <p>{test}</p>
            <h2>{content.nl.home.title}</h2>
            <p>{content.nl.home.introText}</p>
        </div>
    );
}

export default Home;

