import React from "react";

export default function Breadcrumb() {
  return (
    <div className="flex gap-2 text-sm text-zinc-500 max-w-7xl mx-auto px-6 py-4">
      <span>Home</span>
      <span>/</span>
      <span>About</span>
    </div>
  );
}
