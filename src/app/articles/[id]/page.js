// app/articles/[id]/page.jsx
import { notFound } from 'next/navigation';
import articles from "../../../data/articles.json";
import Link from "next/link";
import Header from "../../../components/Header"; // استدعاء الهيدر
import Footer from "../../../components/Footer"; // استدعاء الفوتر

// ✅ توليد صفحات المقالات المطلوبة للتصدير (مهم لـ next export)
export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

// ✅ كارت المقالة ذات الصلة
const RelatedArticleCard = ({ article }) => (
  <div key={article.id} className="border rounded-lg shadow-lg p-4 flex flex-col justify-between">
    <img
      src={article.image}
      alt={article.title}
      className="w-full h-48 object-cover mb-4"
    />
    <h3 className="text-xl font-bold mb-2 text-right">{article.title}</h3>
    <p className="text-gray-600 mb-4 text-right">{article.excerpt}</p>
    <Link
      href={`/articles/${article.id}`}
      className="bg-blue-900 text-white text-center py-2 mt-auto hover:bg-blue-700 transition duration-300"
    >
      اقرأ المقالة
    </Link>
  </div>
);

// ✅ الصفحة الرئيسية لمقالة واحدة
const ArticleDetailPage = ({ params }) => {
  const articleId = Number(params.id);
  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    notFound(); // لازم تتكتب بدون return
  }

  const relatedArticles = articles.filter(
    (art) => art.id !== article.id && art.id < article.id + 9
  );

  return (
    <div> {/* ✅ تم تصحيح dir="rtl" */}
      <Header />

      <div className="p-4">
        {/* صندوق المقال */}
        <div className="shadow-lg p-4 rounded-lg">
          <div className="w-full h-64 flex items-center justify-center mb-4">
            <img
              src={article.image}
              alt={article.title}
              className="w-1/2 h-48 object-cover shadow-lg rounded-md"
            />
          </div>

          <h1 className="text-2xl font-bold mb-4 text-right">{article.title}</h1>
          <p className="text-lg mb-8 text-right">{article.content}</p>

          <div className="flex justify-start">
            <Link
              href="/articles"
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
            >
              العودة للخلف
            </Link>
          </div>
        </div>

        {/* مقالات ذات صلة */}
        <div className="mt-12">
          <h2 className="text-2xl text-white bg-blue-900 font-bold mb-4 text-center">
            مقالات ذات صلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedArticles.length > 0 ? (
              relatedArticles.map((relatedArticle) => (
                <RelatedArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))
            ) : (
              <p className="text-center">لا توجد مقالات ذات صلة متاحة.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetailPage;
