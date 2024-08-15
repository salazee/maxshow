import React from "react";
import "./App.css";
import Header from "./component/header/header";
import Why from "./component/why/why";
import Special from "./component/special/special";
import Hero from "./component/hero/hero";
import Device from "./component/devices/device";
import Promotion from "./component/promotion/promotion";
import Series from "./component/special/series";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Why />
      <Special />
      <Promotion/>
      <Series/>
      <Device/>
    </div>
  );
};

export default App;
