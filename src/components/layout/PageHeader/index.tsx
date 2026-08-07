import React from "react";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="bg-zinc-50 border-b border-zinc-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900">{title}</h1>
        {subtitle && <p className="mt-2 text-zinc-600">{subtitle}</p>}
      </div>
    </header>
  );
}
