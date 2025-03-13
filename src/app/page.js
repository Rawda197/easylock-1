import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/contact"; // تأكد من كتابة الاسم بشكل صحيح وملف contact يحتوي على export default
import SmailProdects from "../components/SmailProdects";
import SmallArticle from "../components/SmallArticle";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SmailProdects />
      <About />
      <SmallArticle />
      <Contact />
    </div>
  )
}

export default page