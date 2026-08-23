import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-76px)] flex items-center pt-20 overflow-hidden bg-[#FAF8F1]"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#C8BC55]/15 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8C8426]/10 blur-[130px]" />

      <div className="max-w-6xl w-full mx-auto px-6 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Role */}
          <TypeAnimation
            sequence={[
              "FULL STACK DEVELOPER",
              2000,
              "REACT DEVELOPER",
              2000,
              "AI ENTHUSIAST",
              2000,
              "PROBLEM SOLVER",
              2000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="uppercase tracking-[0.25em] text-[#8C8426] font-bold text-sm sm:text-base lg:text-lg"
          />

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-5 leading-tight text-[#202020]">
            Hi, I'm
            <br />

            <span className="text-[#5A561F]">
              Diyanshi Gupta
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-5 text-xl lg:text-2xl font-semibold text-[#6A6424] leading-snug">
            Full Stack Developer & AI Enthusiast
          </h2>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base lg:text-base text-[#5F5F5F] leading-7 max-w-xl">
            Computer Science student specializing in Cybersecurity
            with a passion for Full Stack Development, Artificial
            Intelligence, and building modern, scalable,
            user-friendly web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/Diyanshi_Gupta_resume.pdf"
              download="Diyanshi_Gupta_resume.pdf"
              className="bg-[#5A561F] hover:bg-[#444114] text-[#FFFDF6] px-6 py-3 rounded-lg text-sm lg:text-base font-semibold shadow-lg transition duration-300 hover:scale-105"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border-2 border-[#8C8426] text-[#5A561F] hover:bg-[#5A561F] hover:text-white px-7 py-3 rounded-lg text-sm lg:text-base font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/diyanshig"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full border-2 border-[#8C8426] flex items-center justify-center text-[#5A561F] hover:bg-[#5A561F] hover:text-white transition duration-300 hover:scale-105"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/diyanshi-gupta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full border-2 border-[#8C8426] flex items-center justify-center text-[#5A561F] hover:bg-[#5A561F] hover:text-white transition duration-300 hover:scale-105"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#C8BC55] blur-[80px] opacity-25" />

            {/* Profile Ring */}
            <div className="w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] lg:w-[380px] lg:h-[380px] xl:w-[400px] xl:h-[400px] rounded-full bg-gradient-to-r from-[#8C8426] via-[#C8BC55] to-[#5A561F] p-[5px] shadow-2xl">

              <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF8F1]">
                <img
                  src={profile}
                  alt="Diyanshi Gupta"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;``