"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {}, [path]);

  return (
    <div className="flex sticky top-0 z-50 p-4 items-center justify-between bg-teal-50 text-gray-900 shadow-md">
      <Image
        src={"/logo.svg"}
        priority={1}
        width={160}
        height={100}
        alt="logo"
      />
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <ul
        className={`absolute md:relative md:flex md:flex-row md:items-center text-black transition-transform transform ${
          menuOpen
            ? "flex flex-col top-20 right-0 w-auto rounded-lg contrast-200 bg-slate-50 text-white opacity-50 p-4 shadow-md items-end "
            : "hidden"
        } md:flex-row md:gap-6 md:bg-transparent md:top-0 md:p-0 text-left md:w-auto`}
      >
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === "/" && "text-primary font-bold"
          }`}
          onClick={() => {
            router.replace("/");
            setMenuOpen(false);
          }}
        >
          Home
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === "/dashboard" && "text-primary font-bold"
          }`}
          onClick={() => {
            router.replace("/dashboard");
            setMenuOpen(false);
          }}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === "/dashboard/General-guide" && "text-primary font-bold"
          }`}
          onClick={() => {
            router.replace("/dashboard/General-guide");
            setMenuOpen(false);
          }}
        >
          General-guide
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === "/dashboard/how" && "text-primary font-bold"
          }`}
          onClick={() => {
            router.replace("/dashboard/how");
            setMenuOpen(false);
          }}
        >
          How it works
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
