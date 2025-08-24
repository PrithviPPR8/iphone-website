import React, { useState, useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { buyingOptions } from "../../constants"
import BuyingOptionsCard from "./BuyingOptionsCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Buy = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // only trigger once
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
      scrollTrigger: "#buy",
      start: "top 80%", // animation starts when top of section hits 80% viewport height
    })

    scrollTimeline
      .from("#buy-section-text", {
        opacity: 0,
        yPercent: 100,
        ease: "power1.inOut",
        duration: 1,
        delay: 1,
      })
      .from(".buy-section-cards", {
        opacity: 0,
        yPercent: 20,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.05,
      })
  }, [isVisible])

  return (
    <div className="bg-gray-100 pb-6" id="buy" ref={ref}>
      <div
        className="flex flex-row justify-between mx-20 pt-12 mb-4"
        id="buy-section-text"
      >
        <h1 className="text-5xl font-semibold">
          Why Apple is the best <br /> place to buy iPhone
        </h1>
        <a
          href="https://www.apple.com/in/shop/goto/buy_iphone"
          target="_blank"
          className="text-blue-600 text-xl pt-4"
        >
          Shop iPhone &gt;
        </a>
      </div>

      {isVisible && (
        <div className="mx-16 pb-12 mt-10">
          <Carousel>
            <CarouselContent>
              {buyingOptions.map((option, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 buy-section-cards"
                >
                  <BuyingOptionsCard
                    icon_img={option.icon_img}
                    title={option.title}
                    description={option.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </div>
  )
}

export default Buy
