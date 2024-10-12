import React from 'react';

const Section3 = () => {
  return (
    <section className="bg-[#FFFAEC] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 font-serif">
          Why PriFa is Perfect
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Sol taraf: Simgeler ve açıklamalar */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 mb-4">
                <img src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/energy_1.png?v=1719388858&width=2048" alt="Effortless Energy Boost" />
              </div>
              <h3 className="text-2xl font-bold">Effortless Energy Boost</h3>
              <p className="text-lg">
                Get a quick and easy energy boost whenever you need it. No brewing required, just pop a tablet.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 mb-4">
                <img src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/coffee-beans_2.png?v=1719388858&width=2048" alt="Convenient Coffee" />
              </div>
              <h3 className="text-2xl font-bold">Convenient Coffee</h3>
              <p className="text-lg">
                Enjoy your favorite coffee flavor on-the-go. Perfect for busy lifestyles with no preparation needed.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 mb-4">
                <img src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/productivity.png?v=1719388858&width=2048" alt="Boost Productivity" />
              </div>
              <h3 className="text-2xl font-bold">Boost Productivity</h3>
              <p className="text-lg">
                Stay sharp and focused throughout your day. PriFa helps to enhance your productivity effortlessly.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 mb-4">
                <img src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/increase_1.png?v=1719388858&width=2048" alt="Power through tasks" />
              </div>
              <h3 className="text-2xl font-bold">Power through tasks</h3>
              <p className="text-lg">
                Whether you're working, studying, or exercising, PriFa Coffee Tablets give you the energy to power through efficiently.
              </p>
            </div>
          </div>

          {/* Sağ taraf: Görsel */}
          <div className="flex-1 mt-8 md:mt-0 md:ml-8">
            <img
              src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/Home_Page-IMG_002_1_3fe5cac4-68bd-4eb8-b393-b5d4cdc1783c.jpg?v=1720182940&width=2048"
              alt="Prifa Coffee in Pocket"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
