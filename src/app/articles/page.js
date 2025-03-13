import Link from "next/link";
import articles from "../../data/articles.json";
import Header from "../../components/Header"; // مسار مكون الهيدر
import Footer from "../../components/Footer"; // مسار مكون الفوتر

const ArticlesPage = () => {
  return (
    <>
      <Header /> {/* استدعاء الهيدر */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {articles.map((article) => (
          <div key={article.id} className="border rounded-lg shadow-lg p-4 flex flex-col justify-between">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <Link href={`/articles/${article.id}`} className="bg-blue-900 text-white text-center py-2 mt-auto">
              اقرأ المقالة
            </Link>
          </div>
        ))}
      </div>
      
      <Footer /> {/* استدعاء الفوتر */}
    </>
  );
};

export default ArticlesPage;
