"use client"
import React from "react";

const PopUp = (props) => {
  return (
      <div className="card w-96 glass z-10 absolute top-1/2 left-1/2" ref={props.ref}>
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
  );
};

export default PopUp;
