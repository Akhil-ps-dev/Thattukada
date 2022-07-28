import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Find Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        തട്ടുകടയിലെ രുചികളെ ഒരു മുറിയിലാക്കി വിളമ്പുന്ന അത്ഭുതമാണ്
        തിരുവനന്തപുരത്തെ ബാലണ്ണന്റെ കടയുടെ പ്രത്യേകത.
      
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
