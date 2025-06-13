"use client";
import React, { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import Lottie from "lottie-react"; // ✅ مكتبة حديثة

import Footer from '../components/Footer';
// import LogoAnimation from '../app/animation/Logo/LogoAnimation.json';

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

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("يرجى إدخال الاسم ورقم الهاتف");
      return;
    }

    if (formData.message.trim().length < 10) {
      setError("يجب أن تحتوي الرسالة على 10 أحرف على الأقل");
      return;
    }

    setError("");
    setShowAnimation(true);

    const message = `اسم: ${formData.name}\nبريد إلكتروني: ${formData.email}\nرقم هاتف: ${formData.phone}\nالعنوان: ${formData.address}\nالرسالة: ${formData.message}`;
    const whatsappLink = `https://wa.me/201145113456?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

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

  return (
    <div className="min-h-screen p-6 m-6" dir="rtl">
      <div className="container mx-auto max-w-6xl shadow-lg rounded-2xl p-8 mt-8">
        <div className="w-full p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            <span className="bg-blue-900 text-white px-2 py-1 rounded-lg">نموذج التواصل معنا</span>
          </h2>

          <form className="space-y-4 text-right" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-semibold">الاسم <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">رقم الهاتف <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">الرسالة <span className="text-red-500">*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                minLength={10}
                rows={5}
                placeholder="اكتب رسالتك هنا..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800">
              إرسال
            </button>
          </form>

          {showAnimation && (
            <div className="mt-6 flex justify-center">
              <Lottie animationData={SendAnimation} loop={false} className="w-[150px] h-[150px]" />
            </div>
          )}
        </div>

        <div className="w-full bg-blue-900 text-white p-6 rounded-lg mt-6">
          <h2 className="text-2xl font-bold mb-4 text-center">معلومات التواصل معنا</h2>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-center gap-6">

            {/* رئيس مجلس الإدارة */}
            <ContactBlock title="رئيس مجلس الإدارة" phone="01145113456" email="ceo@easylock.com" />
            <ContactBlock title="فريق المبيعات" phone="01122988700" email="sales@easylock.com" />
            <ContactBlock title="فريق التسويق" phone="01151432229" email="marketing@easylock.com" />
            <ContactBlock title="فريق التوظيف" phone="01145113456" email="HR@easylock.com" />
          </div>

          <div className="mt-6 text-center">
            <p className="font-bold">جمهورية مصر العربية، القاهرة، 15 مايو، المنطقة الصناعية، المنطقة 8</p>
          </div>

          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <SocialLink icon={<FiFacebook />} link="https://web.facebook.com/easylock.icr/?_rdc=1&_rdr#" />
            <SocialLink icon={<FiTwitter />} link="#" />
            <SocialLink icon={<FiInstagram />} link="#" />
            <SocialLink icon={<FiLinkedin />} link="#" />
            <SocialLink icon={<FiYoutube />} link="#" />
            <SocialLink icon={<SiTiktok />} link="#" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// 🧩 عناصر فرعية لتنظيم الكود
const ContactBlock = ({ title, phone, email }) => (
  <div className="w-full sm:w-1/2 lg:w-1/4">
    <div className="flex flex-col items-center">
      <p className="font-semibold text-center mb-2">{title}</p>
      <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
      <a href={`mailto:${email}`} className="mt-2 hover:underline">{email}</a>
    </div>
  </div>
);

const SocialLink = ({ icon, link }) => (
  <a href={link} className="text-xl text-gray-100 hover:text-yellow-300 transition-transform transform hover:scale-110 duration-200">
    {icon}
  </a>
);

export default Contact;
