import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { buyingOptions } from "../../constants"
import BuyingOptionsCard from "./BuyingOptionsCard"

const Buy = () => {
  return (
    <div className=" bg-gray-100 pb-6">
      <div className="flex flex-row justify-between mx-20 pt-12 mb-4">
        <h1 className="text-5xl font-semibold">Why Apple is the best <br /> place to buy iPhone</h1>
        <a 
          href="https://www.apple.com/in/shop/goto/buy_iphone"
          target="_blank"
          className="text-blue-600 text-xl pt-4"
        >
          Shop iPhone &gt;
        </a>
      </div>

      <div className="mx-16 pb-12 mt-10">
        <Carousel>
          <CarouselContent>
            {buyingOptions.map((option) => (
              <CarouselItem className="basis-1/3">
                <BuyingOptionsCard 
                  icon_img = {option.icon_img}
                  title = {option.title}
                  description = {option.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Buy