"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import XButton from "../ui/x-button";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Recipes",
    href: "/recipes",
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mx-auto flex max-w-7xl flex-row items-center justify-between border-b border-x-neutral-300 p-200 md:p-250">
      {/* logo */}
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt={"logo"}
          width={242}
          height={32}
          className="hover:cursor-pointer"
          onClick={() => router.push("/")}
        />
      </Link>

      {/* nav links */}
      <nav className="text-x-neutral-900 text-preset-7 hidden gap-500 md:flex md:flex-row">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group relative">
            {link.label}
            <span
              className={`rounded-4 absolute bottom-0 left-0 h-1 w-full ${pathname === link.href ? "bg-orange-500" : "bg-transparent"} group-hover:bg-orange-500`}
            />
          </Link>
        ))}
      </nav>

      {/* cta button */}
      <Link href={"/recipes"}>
        <XButton variant={"small"} className="hidden md:block">
          Browse Recipes
        </XButton>
      </Link>

      {/* hamburger menu */}
      <div
        className="rounded-4 bg-x-neutral-300 hover:bg-x-neutral-400 block p-150 hover:cursor-pointer md:hidden"
        onClick={handleMenuToggle}
      >
        <Image
          src={"/icons/hamburger-menu.svg"}
          alt={"hamburger"}
          width={18}
          height={16}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`rounded-8 absolute top-16 right-200 left-200 z-10 transform overflow-hidden border border-neutral-200 bg-neutral-50 shadow-lg transition-all duration-150 ease-in-out md:hidden ${
          isMenuOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-preset-7 p-4 text-gray-900 hover:bg-gray-200"
              onClick={handleMenuToggle}
            >
              {link.label}
            </Link>
          ))}

          <div className="p-4">
            <Link href={"/recipes"} onClick={handleMenuToggle}>
              <XButton variant={"small"} className="w-full">
                Browse recipes
              </XButton>
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 transition-opacity duration-150 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-50" : "pointer-events-none opacity-0"
        }`}
        onClick={handleMenuToggle}
      />
    </header>
  );
}
