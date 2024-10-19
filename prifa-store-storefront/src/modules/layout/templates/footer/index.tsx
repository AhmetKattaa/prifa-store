import React from 'react';
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-[#AA121E] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Menü Bölümü */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Shop Prifa</a></li>
            <li><a href="#" className="hover:underline">About Prifa</a></li>
            <li><a href="#" className="hover:underline">Why Prifa?</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Bilgilendirme Bölümü */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Politika Bölümü */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Purchase Policy</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Alt Bölüm */}
      <div className="mt-12 border-t border-[#AA121E] pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 ">
          <span>Country/region</span>
          <select className="bg-transparent bg-[#AA121E] border border-white rounded-full px-4 py-2">
            <option>USD $ | United States</option>
            <option>EUR € | Europe</option>
            <option>TRY ₺ | Turkey</option>
          </select>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <img className="w-10" src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
          <img className="w-10" src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
          <img className="w-10" src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" />
          <img className="w-10" src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" />
          <img className="w-10" src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" />
        </div>
      </div>
      <h6 className="text-center">Developed By <Link className=" border-b border-white" href="google.com">Ahmad KATTAA</Link></h6>
    </footer>
  );
};

export default Footer;
