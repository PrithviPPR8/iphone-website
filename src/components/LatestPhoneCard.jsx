import React from 'react'

const LatestPhoneCard = ({ imgUrl, title, tagline, cost, learnMoreLink, buyLink }) => {
  return (
    <div className="flex flex-col items-center p-4 h-full">
        <div className="w-full max-w-xs flex flex-col flex-1">
            <div className="h-80 flex items-center justify-center mb-3">
              <img 
                src={imgUrl} 
                alt="iPhone image" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-1 mt-auto">
                <h2 className="text-2xl font-bold text-center">{title}</h2>
                <p className="text-base text-gray-700 text-center">{tagline}</p>
                <p className="font-semibold mt-2 text-center leading-tight" style={{ whiteSpace: 'pre-line' }}>
                    {cost}
                </p>
            </div>
        </div>
        <div className="flex flex-row gap-4 mt-4 mb-4">
            {/* Apple-style blue button */}
            <a 
                href={learnMoreLink}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-base transition-colors duration-200"
            >
                Learn more
            </a>
                
            {/* Apple-style text link */}
            <a 
                href={buyLink} 
                className="text-blue-500 hover:text-blue-600 font-medium text-base transition-colors duration-200 flex items-center"
            >
                Buy &gt;
            </a>
        </div>
    </div>
  )
}

export default LatestPhoneCard