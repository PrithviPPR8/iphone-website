import React, { useState, useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { latestPhones } from "../../constants"
import LatestPhoneCard from "./LatestPhoneCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const LineUp = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // render once
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useGSAP(() => {
    if (!isVisible) return
    const scrollTimeline = gsap.timeline({
      scrollTrigger: "#lineUp",
      start: "top 80%",
    })

    scrollTimeline
      .from("#text", {
        opacity: 0,
        yPercent: 100,
        ease: "power1.inOut",
        duration: 1,
        delay: 1,
        stagger: 0.05,
      })
      .from(".lineUpCards-item", {
        opacity: 0,
        yPercent: 20,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.05,
      })
  }, [isVisible])

  return (
    <div className="bg-gray-100" id="lineUp" ref={ref}>
      <div className="flex flex-row justify-between mx-20 pt-12 mb-4" id="text">
        <h1 className="text-5xl font-semibold">Explore the line-up.</h1>
        <a 
          href="https://www.apple.com/in/iphone/compare/"
          target="_blank"
          className="text-blue-600 text-xl pt-4"
        >
          Compare all models &gt;
        </a>
      </div>

      {isVisible && (
        <div className="mx-16 pb-12">
          <Carousel>
            <CarouselContent className="-ml-2 md:-ml-4">
              {latestPhones.map((phone, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 pl-2 md:pl-4 lineUpCards-item"
                >
                  <div className="h-full">
                    <LatestPhoneCard {...phone} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
          </Carousel>
        </div>
      )}
    </div>
  )
}

export default LineUp
