"use client"

import Link from 'next/link';
import React, { useContext } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';

import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { ThemeContext } from '@/context/themeContex';

// ✅ Remove unused interface ThemeContextType
const Navbar = () => {
  const pathName = usePathname();

  // ✅ Use proper type for context
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("Navbar must be used inside ThemeProvider");

  const { isDarkMode, toggleTheme } = theme;

  return (
    <header className={`py-4 shadow-md ${isDarkMode ? "bg-gray-900 text-white" : ""}`}>
      <nav className='flex justify-between p-4 shadow-2xl items-center'>
        {/* logo */}
        <div className='text-xl font-bold'>
          <Link href="/" >Daily News</Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex space-x-8 items-center">
              {/* News link */}
              <NavigationMenuLink asChild>
                <Link className={`${pathName === '/news' ? "text-red-500 font-semibold" : ""}`} href="/news">
                  <span>News</span>
                </Link>
              </NavigationMenuLink>

              {/* Services dropdown */}
              <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/web">
                        <span>Web Development</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/app">
                        <span>Mobile Apps</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/seo">
                        <span>SEO</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>

              {/* About link */}
              <NavigationMenuLink asChild>
                <Link href="/about">
                  <span>About</span>
                </Link>
              </NavigationMenuLink>

              {/* Contact link */}
              <NavigationMenuLink asChild>
                <Link href="/contact">
                  <span>Contact</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* login + toggle */}
        <div className="hidden lg:flex items-center space-x-4">
          <div onClick={toggleTheme} className="flex items-center cursor-pointer">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        {/* mobile menu */}
        <div className='lg:hidden'>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
