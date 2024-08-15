import React from "react";
import '../why/why.css';


const Why =()=>{
    return(
        <div className="why-container">
            <div className="whysub1">
                <img className="whyimage" src="/image/ribbon.jpg" alt="Gift icon"/>
               <div className="why3">
               <h3>Have you bought Showmax already?</h3>
                <p>Redeem your prepaid <br />
                voucher here.</p>
               </div>
                <button className="why">Redeem Voucher</button>
            </div>
            <div className="whysub2">
                <img className="whyimage" src="/image/icondstv.jpg" alt="Dstv" />
                <div className="why3">
                <h3>Add Showmax to your DStv bill </h3>
                <p>As a DStv subscriber you can enjoy extra discounts and <br />the convenience of a single bill.</p>
                </div>
                <button className="why">Add to Bill</button>
            </div>
        </div>
    )
}
export default Why;