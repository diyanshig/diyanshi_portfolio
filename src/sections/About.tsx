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
      className="py-20 lg:py-24 bg-[#FAF8F1] text-[#2C2C2C]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-16"
        >
          <p className="uppercase tracking-[0.25em] text-[#8C8426] font-bold text-base lg:text-lg">
            ABOUT ME
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 leading-tight">
            Passionate About
            <span className="text-[#5A561F]"> Building Software</span>
          </h2>

          <div className="w-20 h-1 bg-[#8C8426] rounded-full mx-auto mt-5" />

          <p className="max-w-4xl mx-auto mt-6 text-base lg:text-lg leading-8 text-[#666]">
            I'm Diyanshi Gupta, a Computer Science student specializing
            in Cybersecurity with a passion for Full Stack Development
            and Artificial Intelligence. I enjoy creating elegant,
            scalable and user-friendly applications while continuously
            learning modern technologies.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">

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
              className="bg-white border border-[#D9D2B0] rounded-2xl p-7 lg:p-8 min-h-[250px] shadow-md hover:shadow-xl hover:border-[#8C8426] transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-[#5A561F] text-white flex items-center justify-center text-2xl lg:text-3xl mb-5">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-[#666] leading-7">
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