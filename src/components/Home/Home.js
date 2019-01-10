import React, { Component } from "react";
import skull from "../../icons/skull.png";
import "./HomeStyles.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="homepage-wrapper">
        <img
          className="main-coffee-image"
          src="https://cdn.shopify.com/s/files/1/0271/7209/products/1lb-ground_2048x2048_8c4fab8d-e6aa-4a33-90de-52184944022f_1024x1024.png?v=1511887286"
          alt="coffee bag"
        />
        <div className="aligning-right">
          <br />
          <p>
            WAKE UP WITH THE WORLDS
            <br />
            <span className="bold-red-header">STRONGEST</span>
            <br />
            COFFEE
          </p>

          <p>100% MONEY-BACK GUARANTEE FREE DOMESTIC SHIPPING OVER $50</p>

          <form className="select-coffee">
            <p className="select-coffee-header">SELECT COFFEE TYPE</p>
            <ul>
              <li>
                <img className="coffee-type-img" src="https://res.cloudinary.com/bfrest/image/upload/v1547036310/grounds.jpg" alt="ground coffee" />
              </li>
              <li>
                <img className="coffee-type-img" src="https://res.cloudinary.com/bfrest/image/upload/v1547036310/whole.jpg" alt="whole bean coffee" />
              </li>
              <li>
                <img className="coffee-type-img" src="https://res.cloudinary.com/bfrest/image/upload/v1547036310/deathcups.jpg" alt="k-cup coffee" />
              </li>
            </ul>
            <input type="radio" />
            <span className="bold-desc">One-time purchase $19.99</span>
            <br />
            <br />
            <input type="radio" />
            <span className="bold-desc">Subscribe & Save 20%: $15.99</span>
            <br />
            <br />
            <label>Deliver Every</label>
            <select>
              <option>7 Days</option>
              <option>14 Days</option>
              <option>30 Days</option>
              <option>60 Days</option>
            </select>
            <br />
            <br />
            <button className="red-buy-button">BUY NOW</button>
            <p>100% No-BS Guarantee</p>
          </form>
        </div>

        <div className="home-desc">
          <div className="warning-description">
            <p className="red-text">
              <img className="red-skull" src={skull} alt="red skull" />
              WARNING HIGHLY ADDICTIVE
            </p>
            <h2>DEATH WISH COFFEE</h2>
            <p>IS CREATED BY USING THE STRONGEST COMBINATION OF BEANS AND A PERFECT ROASTING PROCESS.</p>
          </div>

          <div className="homepage-bullets">
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
        </div>
        <hr className="line" />
      </div>
    );
  }
}

export default Home;
