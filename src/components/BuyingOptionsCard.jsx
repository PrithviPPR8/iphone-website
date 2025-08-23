import React from 'react'
import { Plus } from 'lucide-react';

const BuyingOptionsCard = ({ icon_img, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 mx-4 h-80 flex flex-col justify-between shadow-sm hover:scale-102 transition-all duration-300 ease-out cursor-pointer">
      <div className="flex flex-col space-y-4">
        {/* Icon */}
        <div className="w-12 h-12">
          <img 
            src={icon_img} 
            alt="icon" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Plus Button */}
      <div className="flex justify-end mt-6">
        <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
          <Plus className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  )
}

export default BuyingOptionsCard