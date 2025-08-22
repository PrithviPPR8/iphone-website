import React from 'react'
import { Plus } from 'lucide-react';

const FeatureCard = ({ imgUrl, title, description }) => {
  return (
    <div className="relative hover:scale-102 transition-all duration-300 ease-out cursor-pointer rounded-3xl overflow-hidden transform-gpu bg-transparent">
      <img src={imgUrl} className="h-[92%] w-[92%] object-cover rounded-3xl m-auto mt-[4%]" />
      <div className="absolute top-10 left-11">
        <h3 className={`${title === "Innovation" || title === "Environment" ? "text-black" : "text-white"} text-2xl font-medium`}>
          {title}
        </h3>
        <h2 className={`${title === "Innovation" || title === "Environment" ? "text-black" : "text-white"} text-3xl font-semibold mt-2`} style={{ whiteSpace: 'pre-line' }}>
          {description}
        </h2>
      </div>

      <div className="absolute bottom-5 right-8 bg-gray-800 bg-opacity-50 rounded-full p-2">
        <Plus className="w-6 h-6 text-white" />
      </div>
    </div>
  )
}

export default FeatureCard