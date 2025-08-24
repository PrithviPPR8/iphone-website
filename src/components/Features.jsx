import React, { useState, useEffect, useRef } from "react"
import FeatureCard from "./FeatureCard"
import { features } from "../../constants"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // trigger only once
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
      scrollTrigger: "#features",
      start: "top 80%", // Animation starts when top of section is 80% down the viewport
    })

    scrollTimeline
      .from("#h1", {
        opacity: 0,
        yPercent: 100,
        ease: "power1.inOut",
        duration: 1,
        delay: 1,
      })
      .from(".featureCards-item", {
        opacity: 0,
        yPercent: 20,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.05,
      })
  }, [isVisible])

  return (
    <div id="features" className="mb-12" ref={ref}>
      <h1 id="h1" className="text-5xl font-semibold mb-8 ml-20">
        Get to know iPhone
      </h1>
      
      {isVisible && (
        <div className="mx-16">
          {/* 33% of the carousel width. */}
          <Carousel>
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="basis-1/3 featureCards-item">
                  <FeatureCard 
                    imgUrl={feature.imgUrl}  
                    title={feature.title}
                    description={feature.description}
                  />
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

export default Features
