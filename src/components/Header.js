"use client";
 import Image from "next/image";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'الصفحة الرئيسية', href: '/' },
    { name: 'منتجاتنا', href: '/products' },
    { name: 'من نحن', href: '/about' },
    { name: 'تواصل معانا', href: '/contact' },
    { name: 'مقالاتنا', href: '/articles' },
  ];

  // إنشاء نسخة معكوسة للينكات للشاشات الكبيرة
  const reversedLinks = [...links].reverse();

  return (
    <header className="bg-blue-900 text-white py-4 shadow-md relative top-0 left-0 w-full z-50"> {/* استبدال fixed بـ relative */}
      <div className="container mx-auto px-8 flex items-center justify-between">
        {/* اللينكات في منتصف الشاشة للشاشات الكبيرة مع ترتيب معكوس */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {reversedLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition duration-300 hover:text-gray-300 text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

    

<Image
  src="/logo.jpg"
  alt="Logo"
  width={60}
  height={64}
  className="rounded-full"
/>


        {/* أيقونة القائمة للشاشات الصغيرة */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للشاشات الصغيرة (ترتيبها كما هو) */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-900 text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition duration-300 hover:text-gray-300 text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
