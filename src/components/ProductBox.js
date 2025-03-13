"use client";
import React from "react";
import { useRouter } from "next/navigation"; // استيراد useRouter

const ProductBox = ({ product }) => {
  const router = useRouter(); // تهيئة useRouter
  const whatsappUrl = `https://wa.me/01151432229?text=أريد الإستفسار عن ${product.name}`;

  // دالة التوجيه إلى صفحة التفاصيل
  const handleDetailsClick = () => {
    router.push(`/products/details/${product.id}`); // التوجيه إلى المسار المطلوب
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-4">
        <a
          href={whatsappUrl}
          className="bg-green-700 text-white py-2 px-6 w-full md:w-auto text-center rounded hover:bg-green-600 transition-colors duration-300"
        >
          تواصل على واتساب
        </a>
        <button
          onClick={handleDetailsClick} // التوجيه إلى صفحة التفاصيل عند الضغط
          className="bg-blue-900 text-white py-2 px-6 w-full md:w-auto text-center rounded hover:bg-blue-600 transition-colors duration-300"
        >
          تفاصيل
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
