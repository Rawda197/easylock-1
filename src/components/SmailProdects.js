"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductBox = ({ product }) => {
  const router = useRouter();
  const whatsappUrl = `https://wa.me/01145113456?text=أريد الإستفسار عن ${product.name}`;

  const handleDetailsClick = () => {
    router.push(`/products/details/${product.id}`);
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-2 text-right">{product.name}</h3>
      <p className="text-gray-600 mt-1 text-right">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleDetailsClick}
          className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          تفاصيل
        </button>
        <a
          href={whatsappUrl}
          className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          تواصل على واتساب
        </a>
      </div>
    </div>
  );
};

const SmailProduct = () => {
  const router = useRouter();

  const products = [
    {
      id: 1,
      name: "منتج 1",
      image: "16.png",
      description: "وصف المنتج 1",
      productCode: "P016",
      detailedDescription:
        "تفاصيل المنتج 1 الكبيرة. يحتوي على شرح تفصيلي حول المواد المستخدمة لتصنيعه والتقنيات المبتكرة.",
    },
    {
      id: 2,
      name: "منتج 2",
      image: "17.png",
      description: "وصف المنتج 2",
      productCode: "P017",
      detailedDescription:
        "تفاصيل المنتج 2 الكبيرة. يحتوي على شرح تفصيلي حول المواد المستخدمة لتصنيعه والتقنيات المبتكرة.",
    },
    {
      id: 3,
      name: "منتج 3",
      image: "18.png",
      description: "وصف المنتج 3",
      productCode: "P018",
      detailedDescription:
        "تفاصيل المنتج 3 الكبيرة. يحتوي على شرح تفصيلي حول المواد المستخدمة لتصنيعه والتقنيات المبتكرة.",
    },
    {
      id: 4,
      name: "منتج 4",
      image: "19.png",
      description: "وصف المنتج 4",
      productCode: "P019",
      detailedDescription:
        "تفاصيل المنتج 4 الكبيرة. يحتوي على شرح تفصيلي حول المواد المستخدمة لتصنيعه والتقنيات المبتكرة.",
    },
    {
      id: 5,
      name: "منتج 5",
      image: "20.png",
      description: "وصف المنتج 5",
      productCode: "P020",
      detailedDescription:
        "تفاصيل المنتج 5 الكبيرة. يحتوي على شرح تفصيلي حول المواد المستخدمة لتصنيعه والتقنيات المبتكرة.",
    },
    {
      id: 6,
      name: "منتج 6",
      image: "21.png",
      description: "وصف المنتج 6",
      productCode: "P021",
      detailedDescription:
        "تفاصيل المنتج 6 الكبيرة. يحتوي على شرح تفصيلي حول المواد المستخدمة لتصنيعه والتقنيات المبتكرة.",
    },
  ];

  const handleMoreProducts = () => {
    router.push("/products");
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <div className="text-center bg-blue-900 text-white py-2 px-4 inline-block rounded-lg">
          <h2 className="text-2xl font-bold">Easy Lock منتجات شركة</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
        <div className="col-span-full flex justify-center mt-6">
          <button
            onClick={handleMoreProducts}
            className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            المزيد من المنتجات
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmailProduct;
