import React from 'react';
import CardsItem from './CardsItem';
import './Cards.css';

function Cards() {
    return (
        <>
            <div className="icon-hbox">
                <div className="cards">
                    <CardsItem
                        path="https://github.com/FabCo92"
                        class="fab fa-github fa-4x"
                        text="Github" /></div>

                <div className="cards">
                    <CardsItem className="card"
                        path="https://www.linkedin.com/in/fabian-seelert/"
                        class="fab fa-linkedin fa-4x"
                        text="LinkedIn" /></div>
            </div>
        </>
    )
}

export default Cards
