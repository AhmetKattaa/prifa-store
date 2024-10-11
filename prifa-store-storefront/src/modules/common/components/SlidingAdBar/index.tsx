import React from 'react';

const SlidingAdBar = () => {
  return (
    <div className="overflow-hidden bg-gray-200">
      <div className="flex animate-slide">
        <div className="flex items-center space-x-10">
          <span className="text-xl font-bold">Special Offer: Buy 1 Get 1 Free!</span>
          <span className="text-xl font-bold">Free Shipping on Orders Over $50!</span>
          <span className="text-xl font-bold">New Arrivals Just Landed!</span>
          {/* Repeat or add more text as needed */}
        </div>
      </div>
    </div>
  );
};

export default SlidingAdBar;
