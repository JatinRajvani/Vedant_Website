import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-white py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>&copy; {new Date().getFullYear()} Vedant Academy. All rights reserved.</div>
      </div>
    </footer>
  );
}
