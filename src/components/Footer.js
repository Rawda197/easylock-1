import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white w-full rounded-t-lg shadow mt-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <a href="/" className="hover:underline">UmmahTech</a> جميع الحقوق محفوظة لشركة
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">من نحن</Link>
          </li>
          <li>
            <Link href="/Products" className="hover:underline me-4 md:me-6">منتجاتنا</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline me-4 md:me-6">تواصل معانا</Link>
          </li>
          <li>
            <Link href="/articles" className="hover:underline">مقالاتنا</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
