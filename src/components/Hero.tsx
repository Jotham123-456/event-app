const Hero = () => {
  return (
    <section id='hero'className="w-full min-h-screen flex items-center bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Discover and Book Amazing Events Instantly
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Find concerts, tech meetups, and exclusive experiences all in one
            place with Eventify.
          </p>

          {/* CTA */}
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-800 transition">
              Explore Events
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1505236858219-8359eb29e329"
              alt="Event crowd"
              className="rounded-2xl object-cover w-full h-[400px] shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
