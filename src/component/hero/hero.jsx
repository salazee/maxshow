import React from "react";
import '../hero/hero.css';

const Hero =() =>{
    return(
        <div className="hero-container">
        <div className="hero-sub1">
        <h2>Streaming for Africa</h2>
        <p>Stream or download hit series, movies and more. Plus watch every Premier League match live on mobile.</p>
        <h2>FROM</h2>
        <h1>#1,600</h1>
        <button>SIGN UP AND START WATCHING</button>
        </div>
        <div className="hero-sub2">
        <img src="/ng-homepage.jpg" alt="Home page" />
        </div>
        </div>
    )
}
export default Hero;