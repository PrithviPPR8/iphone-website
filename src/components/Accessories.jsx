import React, { useState, useEffect, useRef } from "react"
import { accessories } from "../../constants"
import AccessoryCard from "./AccessoryCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Accessories = () => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();  //trigger only once
      }
    }, { threshold: 0.2 })

    if(ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [])

  useGSAP(() => {

    if (!isVisible) return
    const scrollTimeline = gsap.timeline({
      scrollTrigger: "#accessories",
      start: "top 80%",  // Animation starts when top of section is 80% down the viewport
    })

    scrollTimeline
    .from("#accessories-section-text", {
      opacity: 0,
      yPercent: 100,
      ease: "power1.inOut",
      duration: 1,
      delay: 1,
    })
    .from(".accessories-section-cards", {
      opacity: 0,
      yPercent: 20,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.05,
    })
  }, [isVisible])

  return (
    <div className="bg-white pb-16" id="accessories" ref={ref}>
      <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-20 pt-16 mb-12 text-center sm:text-left" id="accessories-section-text">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">iPhone essentials.</h1>
        <a 
          href="https://www.apple.com/in/shop/goto/iphone/accessories"
          target="_blank"
          className="text-blue-600 text-xl pt-4 hover:underline"
        >
          All iPhone accessories &gt;
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 mx-4 sm:mx-20 min-h-[500px] accessories-section-cards">
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
