import React from "react";
import './series.css';


const Series = ()=>{
    return(
<div className="movie">
    <h1>Entertainment everyone’s talking about</h1>
    <p>More hit movies, series, doccies and kids’ shows.
    </p>
    <div className="show">
        <div className="film">
            <img src="/image/rhol.jpg" alt=""  width={100}   />
        </div>
        <div className="film">
            <img src="/image/jay.jpg" alt="Jay jay" width={100} />
        </div>
        <div className="film">
            <img src="/image/winking.jpg" alt="Winter King" width={100}  />
        </div>
        <div className="film">
            <img src="/image/fast.jpg" alt="Fast X"  width={100} />
        </div>
        <div className="film">
            <img src="/image/pinkf" alt="Flawsome"  width={100} />
        </div>
        <div className="film">
            <img src="/image/slumk.jpg" alt="Slum King"  width={100} />
        </div>
      
    </div>
</div>
    )
}
export default Series;