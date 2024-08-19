"use client"
import {React,useState} from 'react'

const Product = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const products = [
    {
      id: 1,
      title: 'CLASSIC WATCH',
      price: '$123',
      image: '/images/classic-watch.jpg', 
    },
    {
      id: 2,
      title: 'OLD WATCH',
      price: '$95',
      image: '/images/old-watch.jpg', 
    },
    {
      id: 3,
      title: 'CLASSIC WATCH',
      price: '$125',
      image: '/images/classic-watch-2.jpg', 
    },
    {
      id: 4,
      title: 'FOSSIL WATCH',
      price: '$180',
      image: '/images/fossil-watch.jpg', 
    },
  ];
  return ( 
    <>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-gray-700 uppercase">{product.title}</h3>
              <span className="text-gray-500 mt-2 block">{product.price}</span>
            </div>
            <div className="flex justify-end p-4">
              <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                {/* <FaShoppingCart /> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Product
