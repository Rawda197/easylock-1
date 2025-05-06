"use client";
import React, { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import Lottie from "react-lottie"; // استيراد مكتبة Lottie

import Footer from '../components/Footer';
// تأكد من مسار الأنيميشن الصحيح
import SendAnimation from '../app/animation/send/SendAnimation.json';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق من المدخلات
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("يرجى إدخال الاسم ورقم الهاتف");
      return;
    }
    if (formData.message.trim().length < 10) {
      setError("يجب أن تحتوي الرسالة على 10 أحرف على الأقل");
      return;
    }

    setError("");
    setShowAnimation(true); // عرض الأنيميشن


    // بناء الرسالة لإرسالها عبر واتساب
    const message = `اسم: ${formData.name}\nبريد إلكتروني: ${formData.email}\nرقم هاتف: ${formData.phone}\nالعنوان: ${formData.address}\nالرسالة: ${formData.message}`;
    
    const whatsappLink = `https://wa.me/201145113456?text=${encodeURIComponent(message)}`;

    // فتح رابط واتساب مع الرسالة
    window.open(whatsappLink, '_blank');








    // إخفاء الأنيميشن بعد 4 ثوانٍ وإعادة ضبط الحقول
    setTimeout(() => {
      setShowAnimation(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    }, 4000);
  };

  // إعدادات الأنيميشن باستخدام Lottie
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: SendAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-screen p-6 m-6" dir="rtl">
      <div className="container mx-auto max-w-6xl shadow-lg rounded-2xl p-8 mt-8">
        <div className="w-full p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            <span className="bg-blue-900 text-white px-2 py-1 rounded-lg">نموذج التواصل معنا</span>
          </h2>
          <form className="space-y-4 text-right" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="name">
                الاسم <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full lg:w-2/1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition-colors hover:border-blue-600"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="email">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full lg:w-2/1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition-colors hover:border-blue-600"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="phone">
                رقم الهاتف <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full lg:w-2/1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition-colors hover:border-blue-600"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="message">
                الرسالة <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                minLength={10}
                rows={5}
                placeholder="اكتب رسالتك هنا..."
                className="w-full lg:w-2/1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition-colors hover:border-blue-600"
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full lg:w-2/1 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              إرسال
            </button>
          </form>

          {/* عرض الأنيميشن */}
          {showAnimation && (
            <div className="mt-6 flex justify-center">
              <Lottie options={defaultOptions} height={150} width={150} />
            </div>
          )}
        </div>
        <div className="w-full bg-blue-900 text-white p-6 rounded-lg mt-6 lg:mt-0 lg:ml-6">
      <h2 className="text-2xl font-bold mb-4 text-center">معلومات التواصل معنا</h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center gap-6">
        {/* رئيس مجلس الإدارة */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-center mb-2">رئيس مجلس الإدارة</p>
            <a href="tel:01234567890" className="flex items-center hover:underline transition-colors">
              <i className="fas fa-phone ml-2"></i>
              <span>01145113456</span>
            </a>
            <a href="mailto:ceo@example.com" className="flex items-center hover:underline transition-colors mt-2">
              <i className="fas fa-envelope ml-2"></i>
              <span>ceo@easylock.com</span>
            </a>
          </div>
        </div>
        {/* فريق المبيعات */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-center mb-2">فريق المبيعات</p>
            <a href="tel:01145113456" className="flex items-center hover:underline transition-colors">
              <i className="fas fa-phone ml-2"></i>
              <span>01122988700 </span>
            </a>
            <a href="mailto:sales@example.com" className="flex items-center hover:underline transition-colors mt-2">
              <i className="fas fa-envelope ml-2"></i>
              <span>sales@easylock.com</span>
            </a>
          </div>
        </div>
        {/* فريق التسويق */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-center mb-2">فريق التسويق</p>
            <a href="tel:01151432229" className="flex items-center hover:underline transition-colors">
              <i className="fas fa-phone ml-2"></i>
              <span>01151432229</span>
            </a>
            <a href="mailto:marketing@example.com" className="flex items-center hover:underline transition-colors mt-2">
              <i className="fas fa-envelope ml-2"></i>
              <span>marketing@easylock.com</span>
            </a>
          </div>
        </div>
        {/* فريق التوظيف */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-center mb-2">فريق التوظيف</p>
            <a href="tel:01143223219" className="flex items-center hover:underline transition-colors">
              <i className="fas fa-phone ml-2"></i>
              <span>01145113456</span>
            </a>
            <a href="mailto:recruitment@example.com" className="flex items-center hover:underline transition-colors mt-2">
              <i className="fas fa-envelope ml-2"></i>
              <span>HR@easylock.com</span>
            </a>
          </div>
        </div>
      </div>
      {/* عنوان الشركة */}
      <div className="mt-6 text-center lg:text-center">
        <p className="font-bold">جمهورية مصر العربية، القاهرة، 15 مايو، المنطقة الصناعية، المنطقة 8</p>
      </div>
   {/* الروابط الاجتماعية */}
<div className="mt-8 flex justify-center gap-6 flex-wrap">
  <a href="https://web.facebook.com/easylock.icr/?_rdc=1&_rdr#" className="text-xl text-gray-700 hover:text-blue-600 transition-transform transform hover:scale-110 duration-200">
    <FiFacebook />
  </a>
  <a href="#" className="text-xl text-gray-700 hover:text-blue-400 transition-transform transform hover:scale-110 duration-200">
    <FiTwitter />
  </a>
  <a href="#" className="text-xl text-gray-700 hover:text-pink-500 transition-transform transform hover:scale-110 duration-200">
    <FiInstagram />
  </a>
  <a href="#" className="text-xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-110 duration-200">
    <FiLinkedin />
  </a>
  

  <a href="#" className="text-xl text-gray-700 hover:text-red-500 transition-transform transform hover:scale-110 duration-200">
    <FiYoutube />
  </a>
  <a href="#" className="text-xl text-gray-700 hover:text-black transition-transform transform hover:scale-110 duration-200">
    <SiTiktok />
  </a>
</div>
    </div>
    </div>
    <Footer />

    </div>


  );
};

export default Contact;