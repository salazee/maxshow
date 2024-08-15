import React from "react";
import "./promotion.css";

const Promotion = () => {
  return (
   
      <div className="promo-container">
        
        <div className="procont">
        <img src="/image/all.jpg" alt="All p L"  width={500}/>
      </div>

      <div className="prosub">
        <h1 className="pro1">The Premier League in your pocket</h1>
        <p >
          Stream all 380 matches live on mobile plus watch <br />    highlights,
          interviews, magazine shows and more.
        </p>
        <h3>FROM ONLY</h3>
        <h1 className="pro2">₦3,200</h1>
        <button className="dev"><a href="/">Get Premier League</a></button>

      </div>
    </div>
   
  );
};

export default Promotion;
