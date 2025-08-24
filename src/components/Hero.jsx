import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="h-screen">
          <div className="flex md:flex-row flex-col md:justify-between mx-20 my-10">
            <h1 className="md:text-5xl text-4xl font-semibold">iPhone</h1>
            <h3 className="md:text-3xl text-2xl md:mt-3 mt-3 font-semibold">Designed to be loved.</h3>
          </div>

          {/* <div>
            <video 
              // src="/videos/iPhone vid 1 black background.mp4"
              src="/videos/iphone video from official website.mp4"
              width={1920}
              height={1080}
              controls
            />
          </div> */}
      </section>
    </>
  )
}

export default Hero