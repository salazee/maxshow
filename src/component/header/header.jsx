import React from "react";
import './header.css';

const Header = () =>{
    return(
        <nav>
        <section className="head">
            <img  className="logo"src="/image/showmax.png" alt="Showmax logo" />
            <div className="buttonHead">
            <button className="btn">Sign in</button>
            <button className="get">Get Started</button>
            </div>
            </section>
            </nav>
    )
}

export default Header;