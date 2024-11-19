"use client";

import React, { useState } from "react";

const CreateYourBoxClient = ({ products }: { products: any[] }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  // Ürün ekleme
  const addProduct = (productId: string) => {
    if (selectedProducts.length < 6) {
      setSelectedProducts((prev) => [...prev, productId]);
    } else {
      alert("You can only add up to 6 products!");
    }
  };

  // Ürün çıkarma
  const removeProduct = (index: number) => {
    setSelectedProducts((prev) => prev.filter((_, i) => i !== index));
  };

  // Sepete ekleme
  const handleAddToCart = () => {
    if (selectedProducts.length === 0) {
      alert("Please select at least one product!");
      return;
    }

    console.log("Added to cart:", selectedProducts);
    alert("Products added to cart!");
  };

  return (
    <div className="container mx-auto p-4">
      {/* Üst Kutu Seçim Alanı */}
      <div className="flex justify-center gap-2 mb-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`w-16 h-16 border-2 border-dashed rounded-lg ${
              selectedProducts[index] ? "border-green-500" : "border-gray-300"
            } flex items-center justify-center cursor-pointer`}
            onClick={() => removeProduct(index)}
          >
            {selectedProducts[index] ? (
              <img
                src={
                  products.find((product) => product.id === selectedProducts[index])
                    ?.thumbnail
                }
                alt="Product"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">+</span>
            )}
          </div>
        ))}
      </div>

      {/* Ürün Listesi */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-2 rounded-lg text-center shadow-sm hover:shadow-md"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-16 h-16 mx-auto"
            />
            <p className="mt-2 text-sm font-medium">{product.title}</p>
            <button
              onClick={() => addProduct(product.id)}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
            >
              +
            </button>
          </div>
        ))}
      </div>

      {/* Sepete Ekle Butonu */}
      <div className="mt-6 text-center">
        <button
          onClick={handleAddToCart}
          className="bg-orange-500 text-white px-6 py-2 rounded text-lg hover:bg-orange-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CreateYourBoxClient;
