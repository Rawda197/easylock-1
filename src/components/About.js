"use client";

import { useState } from 'react';

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState(""); // قيمة فارغة تعني عدم اختيار أي قسم

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection("");
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-6">
      
      {/* محتوى الصفحة */}
      <div className="mb-4">

        </div>

      {/* Logo Section */}
      <div className="w-72 h-72 bg-gray-200 rounded-full flex justify-center items-center shadow-lg">
        <img
          src="/favicon.png" // تأكد من مسار اللوجو
          alt="Company Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Company Description */}
      <div className="mt-6 p-4 bg-white shadow-lg rounded-lg text-center max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">عن الشركة</h1>
        <p className="text-black">
          شركة ايزي لوك هي شركة مصرية عريقة في مجال إنتاج إكسسوارات غرف التبريد والصناديق المبردة، وهي الشركة الوحيدة في الوطن العربي التي تصنع هذه الإكسسوارات محلياً. تأسست الشركة عام 2010، وتعتبر تابعة لشركة العالمية لغرف التبريد. تأسست الشركة على أسس من الابتكار والجودة، ويقودها المؤسس عمر اسبتان. تلتزم الشركة بتقديم منتجات عالية الأداء تلبي احتياجات الأسواق المحلية والدولية، وتتميز باستخدام أحدث التقنيات في التصنيع وتطبيق معايير الجودة الصارمة لضمان رضا العملاء وتلبية المتطلبات المتغيرة في سوق التجزئة والتوزيع. كما تساهم في تطوير حلول تبريد متقدمة تحسن من كفاءة الطاقة وتقلل من استهلاك الموارد.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="mt-6 space-y-4 max-w-lg w-full">
        {/* Policy Button */}
        <button
          className="bg-blue-900 text-white p-3 rounded-lg shadow-md w-full"
          onClick={() => toggleSection("policy")}
        >
          سياستنا
        </button>
        {activeSection === "policy" && (
          <div className="mt-2 p-4 bg-white shadow-lg rounded-lg">
            <p className="text-black">
              تقوم سياسة الشركة على مبدأ الالتزام التام بالجودة والمصداقية في كل مراحل الإنتاج والتوزيع. نحرص على:
              <br /><br />
              <strong>ضمان الجودة:</strong> تطبيق معايير جودة صارمة في جميع عمليات الإنتاج لضمان تقديم منتجات آمنة وموثوقة.
              <br />
              <strong>الشفافية:</strong> الحفاظ على علاقات شفافة مع العملاء والموردين والموظفين لضمان بيئة عمل وثقة متبادلة.
              <br />
              <strong>الاستدامة:</strong> تبني ممارسات تصنيع تحافظ على البيئة وتساهم في تقليل البصمة الكربونية.
              <br />
              <strong>الابتكار المستمر:</strong> الاستثمار في البحث والتطوير لتقديم حلول مبتكرة تواكب التطورات التقنية والسوقية.
            </p>
          </div>
        )}

        {/* Vision Button */}
        <button
          className="bg-blue-900 text-white p-3 rounded-lg shadow-md w-full"
          onClick={() => toggleSection("vision")}
        >
          رؤيتنا
        </button>
        {activeSection === "vision" && (
          <div className="mt-2 p-4 bg-white shadow-lg rounded-lg">
            <p className="text-black">
              نسعى لأن نكون الخيار الأول في مجال إكسسوارات غرف التبريد والصناديق المبردة عالميًا، من خلال:
              <br /><br />
              <strong>الريادة في الابتكار:</strong> أن نكون في طليعة الشركات التي تقدم حلول تبريد مبتكرة وعالية الكفاءة.
              <br />
              <strong>التميز في الأداء:</strong> أن نحقق مستوى عالي من الثقة والتميز في جميع خدماتنا ومنتجاتنا.
              <br />
              <strong>التزام مستدام:</strong> أن نساهم في تحقيق التنمية المستدامة من خلال ممارسات تصنيع مسؤولة وصديقة للبيئة.
              <br />
              <strong>شراكة مستمرة:</strong> بناء علاقات طويلة الأمد مع العملاء والشركاء المبنية على الثقة والاحترام المتبادل.
            </p>
          </div>
        )}

        {/* Goals Button */}
        <button
          className="bg-blue-900 text-white p-3 rounded-lg shadow-md w-full"
          onClick={() => toggleSection("goals")}
        >
          أهدافنا
        </button>
        {activeSection === "goals" && (
          <div className="mt-2 p-4 bg-white shadow-lg rounded-lg">
            <p className="text-black">
              تركز الشركة على تحقيق مجموعة من الأهداف الاستراتيجية التي تعزز من موقعها الريادي في السوق:
              <br /><br />
              <strong>توسيع نطاق السوق:</strong> العمل على زيادة الحصة السوقية من خلال التوسع في الأسواق المحلية والدولية.
              <br />
              <strong>تحسين جودة المنتجات:</strong> الاستثمار في التكنولوجيا والتدريب المستمر للكوادر لتحقيق أعلى معايير الجودة في المنتجات.
              <br />
              <strong>تعزيز رضا العملاء:</strong> تقديم خدمة عملاء متميزة تستجيب بسرعة وفعالية لمتطلبات واحتياجات العملاء.
              <br />
              <strong>تطوير الابتكار:</strong> دعم البحث والتطوير لابتكار منتجات جديدة تساهم في تلبية احتياجات السوق المتغيرة.
            </p>
          </div>
        )}
      </div>
      

    </div>
  );
}
