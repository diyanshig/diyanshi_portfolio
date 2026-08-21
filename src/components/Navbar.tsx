import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certifications" },
     { name: "Mini Me", href: "#chatbot" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#5A561F]/95 backdrop-blur-md border-b border-[#746F32] shadow-2xl"
          : "bg-[#5A561F]"
      }`}
    >
      <div className="max-w-[1600px] mx-auto h-24 lg:h-28 flex items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Logo */}
        <a
          href="#home"
          className="text-4xl lg:text-5xl font-extrabold text-[#E4D26A] tracking-wide hover:scale-105 transition-transform duration-300"
        >
          DG
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-12">
          {links.map((link) => (
           <a
  key={link.name}
  href={link.href}
  className="relative text-xl lg:text-2xl xl:text-[25px] font-semibold text-[#F8F6EB] transition-all duration-300 hover:text-[#E4D26A] group"
>
  {link.name}

  <span className="absolute left-0 -bottom-2 h-[3px] w-0 rounded-full bg-[#E4D26A] transition-all duration-300 group-hover:w-full" />
</a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-3xl sm:text-4xl text-[#E4D26A] hover:scale-105 transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#5A561F] border-t border-[#746F32] shadow-xl">
          <nav className="max-w-[1600px] mx-auto flex flex-col gap-5 px-8 py-7">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl sm:text-2xl font-semibold text-[#F8F6EB] hover:text-[#E4D26A] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;