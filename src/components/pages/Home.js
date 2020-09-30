import React from 'react';
import '../../App.css'
import HomeContent from '../HomeContent';
import Cards from '../Cards';
import './Home.css';

function Home () {
    return(
        <>
            <div className="home-wrapper">
            <HomeContent />
            <div className="terminal-text">
                <p>Mehr zu mir...</p>
            </div>
            <Cards />
            </div>
        </>
    );
}

export default Home;
