import React from "react";

import './card.css'

/**
 *
 * @param {*} props
 * @returns a card including the user's informations
 */
const KeyData = (props) => {
    return (
        <div className={`informations__${props.className}`}>
            <img src={props.src} alt={props.alt} />
            <div className={`${props.textClassName}__text`}>
                <h1>{props.data}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default KeyData;
