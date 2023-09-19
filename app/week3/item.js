// item.js
import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 border rounded-md my-2 bg-gray-100">
      <div className="font-bold text-lg text-black">{name}</div>
      <div className="text-sm text-black">Quantity: {quantity}</div>
      <div className="text-sm italic text-black">Category: {category}</div>
    </li>
  );
}

export default Item;
