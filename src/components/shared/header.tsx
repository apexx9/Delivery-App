'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  id: number;
  name: string;
  url: string;
}

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  //handling the state of the search bar.
  const handleSearchState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const links: NavLink[] = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'Contact', url: '/contact' },
    { id: 3, name: 'About', url: '/about' },
    { id: 4, name: 'Sign Up', url: '/signup' },
  ];

  return (
    <header className="w-full absolute h-[100px] bg-gray-100">
      <div className="flex justify-between items-center p-4 ">
        <div className="text-2xl">
          <h1>APEX</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex">
          {/* this is the div for the search bar and other icons */}
          <div className="search-icons">
            <input
              title="search"
              type="search"
              value={searchTerm}
              onChange={handleSearchState}
              placeholder="What are you looking for?"
            />

            {/*this is the div that holds the icons */}
            <div className="icons"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
