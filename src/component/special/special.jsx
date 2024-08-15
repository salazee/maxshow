import React from "react";
import '../special/special.css';


const Special =() =>{
    return(
        <div className="one">
        <h3 className="spearhead">Exclusive African Originals</h3>
        <p className="spearp">Even more of the biggest original show you won't see elsewhere</p>
                    <div className="gallery">
                    <div className="each"><img src="/image/agu.jpg" alt="Agu" width={200} /></div>
                    <div className="each"><img src="/image/chetam.jpg" alt="Chetam" width={200}/></div>
                    <div className="each"><img src="/image/rhol.jpg" alt="Rhol" width={200}/></div>
           
                    <div className="each"><img src="/image/some.jpg" alt="Flawsome" width={200}/></div>
                    <div className="each"><img src="/image/wura2.jpg" alt="wura"width={200}/></div>
                    <div className="each"><img src="/image/sadau.jpg" alt="Sadau" width={200} />
                    </div>
                </div>
                </div>
    )
}
export default Special;