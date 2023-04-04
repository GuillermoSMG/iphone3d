import React from "react";
import iPhone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

function Jumbotron() {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img src={iPhone} alt="iPhone 14 Pro" className="logo" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a onClick={handleLearnMore} className="link">
            Learn more
          </a>
        </li>
      </ul>
      <img src={HoldingIphone} className="iphone-img" alt="iPhone" />
    </div>
  );
}

export default Jumbotron;
