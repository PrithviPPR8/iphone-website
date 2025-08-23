import React from 'react'

const LatestPhoneCard = ({ 
    imgUrl, 
    title, 
    tagline, 
    cost, 
    learnMoreLink, 
    buyLink,
    apple_intelligence_img,
    apple_intelligence_text,
    chip_img,
    chip_text,
    camera_control_img,
    camera_control_text,
    camera_system_img,
    camera_system_text,
    battery_img,
    battery_text,  
}) => {
  return (
    <div className="flex flex-col items-center p-4 h-full max-w-sm mx-auto">
        {/* Phone Image Section */}
        <div className="w-full max-w-xs flex flex-col flex-1">
            <div className="h-80 flex items-center justify-center mb-6">
              <img 
                src={imgUrl} 
                alt="iPhone image" 
                className="max-w-full max-h-full object-contain hover:scale-102 transition-all duration-300 ease-out cursor-pointer"
              />
            </div>
            
            {/* Title and Pricing Section */}
            <div className="flex flex-col items-center gap-2 mt-auto">
                <h2 className="text-2xl font-bold text-center text-black">{title}</h2>
                <p className="text-lg text-gray-600 text-center">{tagline}</p>
                <p className="font-medium mt-2 text-center leading-tight text-black" style={{ whiteSpace: 'pre-line' }}>
                    {cost}
                </p>
            </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-row gap-4 mt-6 mb-8">
            <a 
                href={learnMoreLink}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-base transition-colors duration-200"
            >
                Learn more
            </a>
                
            <a 
                href={buyLink} 
                className="text-blue-500 hover:text-blue-600 font-medium text-base transition-colors duration-200 flex items-center"
            >
                Buy &gt;
            </a>
        </div>

        {/* Subtle divider line */}
        <div className="w-full max-w-xs h-px bg-gray-200 mb-8"></div>

        {/* Features Section */}
        <div className="w-full max-w-xs">
            {/* Apple Intelligence */}
            {apple_intelligence_img && (
                <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img 
                            src={apple_intelligence_img} 
                            alt="Apple Intelligence" 
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <p className="text-sm text-gray-700 text-center font-medium">
                        {apple_intelligence_text}
                    </p>
                </div>
            )}
            
            {/* Chip */}
            {chip_img && (
                <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-12 mb-2 flex items-center justify-center">
                        <img 
                            src={chip_img} 
                            alt="Chip" 
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <p className="text-sm text-gray-700 text-center font-medium">
                        {chip_text}
                    </p>
                </div>
            )}
            
            {/* Camera Control */}
            {camera_control_img && (
                <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img 
                            src={camera_control_img} 
                            alt="Camera Control" 
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <p className="text-sm text-gray-700 text-center font-medium">
                        {camera_control_text}
                    </p>
                </div>
            )}
            
            {/* Camera System */}
            {camera_system_img && (
                <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img 
                            src={camera_system_img} 
                            alt="Camera System" 
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <p className="text-sm text-gray-700 text-center font-medium" style={{ whiteSpace: 'pre-line' }}>
                        {camera_system_text}
                    </p>
                </div>
            )}
            
            {/* Battery */}
            {battery_img && (
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img 
                            src={battery_img} 
                            alt="Battery" 
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <p className="text-sm text-gray-700 text-center font-medium">
                        {battery_text}
                    </p>
                </div>
            )}
        </div>
    </div>
  )
}

export default LatestPhoneCard