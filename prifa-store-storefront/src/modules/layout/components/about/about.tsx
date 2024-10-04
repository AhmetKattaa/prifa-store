import React from 'react'

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to Prifa, where we bring you the finest coffee experience! 
        Our journey began with a passion for sourcing the best coffee beans 
        from around the world, and delivering them fresh to your cup.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Prifa, we are committed to delivering high-quality, ethically 
            sourced coffee that not only tastes great but also supports the 
            farmers who grow it. We believe in sustainability and fair trade, 
            ensuring that every cup of coffee you enjoy makes a positive impact 
            on the world.
          </p>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a world where coffee lovers can enjoy premium coffee 
            while contributing to a better planet. Our vision is to become a 
            global leader in the specialty coffee industry, known for our 
            quality, sustainability, and dedication to our customers.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Premium, ethically sourced coffee beans</li>
          <li>Commitment to sustainability and fair trade</li>
          <li>Freshly roasted and delivered to your doorstep</li>
          <li>Customer-focused service and satisfaction guaranteed</li>
        </ul>
      </div>
    </div>
  )
}

export default About
