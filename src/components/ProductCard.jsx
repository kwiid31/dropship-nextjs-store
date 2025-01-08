import React from 'react';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image 
          src={product.image} 
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {product.inStock ? (
          <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
            En stock
          </span>
        ) : (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            Rupture
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="mt-2 text-sm text-gray-600">{product.description}</div>
        
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-indigo-600">{product.price}€</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm line-through text-gray-400">
                {product.oldPrice}€
              </span>
            )}
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}