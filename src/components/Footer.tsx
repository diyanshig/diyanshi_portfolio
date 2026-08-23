import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#5A561F] border-t border-[#8C8426] py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Diyanshi <span className="text-[#C8BC55]">Gupta</span>
            </h2>

            <p className="text-[#EFE9D2] mt-3 text-sm lg:text-base">
              Full Stack Developer • AI Enthusiast • Cybersecurity
            </p>
          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-5 lg:gap-6 text-sm lg:text-base"
          >

            <a
              href="#home"
              className="text-[#FFFDF6] hover:text-[#C8BC55] transition duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-[#FFFDF6] hover:text-[#C8BC55] transition duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-[#FFFDF6] hover:text-[#C8BC55] transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-[#FFFDF6] hover:text-[#C8BC55] transition duration-300"
            >
              Projects
            </a>

            <a
              href="#certifications"
              className="text-[#FFFDF6] hover:text-[#C8BC55] transition duration-300"
            >
              Certificates
            </a>

            <a
              href="#contact"
              className="text-[#FFFDF6] hover:text-[#C8BC55] transition duration-300"
            >
              Contact
            </a>

          </motion.div>

          {/* Social Icons */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >

            <a
              href="https://github.com/diyanshig"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full bg-[#C8BC55] text-[#5A561F] flex items-center justify-center hover:bg-[#E0D46A] hover:scale-110 transition duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/diyanshi-gupta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full bg-[#C8BC55] text-[#5A561F] flex items-center justify-center hover:bg-[#E0D46A] hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-8 border-t border-[#8C8426]"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#EFE9D2] text-sm lg:text-base text-center">
            © Diyanshi Gupta
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 bg-[#C8BC55] hover:bg-[#E0D46A] text-[#5A561F] px-6 py-3 rounded-full text-sm lg:text-base font-semibold transition duration-300"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;