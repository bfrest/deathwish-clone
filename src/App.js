import React, { Component } from "react";
import AppStyle from "./AppStyles.css";
import skull from "./icons/skull.png";

// components
import MobileNav from "./components/MobileNav/MobileNav.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MobileNav />
        <div className="homepage-wrapper">
          <img
            className="main-coffee-image"
            src="https://cdn.shopify.com/s/files/1/0271/7209/products/1lb-ground_2048x2048_8c4fab8d-e6aa-4a33-90de-52184944022f_1024x1024.png?v=1511887286"
          />

          <p>
            BUY THE WORLDS <br />
            <span className="bold-red-header">STRONGEST</span>
            <br />COFFEE
          </p>

          <p>100% MONEY-BACK GUARANTEE FREE DOMESTIC SHIPPING OVER $50</p>

          <form className="select-coffee">
            <p className="select-coffee-header">SELECT COFFEE TYPE</p>
            <ul>
              <li>
                <img className="coffee-type-img" src="https://cdn.shopify.com/s/files/1/0271/7209/t/99/assets/ground.jpg?13199823163854796125" alt="ground coffee" />
              </li>
              <li>
                <img className="coffee-type-img" src="https://cdn.shopify.com/s/files/1/0271/7209/t/99/assets/whole.jpg?13199823163854796125" alt="whole bean coffee" />
              </li>
              <li>
                <img className="coffee-type-img" src="https://cdn.shopify.com/s/files/1/0271/7209/t/99/assets/deathcups.jpg?13199823163854796125" alt="k-cup coffee" />
              </li>
            </ul>

            <input type="radio" />
            <span>One-time purchase $19.99</span>
            <br />
            <input type="radio" />
            <span>Subscribe & Save 20%: $15.99</span>
            <button className="red-buy-button">BUY NOW</button>
          </form>

          <div>
            <p className="red-text">
              <img class="red-skull" src={skull} alt="red skull" />WARNING HIGHLY ADDICTIVE
            </p>
            <h2>DEATH WISH COFFEE</h2>
            <p>IS CREATED BY USING THE STRONGEST COMBINATION OF BEANS AND A PERFECT ROASTING PROCESS.</p>
            <p>
              Awaken your inner rebel witht the <span>worlds strongest coffe</span>.
            </p>
            <p>
              Be the best you can be with the clarity and focus that comes with the <span>strong coffee</span>.
            </p>
            <p>
              Raise your coffee standards with one sip of these <span> premuim, bold beans</span>.
            </p>
            <p>
              Enjoy a smooth, never-bitter taste with subtle notes of <span>cherry and chocolate</span>.
            </p>
            <p>
              Kick bad habits with something just as strong but <span>100% natural</span>.
            </p>
            <p>
              We will refund you in full if it's not <span>the strongest coffee you've ever had</span>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
