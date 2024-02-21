"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Modal = ({ children }) => {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <Link
      href="/"
      className="w-full min-h-screen bg-neutral-800 bg-opacity-60 backdrop-blur-sm fixed  "
      scroll={false}
    >
      {children}
    </Link>
  );
};

export default Modal;
