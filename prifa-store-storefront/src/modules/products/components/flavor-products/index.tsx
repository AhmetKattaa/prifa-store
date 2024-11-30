"use client";

import React from "react";
import Thumbnail from "@modules/products/components/thumbnail"; // Thumbnail bileşeni

type Flavor = {
  id: string;
  title: string;
  handle: string;
  thumbnail: string | null; // Thumbnail null olabilir
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
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {flavors.map((flavor) => (
        <div
          key={flavor.id}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => (window.location.href = `/products/${flavor.handle}`)}
        >
          {/* Çerçeve */}
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-full border-2 ${
              flavor.id === currentProductId ? "border-blue-500" : "border-gray-300"
            }`}
          >
            {/* Fotoğraf */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Thumbnail
                thumbnail={flavor.thumbnail}
                size="small" // Küçük boyutlu resim
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Ürün İsmi */}
          <p
            className={`text-sm font-medium text-center ${
              flavor.id === currentProductId
                ? "text-blue-500"
                : "text-gray-700"
            }`}
          >
            {flavor.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlavorProducts;
