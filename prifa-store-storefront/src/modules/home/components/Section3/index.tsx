import React from 'react';

const Section3 = () => {
  return (
    <section className="bg-[#FFFAEC] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 font-serif">
          Why PriFa is Perfect
        </h2>

        {/* İçerik Alanı */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Sol Taraf: Simgeler ve Açıklamalar */}
          <div className="flex-1 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Her bir bilgi kartı */}
            {[
              {
                img: "https://cdn.shopify.com/s/files/1/0699/0787/4083/files/energy_1.png?v=1719388858&width=2048",
                title: "Effortless Energy Boost",
                text: "Get a quick and easy energy boost whenever you need it. No brewing required, just pop a tablet.",
              },
              {
                img: "https://cdn.shopify.com/s/files/1/0699/0787/4083/files/coffee-beans_2.png?v=1719388858&width=2048",
                title: "Convenient Coffee",
                text: "Enjoy your favorite coffee flavor on-the-go. Perfect for busy lifestyles with no preparation needed.",
              },
              {
                img: "https://cdn.shopify.com/s/files/1/0699/0787/4083/files/productivity.png?v=1719388858&width=2048",
                title: "Boost Productivity",
                text: "Stay sharp and focused throughout your day. PriFa helps to enhance your productivity effortlessly.",
              },
              {
                img: "https://cdn.shopify.com/s/files/1/0699/0787/4083/files/increase_1.png?v=1719388858&width=2048",
                title: "Power through tasks",
                text: "Whether you're working, studying, or exercising, PriFa Coffee Tablets give you the energy to power through efficiently.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-20 h-20 mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-base md:text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Sağ Taraf: Görsel */}
          <div className="flex-1 w-full">
            <img
              src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/Home_Page-IMG_002_1_3fe5cac4-68bd-4eb8-b393-b5d4cdc1783c.jpg?v=1720182940&width=2048"
              alt="Prifa Coffee in Pocket"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
