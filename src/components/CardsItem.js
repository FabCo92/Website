import React from 'react';
import './CardsItem.css';

function CardsItem(props) {
    return (
        <div>
            <div className="cards-wrapper">
                <div className="icon">
                    <a href={props.path}>
                        <div className="icon">
                            <i class={props.class} />
                        </div>
                    </a>
                    <div className="textunder">
                        <h3>{props.text}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardsItem
