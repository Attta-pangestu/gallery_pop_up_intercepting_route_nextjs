import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-4 justify-center border-b-2 border-neutral-700 shadow-md p-4">
      <Link
        className="underline font-bold uppercase text-2xl"
        href="/auth/login"
      >
        Login
      </Link>
      <Link
        className="underline font-bold uppercase text-2xl"
        href="/auth/register"
      >
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
