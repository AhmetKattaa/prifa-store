import React from 'react';
import Link from "next/link";

const Section4 = () => {
  return (
    <section className="bg-[#FFFAEC] py-4 px-6 md:px-16">
      <div
        className="
          max-w-8xl py-20 md:py-44 rounded-3xl text-white mx-auto 
          bg-cover bg-center bg-no-repeat 
          bg-[url('https://lh3.googleusercontent.com/d/1ggGyeT1bAM2IiWljjdpbdcdRr8qwZfY5=w1000?authuser=1/view')] 
          md:bg-[url('https://cdn.shopify.com/s/files/1/0699/0787/4083/files/Home-Page-Section-3_1.jpg?v=1720183067')]
        "
        style={{
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Sol taraf: Simgeler ve açıklamalar */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* İçerikler buraya eklenebilir */}
          </div>

          {/* Sağ taraf: Metin ve Buton */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-white space-y-4">
            <div className="inline-block bg-[#AA121E] text-white text-sm font-semibold px-4 py-1 rounded-full">
              New
            </div>
            <h2 className="text-4xl font-bold font-serif">
              PriFa Coffee Tablets
            </h2>
            <p className="text-lg p-8 font-semibold">
              PriFa Coffee tablets offer a powerful and portable caffeine solution, ideal for your fast-paced lifestyle.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 text-lg w-full">
              <div className="flex items-center justify-center">
                <span className="text-[#AA121E]">✔</span>
                <span className="ml-2">Less than $0.50 per serving</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-[#AA121E]">✔</span>
                <span className="ml-2">Up to 30mg of Coffee p/serving</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start w-full">
              <Link href="/store">
                <button className="mt-6 bg-[#AA121E] text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#B85928] transition">
                  GET YOUR PRIFA COFFEE TABLETS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/bolt.png?v=1719389049&width=2048"
              alt="No Crash or Jitters"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-bold text-[#4E3828]">No Crash or Jitters</h3>
            <p className="text-[#4E3828] max-w-xs">
              Experience clean energy without the dreaded crash or jitters. PriFa Coffee Tablets keep you steady and alert.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/save-money.png?v=1719389049&width=2048"
              alt="Affordable Price"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-bold text-[#4E3828]">Less than $0.50 per serving</h3>
            <p className="text-[#4E3828] max-w-xs">
              Affordable and cost-effective, each PriFa Coffee Tablet is less than $0.50, saving you money daily.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/coffee-beans_3.png?v=1719389049&width=2048"
              alt="Quality Ground Coffee"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-bold text-[#4E3828]">Quality Ground Coffee</h3>
            <p className="text-[#4E3828] max-w-xs">
              High quality ground coffee beans, that are sugar free, non-GMO, vegan and gluten free. Suitable for all.
            </p>
          </div>
        </div>
        <Link href="/store">
          <button className="mt-8 bg-[#AA121E] text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#B85928] transition">
            SHOP NOW
          </button>
        </Link>
      </div>

      <img
        className="mb-4 mx-auto"
        width="100"
        src="https://lh3.googleusercontent.com/d/1gTqlfRKncA2tQ-_z685R2m-tSz5oUYnY=w1000?authuser=1/view"
        alt="Decoration"
      />
    </section>
  );
};

export default Section4;

