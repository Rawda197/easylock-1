import About from "../../components/About";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      {/* إضافة مسافة بين الـ Header و About */}
      <div className="mt-30">
        <About />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
      
    </div>
  )
}

export default page;
