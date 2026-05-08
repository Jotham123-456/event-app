import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@base-ui/react/button";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      id="navbar"
      className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-tight text-gray-900">
          Eventify
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="cursor-pointer bg-black text-white px-5 py-2 rounded-[10px] text-sm hover:bg-gray-800 transition">
            Get Tickets
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="cursor-pointer md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && ( // Conditional rendering for mobile menu
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button className="cursor-pointer mt-2 bg-black text-white py-2 rounded-[10px] text-sm">
              Get Tickets
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
