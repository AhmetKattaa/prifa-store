import React from 'react';
import Link from "next/link";

const Section6 = () => {
  return (
    <section className="py-6 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-serif leading-snug max-w-3xl mx-auto">
        Practical solution for those <br className="hidden md:block" />
        prioritizing convenience
      </h2>
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 md:ml-8">
            <img
              src="https://i.imgur.com/Adkd2EQ_d.webp?maxwidth=760&fidelity=grand"
              alt="Prifa Coffee in Pocket"
              className="max-w-full h-screen"
            />
          </div>

          {/* Sağ taraf: Görsel */}
          <div className="flex-1 h-96 bg-contain bg-no-repeat md:ml-4 bg-[url('https://i.imgur.com/rZPNVie_d.webp?maxwidth=1520&fidelity=grand')]"></div>
        </div>
      </div>

      {/* Buton - Fotoğrafların Hemen Altında */}
      <div className="flex justify-center mt-0">
        <Link href="/store">
          <button className="bg-[#AA121E] text-white text-lg md:text-xl font-semibold px-10 py-5 rounded-full shadow-xl hover:bg-[#B85928] transition">
            SHOP NOW
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Section6;
