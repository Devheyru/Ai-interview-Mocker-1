"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex sticky top-0 z-50 p-4 items-center justify-between bg-secondary shadow-md">
      <Image
        src={"/logo.svg"}
        priority={1}
        width={160}
        height={100}
        alt="logo"
      />
      <ul className="hidden md:flex gap-6 ">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path == "/" && "text-primary font-bold"}
          `}
          onClick={() => router.replace("/")}
        >
          Home
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                      ${path == "/dashboard" && "text-primary font-bold"}
`}
          onClick={() => router.replace("/dashboard")}
        >
          Dashboard
        </li>

        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
${path == "/dashboard/General-guide" && "text-primary font-bold"}
`}
          onClick={() => router.replace("/dashboard/General-guide")}
        >
          General-guide
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
${path == "/dashboard/how" && "text-primary font-bold"}
`}
          onClick={() => router.replace("/dashboard/how")}
        >
          How it works
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
