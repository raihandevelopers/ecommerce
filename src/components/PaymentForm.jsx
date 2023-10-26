"use client";
import React from "react";

const Payment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center w-full pr-20 -ml-8">
      <form
        className="bg-white shadow-2xl rounded-3xl h-[90vh] w-11/12 px-4 py-2 "
        onSubmit={handleSubmit}
      >
        <div className="text-[2.25rem] font-medium mb-4">Payment</div>
        <div className="mb-4 flex flex-col">
          <input
            type="text"
            name="cardholderName"
            placeholder="Cardholder Name"
            className="bg-whitesmoke h-16 mb-4 rounded-lg px-4"
            required
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            className="bg-whitesmoke h-16 mb-4 rounded-lg px-4"
            required
          />

          <div className="flex flex-row justify-between mb-4">
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              className="bg-whitesmoke h-16 rounded-lg px-4"
              required
            />

            <input
              type="text"
              name="expirationDate"
              placeholder="Expiration Date"
              className="bg-whitesmoke h-16 rounded-lg px-4"
              required
            />
          </div>
          <button
            type="submit"
            className="mb-4 bg-black rounded-lg h-16 flex items-center justify-center text-white"
          >
            Pay Now $49.98
          </button>
          <div className="font-medium mb-4">Other Cards Available</div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
