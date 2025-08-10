import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      {/* Brand */}
      <Link
        to="/"
        className="self-center text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Kratika's
        </span> Blog
      </Link>

      {/* Search Input (desktop) */}
      <form className="hidden lg:block relative">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg pl-3 pr-10 py-2"
        />
        <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </form>

    
     

      {/* Navigation Links */}
      <div className="flex gap-4 ml-6">
        <Link to="/" className={path === '/' ? 'text-purple-600 font-semibold' : ''}>
          Home
        </Link>
        <Link to="/about" className={path === '/about' ? 'text-purple-600 font-semibold' : ''}>
          About
        </Link>
        <Link to="/projects" className={path === '/projects' ? 'text-purple-600 font-semibold' : ''}>
          Projects
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sing-in">
          <Button color="purple">Sign in</Button>
        </Link>
      </div>
    </Navbar>
  );
}
