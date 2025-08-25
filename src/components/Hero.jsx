import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Ensure video plays when component mounts
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play was prevented:", error);
          setIsPlaying(false);
        });
      }
    }

    // GSAP ScrollTrigger animation for video scaling
    const videoWrapper = videoWrapperRef.current;
    const videoElement = videoRef.current;

    if (videoWrapper && videoElement) {
      // Create the scroll-triggered animation
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", // Start when top of container hits center of viewport
          end: "bottom top", // End when bottom of container hits top of viewport
          scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          ease: "power2.out",
        }
      })
      .to(videoWrapper, {
        scale: 0.7,
        duration: 1,
        ease: "power2.out"
      })
      .to(videoElement, {
        borderRadius: "24px",
        duration: 1,
        ease: "power2.out"
      }, 0); // Start at the same time as scale animation (position 0)

      // Optional: Add a subtle fade effect
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        }
      })
      .to(videoWrapper, {
        y: -50, // Slight upward movement
        duration: 1,
        ease: "power2.out"
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Play was prevented:", error);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section id="hero" className="relative w-full mb-16" ref={containerRef}>
      {/* Heading */}
      <div className="flex md:flex-row flex-col md:justify-between mx-24 my-10">
        <h1 className="md:text-5xl text-4xl font-semibold">iPhone</h1>
        <h3 className="md:text-3xl text-2xl md:mt-3 mt-3 font-semibold">
          Designed to be loved.
        </h3>
      </div>

      {/* Video Container with GSAP scaling effect */}
      <div className="relative w-full mt-16 px-2 flex justify-center">
        <div 
          ref={videoWrapperRef}
          className="relative w-full max-w-full"
        >
          <video
            ref={videoRef}
            src="/videos/iPhone vid 3 1.mp4"
            autoPlay
            loop
            muted
            playsInline
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            className="w-full object-cover"
            style={{ 
              height: '90vh', // Fixed height instead of maxHeight
              minHeight: '500px', // Minimum height for smaller screens
              borderRadius: '0px' // Initial state, GSAP will animate this
            }}
          >
            {/* Fallback message for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>

          {/* Custom Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="absolute bottom-5 right-5 bg-white bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-opacity-90 transition duration-200 z-10"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;