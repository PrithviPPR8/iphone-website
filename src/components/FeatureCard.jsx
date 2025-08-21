import React from 'react'
import { features } from "../../constants"

const FeatureCard = () => {
  return (
    <div>
        <img src={features[0].imgUrl} />
        <h3>{features[0].title}</h3>
        <h2>{features[0].description}</h2>
    </div>
  )
}

export default FeatureCard