import React from 'react';

const Section2 = () => {
  return (
    <section className="bg-white py-0 px-0 md:px-0 z-10 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Başlık */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-serif leading-tight">
          What exactly is PriFa Coffee?
        </h2>

        {/* Açıklama Paragrafları */}
        <p className="text-base md:text-xl mb-4 md:mb-6 font-openSans">
          PriFa Coffee Tablets offer a revolutionary way to enjoy coffee on-the-go.
          You simply place one into your mouth and it dissolves, providing an instant
          caffeine boost without the need for brewing or water.
        </p>
        <p className="text-base md:text-xl mb-6 md:mb-8 font-openSans">
          Perfect for busy professionals, students, athletes, gamers, travelers, and many more. 
          Stay energized and focused all day. PriFa Coffee Tablets are both portable and affordable.
        </p>

        {/* Buton */}
        <button
          className="
            mt-4 mb-7 bg-[#b01b1b] text-white text-sm md:text-xl
            font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full
            shadow-[#B85910] shadow-lg hover:bg-[#B85928] transition
          "
        >
          LEARN MORE
        </button>
      </div>

      {/* Görsel Alanı */}
      <div
        className="
          relative w-full h-64 md:h-96 
          bg-[url('https://i.imgur.com/OweBSdO.jpeg')]
          bg-no-repeat bg-center bg-cover -mb-2
        "
      ></div>
    </section>
  );
};

export default Section2;
