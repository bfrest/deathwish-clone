import React, { Component } from "react";
import skull from "../../icons/skull.png";
import HomeStyles from "./HomeStyles.css";

class Home extends Component {
  state = {};
  render() {
    return (
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
          <span className="bold-desc">One-time purchase $19.99</span>
          <br />
          <input type="radio" />
          <span className="bold-desc">Subscribe & Save 20%: $15.99</span>
          <button className="red-buy-button">BUY NOW</button>
        </form>

        <div className="home-desc">
          <p className="red-text">
            <img class="red-skull" src={skull} alt="red skull" />WARNING HIGHLY ADDICTIVE
          </p>
          <h2>DEATH WISH COFFEE</h2>
          <p>IS CREATED BY USING THE STRONGEST COMBINATION OF BEANS AND A PERFECT ROASTING PROCESS.</p>
          <p>
            Awaken your inner rebel with the <span className="bold-desc">worlds strongest coffee</span>.
          </p>
          <p>
            Be the best you can be with the clarity and focus that comes with the <span className="bold-desc">strong coffee</span>.
          </p>
          <p>
            Raise your coffee standards with one sip of these <span className="bold-desc"> premuim, bold beans</span>.
          </p>
          <p>
            Enjoy a smooth, never-bitter taste with subtle notes of <span className="bold-desc">cherry and chocolate</span>.
          </p>
          <p>
            Kick bad habits with something just as strong but <span className="bold-desc">100% natural</span>.
          </p>
          <p>
            We will refund you in full if it's not <span className="bold-desc">the strongest coffee you've ever had</span>.
          </p>
        </div>
        <hr className="line" />
      </div>
    );
  }
}

export default Home;
