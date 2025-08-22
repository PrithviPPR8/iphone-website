import React from 'react'

const FeatureCard = ({ imgUrl, title, description }) => {
  return (
    <div className="relative">
        <img src={imgUrl} className="rounded-3xl" />
        <div className="absolute top-7 left-7">
          <h3 className="text-white text-2xl font-medium">{title}</h3>
          <h2 className="text-white text-3xl font-semibold mt-1">{description}</h2>
        </div>
    </div>
  )
}

export default FeatureCard