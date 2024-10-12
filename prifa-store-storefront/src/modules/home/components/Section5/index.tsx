import React from 'react';

const Section5 = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-12 font-serif">
        Real results from people like you
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* İnceleme Kartı 1 */}
          <div className="bg-[#FAEDE7] rounded-xl shadow-lg relative pb-16 flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/Copy_of_3box_with_pcs_1.jpg?v=1720183315&width=2048"
              alt="Review 1"
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center flex-grow">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <h3 className="text-xl font-bold">Espresso on the Run</h3>
              <p className="text-gray-700 mt-2">
                I found these 8 months ago when I was traveling and could not rely on being able to score a cup of Java or an espresso on the run. The flavor is perfect.
              </p>
            </div>
            <p className="mt-4 font-bold">Francis P.</p>
            <div
              className="w-24 h-24 bg-cover bg-center rounded-full border-4 border-[#AA121E] absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              style={{
                backgroundImage: `url('https://andytown-public.s3.us-west-1.amazonaws.com/templates/component-templates/Hims%20LP/Hims_Landing_page_images_16.webp%3Fv%3D1706591908')`,
              }}
            ></div>
          </div>

          {/* İnceleme Kartı 2 */}
          <div className="bg-[#FAEDE7] rounded-xl shadow-lg relative pb-16 flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/girl_with_2_box_1.jpg?v=1720183708&width=2048"
              alt="Review 2"
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center flex-grow">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <h3 className="text-xl font-bold">A Daily Essential</h3>
              <p className="text-gray-700 mt-2">
                These tablets have become my daily go-to for a quick caffeine boost. No more waiting for coffee to brew.
              </p>
            </div>
            <p className="mt-4 font-bold">John D.</p>
            <div
              className="w-24 h-24 bg-cover bg-center rounded-full border-4 border-[#AA121E] absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              style={{
                backgroundImage: `url('https://andytown-public.s3.us-west-1.amazonaws.com/templates/component-templates/mud%202/Muddy_2.jpg%3Fv%3D1716287397')`,
              }}
            ></div>
          </div>

          {/* İnceleme Kartı 3 */}
          <div className="bg-[#FAEDE7] rounded-xl shadow-lg relative pb-16 flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/Prifa_Man_climbing_with_Prifa_box_2_4x_1.jpg?v=1720183707&width=2048"
              alt="Review 3"
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center flex-grow">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <h3 className="text-xl font-bold">Perfect for Outdoors</h3>
              <p className="text-gray-700 mt-2">
                I love taking these on my hiking trips. They are so compact and give me the energy boost I need.
              </p>
            </div>
            <p className="mt-4 font-bold">Emily R.</p>
            <div
              className="w-24 h-24 bg-cover bg-center rounded-full border-4 border-[#AA121E] absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              style={{
                backgroundImage: `url('https://andytown-public.s3.us-west-1.amazonaws.com/templates/component-templates/Hims%20LP/Hims_Landing_page_images_17.webp%3Fv%3D1706591908')`,
              }}
            ></div>
          </div>
        </div>

        {/* VIEW ALL REVIEWS Butonu */}
        <div className="mt-20 text-center">
          <button className="bg-[#AA121E] text-white text-2xl font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#B85928] transition">
            VIEW ALL REVIEWS
          </button>
        </div>
      </div>

      {/* Yeni Eklenecek Kısım */}
      <div
        className="mt-20 bg-cover bg-center text-white py-16"
        style={{
          backgroundImage: `url('https://cdn.shopify.com/s/files/1/0771/0860/9337/files/background-desktop.webp?v=1703580545')`,
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Sol taraf: Büyük başlık */}
          <div className="text-left ">
            <h2 className="text-4xl text-center font-bold">It's what's on the inside that counts</h2>
          </div>
          {/* Sağ taraf: Fotoğraflar */}
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0771/0860/9337/files/11_e08990b1-bd97-4640-8cec-97e6f1850120.svg?v=1703580757"
                alt="Sugar Free"
                className="w-10 h-10"
              />
              <p className="text-base text-center mt-2">Sugar Free</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0771/0860/9337/files/22_70b19864-56e0-401d-9b61-6e221914f172.svg?v=1703580800"
                alt="Non-GMO"
                className="w-10 h-10"
              />
              <p className="text-base text-center mt-2">Non-GMO</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0699/0787/4083/files/coffee-beans_1.png?v=1719190733&width=2048"
                alt="Quality Ground Coffee"
                className="w-10 h-10"
              />
              <p className="text-base text-center mt-2">Quality Ground Coffee</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0771/0860/9337/files/44_427e1704-fa6e-432d-aa93-5a008cd9913f.svg?v=1703580874"
                alt="Vegan"
                className="w-10 h-10"
              />
              <p className="text-base text-center mt-2">Vegan</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0771/0860/9337/files/55.svg?v=1703580903"
                alt="Gluten Free"
                className="w-10 h-10"
              />
              <p className="text-base text-center mt-2">Gluten Free</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
