import Link from 'next/link';

const SmallArticle = () => {
  const articles = [
    {
      id: 1,
      title: "أهمية التعلم الذاتي في البرمجة",
      image: "/images/1.png",
      excerpt: "التعلم الذاتي يعتبر من أهم المهارات التي يجب أن يتحلى بها المبرمجون...",
      content: "التعلم الذاتي يعتبر من أهم المهارات التي يجب أن يتحلى بها المبرمجون، حيث أنه يتيح لهم التقدم في مجالهم بسرعة وكفاءة. في هذا المقال سنتحدث عن أهمية التعلم الذاتي وأفضل الطرق للقيام به."
    },
    {
      id: 2,
      title: "ما الجديد في JavaScript ES2025؟",
      image: "/images/2.png",
      excerpt: "في هذا المقال سنتناول الميزات الجديدة التي تم إدخالها في الإصدار الأخير من JavaScript...",
      content: "في هذا المقال سنتناول الميزات الجديدة التي تم إدخالها في الإصدار الأخير من JavaScript والمعروفة بـ ES2025. سنشرح كيف يمكن لهذه الميزات تحسين كود البرمجة الخاص بك وجعله أكثر كفاءة وفعالية."
    },
    {
      id: 3,
      title: "دليل المبتدئين لتعلم React",
      image: "/images/3.png",
      excerpt: "إذا كنت جديدًا في عالم React، فهذه المقالة هي ما تحتاجه لتبدأ رحلتك...",
      content: "إذا كنت جديدًا في عالم React، فهذه المقالة هي ما تحتاجه لتبدأ رحلتك. سنتحدث عن الأساسيات التي تحتاج لمعرفتها، وكيف يمكنك البدء في بناء تطبيقات باستخدام React بشكل بسيط وسهل..."
    }
  ];

  return (
    <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full">
          <div>
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
            </div>
          </div>
          <div className="p-4 text-center mt-auto">
            <Link href={`/articles/${article.id}`}>
              <button className="bg-blue-900 text-white px-4 py-2 rounded w-full hover:bg-blue-800">
                اقرأ المقال
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallArticle;
