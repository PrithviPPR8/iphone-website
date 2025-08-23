import React from 'react'

const AccessoryCard = ({ title, description, link_text, link_url, img_url }) => {
  return (
    <div className="flex-1 flex flex-col bg-gray-100 rounded-2xl overflow-hidden min-h-[500px]">
        <div className="flex flex-col items-center text-center px-8 pt-12 pb-6">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md" style={{ whiteSpace: "pre-line" }}>
              {description}
            </p>
            <a 
                href={link_url}
                target="_blank"
                className="text-blue-600 text-lg hover:underline"
            >
                {link_text} &gt;
            </a>
        </div>
        <div className="flex-1 flex items-end justify-center ">
            <img 
              src={img_url} 
              alt={title} 
              className="max-w-full max-h-full object-contain"
            />
        </div>
    </div>
  )
}

export default AccessoryCard