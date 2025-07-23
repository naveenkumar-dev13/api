"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-2xl font-bold">This is a test</p>
      <div className="flex gap-4">
        <Link
          href="/zustand"
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          Zustand
        </Link>
        <Link
          href="/reactquery"
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          React Query
        </Link>
      </div>
    </div>
  );
}
