import React from 'react';
import car from "../../assets/car.jpg"

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={car} alt='' />
          <div>
            <h1 className="text-5xl font-bold">DO YOU WANT TO SELL OR BUY A CAR?</h1>
            <p className="py-6">Visit our websites and browse lots of car as your demand <br />And also you sell your car through our websites.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;