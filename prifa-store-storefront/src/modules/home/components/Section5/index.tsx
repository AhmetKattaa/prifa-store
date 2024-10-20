import React from 'react';

const Section5 = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-serif">
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
            <picture className="w-24 h-24 rounded-full border-4 border-[#AA121E] absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <img
                src="https://andytown-public.s3.us-west-1.amazonaws.com/templates/component-templates/Hims%20LP/Hims_Landing_page_images_16.webp%3Fv%3D1706591908"
                alt="Francis P."
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </picture>
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
            <picture className="w-24 h-24 rounded-full border-4 border-[#AA121E] absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <img
                src="https://andytown-public.s3.us-west-1.amazonaws.com/templates/component-templates/mud%202/Muddy_2.jpg%3Fv%3D1716287397"
                alt="John D."
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </picture>
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
            <picture className="w-24 h-24 rounded-full border-4 border-[#AA121E] absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <img
                src="https://andytown-public.s3.us-west-1.amazonaws.com/templates/component-templates/Hims%20LP/Hims_Landing_page_images_17.webp%3Fv%3D1706591908"
                alt="Emily R."
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </picture>
          </div>
        </div>

        {/* VIEW ALL REVIEWS Butonu */}
        <div className="mt-12 text-center">
          <button className="bg-[#AA121E] text-white text-xl font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#B85928] transition">
            VIEW ALL REVIEWS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
