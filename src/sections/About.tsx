import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaShieldAlt,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      text: "Building responsive, scalable and modern web applications.",
    },
    {
      icon: <FaBrain />,
      title: "Artificial Intelligence",
      text: "Passionate about Machine Learning and Generative AI solutions.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      text: "Computer Science student specializing in Cybersecurity.",
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      text: "Strong understanding of DSA, OOP and software development.",
    },
  ];

  return (
    <section
      id="about"
      className="py-14 lg:py-16 bg-[#FAF8F1] text-[#2C2C2C]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-12"
        >
          <p className="uppercase tracking-[0.2em] text-[#8C8426] font-bold text-sm lg:text-base">
            ABOUT ME
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 leading-tight">
            Passionate About
            <span className="text-[#5A561F]"> Building Software</span>
          </h2>

          <div className="w-16 h-1 bg-[#8C8426] rounded-full mx-auto mt-4" />

          <p className="max-w-3xl mx-auto mt-5 text-sm lg:text-base leading-7 text-[#666]">
            I'm Diyanshi Gupta, a Computer Science student specializing
            in Cybersecurity with a passion for Full Stack Development
            and Artificial Intelligence. I enjoy creating elegant,
            scalable and user-friendly applications while continuously
            learning modern technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="bg-white border border-[#D9D2B0] rounded-2xl p-5 min-h-[200px] shadow-md hover:shadow-xl hover:border-[#8C8426] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#5A561F] text-white flex items-center justify-center text-xl lg:text-2xl mb-4">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold mb-2 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-base text-[#666] leading-6">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;