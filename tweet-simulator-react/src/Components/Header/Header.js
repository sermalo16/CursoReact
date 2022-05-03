import React from 'react';
import './Header.scss';
import TwitterLogo from "../../Assets/Imagenes/twitter-logo.png";

export default function Header(){

    return (
        <div className="header">
            <img src={TwitterLogo} alt="Twitter Simulator"/>
            <h1>Tweets Simulator</h1>
        </div>
    )
}