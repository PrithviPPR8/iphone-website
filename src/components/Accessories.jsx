import React from 'react'
import { accessories } from "../../constants"
import AccessoryCard from "./AccessoryCard"

const Accessories = () => {
  return (
    <div className="bg-white pb-16">
      <div className="flex flex-row justify-between mx-20 pt-16 mb-12">
        <h1 className="text-5xl font-semibold text-gray-900">iPhone essentials.</h1>
        <a 
          href="https://www.apple.com/in/shop/goto/iphone/accessories"
          target="_blank"
          className="text-blue-600 text-xl pt-4 hover:underline"
        >
          All iPhone accessories &gt;
        </a>
      </div>

      <div className="flex flex-row gap-8 mx-20 min-h-[500px]">
        {accessories.map((accessory, index) => (
          <AccessoryCard 
            key={index}
            title={accessory.title}
            description={accessory.description}
            link_text={accessory.link_text}
            link_url={accessory.link_url}
            img_url={accessory.img_url}
          />
        ))}
      </div>
    </div>
  )
}

export default Accessories