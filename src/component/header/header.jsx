import React from "react";
import './header.css';

const Header = () =>{
    return(
        <nav>
        <section className="head">
            <img src="/showmax.png" alt="Showmax logo" />
            <button className="btn">Sign in</button>
            <button className="get">Get Started</button>
            </section>
            </nav>
    )
}

export default Header;