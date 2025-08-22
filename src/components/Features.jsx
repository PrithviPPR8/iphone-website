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
    <div className="h-screen">
      <h1 className="text-5xl font-semibold">Get to know iPhone</h1>
      {/* 33% of the carousel width. */}
      <Carousel>
        <CarouselContent>
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Features