import React from 'react'
import FeatureCard from "./FeatureCard"
import { features } from "../../constants"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Features = () => {
  return (
    <div className="mb-12">
      <h1 className="text-5xl font-semibold mb-8 ml-20">Get to know iPhone</h1>
      <div className="mx-16">
        {/* 33% of the carousel width. */}
        <Carousel>
          <CarouselContent className="">
            {features.map((feature) => (
              <CarouselItem className="basis-1/3">
                <FeatureCard 
                  imgUrl = {feature.imgUrl}  
                  title = {feature.title}
                  description = {feature.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </div>
  )
}

export default Features