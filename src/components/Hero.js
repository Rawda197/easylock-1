"use client";



import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative h-screen text-center flex flex-col justify-center items-center px-4 bg-white">
      {/* المحتوى */}
      <div className="relative z-10">
        {/* العنوان الرئيسي */}
        <h1 className="text-5xl font-bold mb-2 text-blue-900">
          اكتشف حلول التبريد المتكاملة
        </h1>
        {/* النص الفرعي */}
        <p className="text-xl max-w-xl mb-8 text-black">
          شركة متخصصة في إنتاج إكسسوارات غرف التبريد والصناديق المبردة، تابعة لشركة العالمية لغرف التبريد.
        </p>

        {/* أيقونات مواقع التواصل الاجتماعي مرتبة بجانب بعضها */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://web.facebook.com/easylock.icr/?_rdc=1&_rdr#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-blue-600"
          >
            <FiFacebook size={32} />
          </a>
          <a 
            href="https://www.twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-blue-400"
          >
            <FiTwitter size={32} />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-pink-500"
          >
            <FiInstagram size={32} />
          </a>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-blue-500"
          >
            <FiLinkedin size={32} />
          </a>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-red-500"
          >
            <FiYoutube size={32} />
          </a>
          <a 
            href="https://www.tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-black"
          >
            <SiTiktok size={32} />
          </a>
        </div>

        {/* زر اكتشف منتجاتنا (مكبر الحجم) */}
        <a
          href="/products"
          className="bg-blue-900 text-white py-4 px-8 rounded-full text-xl transition-colors hover:bg-blue-800"
        >
          اكتشف منتجاتنا
        </a>
      </div>
    </section>
  );
};

export default Hero;
