import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#FAF8F1]"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#C8BC55]/15 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8C8426]/10 blur-[150px]" />

      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
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
            className="uppercase tracking-[0.3em] text-[#8C8426] font-bold text-xl lg:text-2xl"
          />

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl lg:text-[100px] font-black mt-6 leading-[0.95] text-[#202020]">
  Hi, I'm
  <br />

  <span className="text-[#5A561F]">
    Diyanshi Gupta
  </span>
</h1>

          {/* Subtitle */}
          <h2 className="mt-7 text-3xl lg:text-4xl font-semibold text-[#6A6424] leading-snug">
            Full Stack Developer & AI Enthusiast
          </h2>

          {/* Description */}
          <p className="mt-8 text-xl lg:text-[22px] text-[#5F5F5F] leading-9 max-w-2xl">
            Computer Science student specializing in Cybersecurity
            with a passion for Full Stack Development, Artificial
            Intelligence, and building modern, scalable,
            user-friendly web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-12">
            <a
              href="/Diyanshi_Gupta_resume.pdf"
              download="Diyanshi_Gupta_resume.pdf"
              className="bg-[#5A561F] hover:bg-[#444114] text-[#FFFDF6] px-9 py-5 rounded-xl text-xl font-semibold shadow-lg transition duration-300 hover:scale-105"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border-2 border-[#8C8426] text-[#5A561F] hover:bg-[#5A561F] hover:text-white px-9 py-5 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-12">
            <a
              href="https://github.com/diyanshig"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-16 h-16 rounded-full border-2 border-[#8C8426] flex items-center justify-center text-[#5A561F] hover:bg-[#5A561F] hover:text-white transition duration-300 hover:scale-105"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://linkedin.com/in/diyanshi-gupta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-16 h-16 rounded-full border-2 border-[#8C8426] flex items-center justify-center text-[#5A561F] hover:bg-[#5A561F] hover:text-white transition duration-300 hover:scale-105"
            >
              <FaLinkedin size={28} />
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
            <div className="absolute inset-0 rounded-full bg-[#C8BC55] blur-[100px] opacity-25" />

            {/* Profile Ring */}
            <div className="w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] xl:w-[500px] xl:h-[500px] rounded-full bg-gradient-to-r from-[#8C8426] via-[#C8BC55] to-[#5A561F] p-[6px] shadow-2xl">

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

export default Hero;