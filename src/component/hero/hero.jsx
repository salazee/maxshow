import React from "react";
import '../hero/hero.css';

const Hero =() =>{
    return(
        <div className="hero-container">
        <div className="hero-sub1">
        <h1 className="heroh1">Streaming for Africa</h1>
        <p className="herop">Stream or download hit series, movies and more. Plus watch every Premier League match live on mobile.</p>
        <h2 className="heroh2">FROM</h2>
        <h1 className="heroh1">#1,600</h1>
        <button className="get">SIGN UP AND START WATCHING</button>
        </div>
        <div className="hero-sub2">
        <img src="/image/ng-homepage.jpg" alt="Home page"  height={500}/>
        </div>
        </div>
    )
}
export default Hero;