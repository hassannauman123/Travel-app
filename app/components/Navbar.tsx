/*
travel-app/app/components/Navbar.tsx


rafc - creates react structure to start
always use semantic html tags 

link pointing to home 
every link needs to have an href
href = "/" means home
we will render an image

ul is unordered list

nav_links coming from constants
each individual link we can immediately return smth from
return a link component

map iterates over each item in Nav_links and returns a new jsx element, but also wanna give some styling
key attribute is set to link.href for reacts reactivity

make button to be a component bec reusable



in smaller screens, change to hamburger menu 
*/

'use client'; // Add this line at the top

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Hamburger Menu Icon (Visible on smaller screens) */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu} // Toggles the menu on click
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-5 lg:hidden">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  onClick={() => setMenuOpen(false)} // Close the menu when a link is clicked
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
