"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ProductBox from "../../components/ProductBox";
import Header from "../../components/Header";  // إضافة الهيدر
import Footer from "../../components/Footer";  // إضافة الفوتر
import productsData from "../../data/productsData.json";

const Page = () => {
  const [selectedSection, setSelectedSection] = useState("all");
  const [sections, setSections] = useState([]);
  const [products, setProducts] = useState([]);

  // تحميل البيانات
  useEffect(() => {
    setSections(productsData.sections);
    setProducts(productsData.productsData);
  }, []);

  const handleSectionChange = (sectionId) => {
    setSelectedSection(sectionId);
  };

  return (
    <div> 
      {/* Header */}
      <Header />  {/* عرض الهيدر */}

      <div dir="rtl" className="flex flex-col min-h-screen mt-8">  {/* إضافة مسافة بين الهيدر والمحتوى */}
        {/* Main Content */}
        <div className="flex flex-col sm:flex-row flex-1">
          {/* Sidebar */}
          <div className="sm:w-1/4 w-full p-16 bg-gray-100">
            <h2 className="text-center text-xl font-bold mb-4">الأقسام</h2>
            <div className="grid gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={`py-2 px-4 text-white rounded-lg ${
                    selectedSection === section.id ? "bg-blue-700" : "bg-blue-900"
                  } hover:bg-blue-400 transition-all`}
                  style={{ width: "100%" }}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="p-4 flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products[selectedSection] &&
              products[selectedSection].map((product) => (
                <ProductBox key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />  {/* عرض الفوتر */}
    </div>
  );
};

export default Page;
