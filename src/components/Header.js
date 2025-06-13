"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "الصفحة الرئيسية", href: "/" },
    { name: "منتجاتنا", href: "/products" },
    { name: "من نحن", href: "/about" },
    { name: "تواصل معانا", href: "/contact" },
    { name: "مقالاتنا", href: "/articles" },
  ];

  const reversedLinks = [...links].reverse();

  return (
    <header className="bg-blue-900 text-white py-4 shadow-md w-full z-50 relative">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* القائمة الكبيرة */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {reversedLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-lg hover:text-gray-300 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* الشعار مع رابط للصفحة الرئيسية */}
        <Link href="/" className="w-[64px] h-[64px] relative flex-shrink-0">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={64}
            height={64}
            className="rounded-full object-contain"
          />
        </Link>

        {/* زر الموبايل */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-900 text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg hover:text-gray-300 transition duration-300"
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
