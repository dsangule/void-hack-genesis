// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-[3%]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-white text-xl font-bold">Emergency Response System</span>
        </Link>

        {/* Navbar Items */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span className="text-white hover:text-gray-300 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="text-white hover:text-gray-300 cursor-pointer">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <span className="text-white hover:text-gray-300 cursor-pointer">Resources</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
