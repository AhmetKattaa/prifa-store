import React from 'react';

const Section8 = () => {
  return (
    <section className="py-16 px-4 bg-[#FAF5F0]">
      {/* Dört Fotoğraf Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-16">
        <img
          src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/on_the_mountain_1.jpg?v=1720184133&width=2048"
          alt="Working with laptop"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/in_the_gym_with_espersso_box_1.jpg?v=1720184133&width=2048"
          alt="Gym with Prifa"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/in_the_bus_1.jpg?v=1720184133&width=2048"
          alt="Talking on public transport"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/Prifa_latte_with_bicycle_1.jpg?v=1720184133&width=2048"
          alt="Biking with Prifa"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Sık Sorulan Sorular ve Başlık */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Got questions? <br /> We’ve got answers</h2>
        <p className="text-lg text-gray-600">Frequently Asked Questions</p>
      </div>

      {/* Accordion - Sık Sorulan Sorular */}
      <div className="max-w-5xl mx-auto">
        <details className="mb-4 bg-white rounded-lg shadow-md">
          <summary className="cursor-pointer p-4 font-semibold">
            How do I use Prifa Coffee Tablets?
          </summary>
          <div className="p-4 text-gray-700">
              Simply place one tablet in your mouth and let it dissolve. No need for a cup or water – enjoy your coffee on the go.
          </div>
        </details>

        <details className="mb-4 bg-white rounded-lg shadow-md">
          <summary className="cursor-pointer p-4 font-semibold">
            How much caffeine is in each tablet?
          </summary>
          <div className="p-4 text-gray-700">
            Each Espresso tablet contains 30mg of caffeine, Cardamom contains 15mg of caffeine, Latte contains 10mg of caffeine, providing a balanced and controlled dose for enhanced alertness and focus.
          </div>
        </details>

        <details className="mb-4 bg-white rounded-lg shadow-md">
          <summary className="cursor-pointer p-4 font-semibold">
            Can I take Prifa Coffee Tablets before a workout?
          </summary>
          <div className="p-4 text-gray-700">
          Absolutely! The caffeine in our tablets can help boost your energy and focus, making them a great option for a pre-workout pick-me-up.
          </div>
        </details>

        <details className="mb-4 bg-white rounded-lg shadow-md">
          <summary className="cursor-pointer p-4 font-semibold">
            Can I use these tablets as a replacement for my morning coffee?
          </summary>
          <div className="p-4 text-gray-700">
              Absolutely, Prifa Coffee Tablets are designed to provide you with the coffee experience you love, but in a more convenient and healthier form.
          </div>
        </details>

        <details className="mb-4 bg-white rounded-lg shadow-md">
          <summary className="cursor-pointer p-4 font-semibold">
            Are these tablets flavored?
          </summary>
          <div className="p-4 text-gray-700">
            Yes, our tablets come in three delightful flavors: Espresso, Latte, and Cardamom. Each tablet offers a unique and mellow coffee experience that caters to your taste preferences.
          </div>
        </details>

        <details className="mb-4 bg-white rounded-lg shadow-md">
          <summary className="cursor-pointer p-4 font-semibold">
            Can I give these tablets to my children?
          </summary>
          <div className="p-4 text-gray-700">
            Prifa Coffee Tablets are formulated for adult consumption and are not recommended for children.
          </div>
        </details>

        <details className="mb-4 bg-white rounded-lg shadow-md">
          <summary className="cursor-pointer p-4 font-semibold">
            Can I dissolve these tablets in water?
          </summary>
          <div className="p-4 text-gray-700">
            There's no need to dissolve them in water. Just let the tablet dissolve in your mouth for an instant coffee experience.
          </div>
        </details>

        <details className="mb-4 bg-white rounded-lg shadow-md">
          <summary className="cursor-pointer p-4 font-semibold">
            Do the tablets contain any artificial sweeteners?
          </summary>
          <div className="p-4 text-gray-700">
            No, our coffee tablets are free from artificial sweeteners, providing you with a natural coffee experience.
          </div>
        </details>
      </div>
    </section>
  );
};

export default Section8;
