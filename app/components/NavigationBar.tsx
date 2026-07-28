import { useState } from "react";
import { IoChevronDown, IoChevronForward, IoMenu, IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GiCook } from "react-icons/gi";

const services = [
  { label: "Cook for a Month", href: "#" },
  { label: "Chefit: One-time cook", href: "#" },
  { label: "Chef for Party", href: "#" },
];

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="rounded-full p-0.5" style={{ backgroundColor: "white" }}>
            <img src="/logo.svg" alt="Toque logo" className="w-8 h-8 block" />
          </div>
          <span className="text-xl wordmark">Toque</span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors ${
                servicesOpen ? "text-[#C9A227]" : "hover:text-[#C9A227]"
              }`}
            >
              Our Services
              <IoChevronDown
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-xl shadow-xl w-72 overflow-hidden">
                {services.map((service, i) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className={`flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors ${
                      i !== services.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <span className="font-medium">{service.label}</span>
                    <IoChevronForward className="text-gray-400" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="hover:text-[#C9A227]">Toque से जुड़ें</a>
          <a href="#" className="hover:text-[#C9A227]">Cooks Near Me</a>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="btn-gold font-semibold px-5 py-2.5 rounded-full transition-colors">
            Contact Us
          </button>
          <FaUserCircle size={36} className="text-gray-300 hover:text-white cursor-pointer" />
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-6">
          <div>
            <button
              onClick={() => setMobileServicesOpen((s) => !s)}
              className="w-full text-left flex items-center justify-between hover:text-[#C9A227]"
            >
              <span>Our Services</span>
              <IoChevronDown className={`${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-2 pl-4 flex flex-col gap-2">
                {services.map((s) => (
                  <a key={s.label} href={s.href} className="text-sm hover:text-[#C9A227]">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="hover:text-[#C9A227]">Toque से जुड़ें</a>
          <a href="#" className="hover:text-[#C9A227]">Cooks Near Me</a>
          <button className="btn-gold font-semibold px-5 py-2.5 rounded-full">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}