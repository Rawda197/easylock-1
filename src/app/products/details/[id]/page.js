"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Header from '../../../../components/Header'; 
import Footer from '../../../../components/Footer'; 
import SuggestedProducts from '../../../../components/SuggestedProducts'; // استيراد المنتجات المقترحة

const Page = ({ params }) => {
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchedProduct = {
      id: parseInt(params.id),
      name: `منتج ${params.id}`,
      image: `${params.id}.png`,
      code: `PRD-${params.id}`,
      description: `هذه هي تفاصيل المنتج ${params.id}.`,
    };
    setProduct(fetchedProduct);
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const whatsappUrl = `https://wa.me/01151432229?text=أريد الإستفسار عن ${product.name}`;

  return (
    <div>
      {/* استدعاء الهيدر */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* صورة المنتج */}
          <div className="md:w-1/2 p-4">
            <div className="border-4 border-blue-900 p-2 rounded-lg hover:shadow-lg transition-all duration-300">
              <img
                src={`/images/${product.image}`}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div className="md:w-1/2 md:pl-8 text-right" dir="rtl">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">اسم المنتج: {product.name}</h2>
              <p className="text-gray-500">كود المنتج: {product.code}</p>
              <p className="text-lg">تفاصيل المنتج: {product.description}</p>

              {/* تقييم المنتج */}
              <div className="flex items-center justify-en ">
                <span className="text-gray-700 dir=rtl">تقييم المنتج:</span>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 ml-1" />
                ))}
              </div>
            </div>

            {/* الأزرار في المنتصف */}
            <div className="flex justify-center  gap-4 mt-6">
              <a
                href={whatsappUrl}
                className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                اطلب المنتج الآن على واتساب
              </a>
              <button
                onClick={() => router.back()}
                className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                العودة للخلف
              </button>
            </div>
          </div>
        </div>

        {/* مكون المنتجات المقترحة */}
        <SuggestedProducts currentProductId={product.id} />
      </div>

      {/* استدعاء الفوتر */}
      <Footer />
    </div>
  );
};

export default Page;
