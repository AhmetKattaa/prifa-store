"use client";

import React from "react";

type Flavor = {
  id: string;
  title: string;
  handle: string; // Handle bilgisi eklendi
};

type FlavorProductsProps = {
  flavors: Flavor[];
  currentProductId: string;
};

const FlavorProducts: React.FC<FlavorProductsProps> = ({
  flavors,
  currentProductId,
}) => {
  if (!flavors || flavors.length === 0) {
    return <p className="text-gray-500">No flavors available.</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {flavors.map((flavor) => (
        <button
          key={flavor.id}
          className={`border rounded px-4 py-2 text-sm font-medium ${
            flavor.id === currentProductId
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          } hover:bg-blue-100`}
          onClick={() => (window.location.href = `/products/${flavor.handle}`)} // URL'de handle kullanılıyor
        >
          {flavor.title}
        </button>
      ))}
    </div>
  );
};

export default FlavorProducts;
