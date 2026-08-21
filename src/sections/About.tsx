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
      className="py-32 lg:py-36 bg-[#FAF8F1] text-[#2C2C2C]"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 lg:mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-[#8C8426] font-bold text-lg lg:text-5xl">
            ABOUT ME
          </p>

          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black mt-5 leading-tight">
            Passionate About
            <span className="text-[#5A561F]"> Building Software</span>
          </h2>

          <p className="max-w-5xl mx-auto mt-8 text-xl lg:text-[22px] leading-9 lg:leading-10 text-[#666]">
            I'm Diyanshi Gupta, a Computer Science student specializing
            in Cybersecurity with a passion for Full Stack Development
            and Artificial Intelligence. I enjoy creating elegant,
            scalable and user-friendly applications while continuously
            learning modern technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white border border-[#D9D2B0] rounded-3xl p-9 lg:p-10 min-h-[310px] shadow-md hover:shadow-xl hover:border-[#8C8426] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-18 h-18 lg:w-20 lg:h-20 rounded-2xl bg-[#5A561F] text-white flex items-center justify-center text-4xl mb-7">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-[26px] font-bold mb-5 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-lg lg:text-xl text-[#666] leading-8 lg:leading-9">
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