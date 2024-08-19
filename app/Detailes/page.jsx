"use client"
import {React,useState} from 'react'

const Detailes = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
      setQuantity(e.target.value);
    };
  
    return (
      <div className="flex flex-col lg:flex-row container mx-auto px-4 py-8">
        
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-100 h-96 flex items-center justify-center text-6xl font-bold">
            1 
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="bg-gray-100 h-20 flex items-center justify-center">
              1
            </div>
            <div className="bg-gray-100 h-20 flex items-center justify-center">
              2
            </div>
            <div className="bg-gray-100 h-20 flex items-center justify-center">
              3
            </div>
            <div className="bg-gray-100 h-20 flex items-center justify-center">
              4
            </div>
          </div>
        </div>
  
       
        <div className="w-full lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
          <h1 className="text-3xl font-bold">
            Lorem ipsum dolor, sit amet consectetur, adipiscing elit.
          </h1>
          <p className="text-blue-500">By ABC Company</p>
  
          <div className="mt-4">
            <span className="text-4xl font-bold text-purple-600">$25</span>
            <span className="text-green-600 ml-4">Save 12%</span>
            <p className="text-gray-500 mt-1">Inclusive of all Taxes.</p>
          </div>
  
          <p className="mt-4 text-gray-600">
            Lorem ipsum, dolor sit, amet consectetur adipiscing elit. Vitae exercitationem
            porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita 
            cupiditate a est.
          </p>
  
          <div className="mt-6 flex items-center">
            <label htmlFor="quantity" className="mr-4">
              QTY
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 p-2 border border-gray-300 rounded"
            />
            <button className="ml-6 px-8 py-3 bg-blue-600 text-white rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  
}

export default Detailes
