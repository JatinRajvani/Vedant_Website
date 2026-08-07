import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-zinc-100 py-4 px-6 flex justify-between items-center">
      <div className="font-bold text-xl">Vedant Academy</div>
      <div className="flex gap-4">
        <span>Home</span>
        <span>About</span>
        <span>Courses</span>
        <span>Results</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}
