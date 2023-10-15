import React from "react";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-cicle" />
            <h1>
              Discover <br /> Most Suitable <br />
              Property
            </h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty Forget all
            </span>
            <span className="secondaryText">
              difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Procurar</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter">
              <span className="stat">
                <CountUp start={8950} end={9007} duration={4} />
                <span className="statColor">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter">
              <span className="stat">
                <CountUp start={1950} end={2000} duration={4} />
                <span className="statColor">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter">
              <span className="stat">
                <CountUp end={28} />
                <span className="statColor">+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/*left side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
