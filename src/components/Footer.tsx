const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Eventify</h2>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Discover, book, and experience events effortlessly. Your world of
              events in one place.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition"
            >
              Home
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-500 hover:text-black transition"
            >
              Events
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition"
            >
              Contact
            </a>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Stay Updated
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Get notified about new events.
            </p>

            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-l-full focus:outline-none"
              />
              <button className="bg-black text-white px-4 text-sm rounded-r-full hover:bg-gray-800 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Eventify. All rights reserved.
          </p>

          <div className="flex gap-5 text-xs text-gray-400">
            <a href="#" className="hover:text-black transition">
              Privacy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms
            </a>
            <a href="#" className="hover:text-black transition">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
