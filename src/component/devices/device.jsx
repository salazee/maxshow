import React from "react";
import "../devices/device.css";

const Device = () => {
  return (
    <div  className="devcontainer">
      <h1>Supported Devices</h1>
      <div className="container">
    <div className="gadget">
      <img className="device" src="/image/andicon.jpg" alt="andicon" width={200}/>
      <p>iOS,Anddroid <br />& Huawei</p>
    </div>
    <div className="gadget">
      <img  className="device" src="/image/mac.png" alt="mac" width={180}/>
      <p>Window <br />& 
        Mac</p>
    </div>
    <div className="gadget">
      <img  className="device" src="/image/appletv.png" alt=" Tv" width={180}/>
      <p>Selected <br /> models</p>
    </div>
    <div className="gadget">
      
      <img  className="device"src="/image/andriod.jpg" alt="andriod tv" width={180} />
     
      <p>Selected <br />models </p>
    </div>
    <div className="gadget">
      <img  className="device" src="/image/icon-hisensetv.jpg" alt="Hisense"width={180} />
      <p>Selected TV <br />models</p>
    </div>
    <div className="gadget">
      <img  className="device" src="/image/iconsamsung.jpg" alt="Samsung" width={180}/>
      <p>Selected TV <br /> models</p>
    </div>
    <div className="gadget">
      <img  className="device" src="/image/lg.png" alt="LG" width={200}/>
      <p>Selected TV <br />models</p>
    </div>
    <div className="gadget">
      <img className="device" src="/image/iconxbox.jpg" alt="Xbox" width={200} />
      <p>Selected <br /> models</p>
    </div>
    <div className="gadget">
      <img className="device" src="/image/iconplaystation.jpeg" alt="Play Station" width={180}/>
      <p>Selected <br /> models</p>
    </div>
    <div className="gadget">
      <img className="device" src="/image/iconchromecast.jpg" alt="Chromecast"width={180} />
      <p>Selected <br />models</p>
    </div>
    <div className="gadget">
      <img className="device" src="/image/streama.png" alt="Streama"width={180} />
      <p>Selected TV <br />models</p>
    </div>
    <div className="gadget">
      <img  className="device" src="/image/explora.png" alt="Expora"width={180} />
      <p>Selected TV <br />   models</p>
    </div>
  </div>
    <button className="dev">View the full list</button></div>
  );
};
export default Device;
