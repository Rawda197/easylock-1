"use client";
import React, { useEffect, useState } from 'react';
import ProductBox from '../components/ProductBox'; // مكون لعرض المنتجات الفردية

const SuggestedProducts = ({ currentProductId }) => {
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    // نحاكي جلب المنتجات من id التالي إلى 6 منتجات بعده
    const fetchSuggestedProducts = () => {
      const products = [];
      for (let i = currentProductId + 1; i <= currentProductId + 8 ; i++) {
        products.push({
          id: i,
          name: `منتج ${i}`,
          image: `${i}.png`,
          description: `هذه هي تفاصيل المنتج ${i}.`,
        });
      }
      setSuggestedProducts(products);
    };

    fetchSuggestedProducts();
  }, [currentProductId]);

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4 text-center bg-blue-900 text-white ">منتجات ذات صلة</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {suggestedProducts.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
