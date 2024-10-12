import React from 'react';

const Section2 = () => {
  return (
    <section className="bg-white py-0 px-0 z-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 font-serif">What exactly is PriFa Coffee?</h2>
        <p className="text-xl mb-6 font-openSans">
          PriFa Coffee Tablets offer a revolutionary way to enjoy coffee on-the-go. You simply place one into your mouth and it dissolves, providing an instant caffeine boost without the need for brewing or water.
        </p>
        <p className="text-xl mb-8 font-openSans">
          Perfect for busy professionals, students, athletes, gamers, travelers, and many more. Stay energized and focused all day. PriFa Coffee Tablets are both portable and affordable.
        </p>
        <button className="mt-10 mb-10 inline-block bg-[#b01b1b] text-white text-lg md:text-2xl font-semibold px-10 py-4 rounded-full shadow-[#B85910] shadow-lg hover:bg-[#B85928] transition">
          LEARN MORE
        </button>
      </div>
      <div className="relative w-full h-48 bg-[url('https://i.imgur.com/OweBSdO.jpeg')] bg-no-repeat bg-center"></div>
    </section>
  );
};

export default Section2;
