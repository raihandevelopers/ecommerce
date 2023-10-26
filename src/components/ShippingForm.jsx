"use client";
import React, { useState } from "react";

const Ship = ({ checkout, setCheckout }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckout("payment");
  };

  return (
    <div className="flex flex-col items-center w-full pr-20 -ml-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl h-[90vh] w-11/12 px-4 py-2 "
      >
        <div className="flex flex-row justify-between gap-4 ">
          <input
            className="bg-whitesmoke h-16  rounded-lg px-4 w-1/2 my-4"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
          />

          <input
            className="bg-whitesmoke h-16  rounded-lg px-4 w-1/2 my-4"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-row justify-between gap-4 ">
          <input
            className="bg-whitesmoke h-16  rounded-lg px-4 w-1/2 my-4"
            id="streetAddress"
            name="streetAddress"
            type="text"
            placeholder="Street Address"
          />
          <input
            className="bg-whitesmoke h-16  rounded-lg px-4 w-1/2 my-4"
            id="apt"
            name="apt"
            type="text"
            placeholder="Apt. (Optional)"
          />
        </div>

        <input
          className="bg-whitesmoke h-16 mb-4 rounded-lg px-4 w-full"
          id="country"
          name="country"
          type="text"
          placeholder="Country"
        />
        <button
          className="mb-4 bg-black rounded-lg h-16 text-center text-white w-full"
          type="submit"
        >
          Submit
        </button>
        <button
          className="mb-4 bg-whitesmoke rounded-lg h-16 text-center text-gray w-full"
          onClick={() => setCheckout(null)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Ship;
