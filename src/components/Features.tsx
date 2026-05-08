

const Features = () => {
  return (
    <section id='features' className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Everything You Need in One Place
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Eventify makes discovering, booking, and managing events effortless.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4">
          {/* Large Feature */}
          <div className="md:col-span-2 md:row-span-1/2 p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition">
            <h3 className="text-lg font-semibold text-gray-900">
              Smart Event Discovery
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Personalized recommendations based on your interests, location,
              and past activity.
            </p>
          </div>

          {/* Small Card */}
          <div className="p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition">
            <h3 className="font-semibold text-gray-900">Instant Booking</h3>
            <p className="text-sm text-gray-500 mt-2">
              Reserve tickets in seconds with a smooth checkout flow.
            </p>
          </div>

          {/* Small Card */}
          <div className="p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition">
            <h3 className="font-semibold text-gray-900">Secure Payments</h3>
            <p className="text-sm text-gray-500 mt-2">
              Safe and encrypted transactions for every booking.
            </p>
          </div>

          {/* Wide Card */}
          <div className="md:col-span-2 p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition">
            <h3 className="font-semibold text-gray-900">Live Event Updates</h3>
            <p className="text-sm text-gray-500 mt-2">
              Get real-time notifications about schedule changes, ticket drops,
              and event alerts.
            </p>
          </div>

          {/* Small Card */}
          <div className="p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition">
            <h3 className="font-semibold text-gray-900">Mobile Friendly</h3>
            <p className="text-sm text-gray-500 mt-2">
              Fully optimized experience across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
