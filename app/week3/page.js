// page.js
import React from 'react';
import ItemList from './item-list';
import Link from 'next/link';
const Page = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">Shopping List</h1>
      <Link href="/">Home</Link>
      <ItemList />
    </div>
  );
}

export default Page;
