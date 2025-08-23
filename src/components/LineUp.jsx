import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { latestPhones } from "../../constants"
import LatestPhoneCard from "./LatestPhoneCard"

const LineUp = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-row justify-between mx-20 pt-12 mb-4">
        <h1 className="text-5xl font-semibold">Explore the line-up.</h1>
        <a 
          href="https://www.apple.com/in/iphone/compare/"
          target="_blank"
          className="text-blue-600 text-xl pt-4"
        >
          Compare all models &gt;
        </a>
      </div>

      <div className="mx-16 pb-12">
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4">
            {latestPhones.map((phone, index) => (
              <CarouselItem key={index} className="basis-1/3 pl-2 md:pl-4">
                <div className="h-full">
                  <LatestPhoneCard 
                    imgUrl={phone.imgUrl}
                    title={phone.title}
                    tagline={phone.tagline}
                    cost={phone.cost}
                    learnMoreLink={phone.learnMoreLink}
                    buyLink={phone.buyLink}
                    apple_intelligence_img={phone.apple_intelligence_img}
                    apple_intelligence_text={phone.apple_intelligence_text}
                    chip_img={phone.chip_img}
                    chip_text={phone.chip_text}
                    camera_control_img={phone.camera_control_img}
                    camera_control_text={phone.camera_control_text}
                    camera_system_img={phone.camera_system_img}
                    camera_system_text={phone.camera_system_text}
                    battery_img={phone.battery_img}
                    battery_text={phone.battery_text}
                  />
                </div>
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

export default LineUp