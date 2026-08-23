import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "diyanshig4@gmail.com",
      icon: <FaEnvelope className="text-[#5A561F] text-xl" />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=diyanshig4@gmail.com",
    },
    {
      title: "GitHub",
      value: "github.com/diyanshig",
      icon: <FaGithub className="text-[#5A561F] text-xl" />,
      link: "https://github.com/diyanshig",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/diyanshi-gupta",
      icon: <FaLinkedin className="text-[#5A561F] text-xl" />,
      link: "https://linkedin.com/in/diyanshi-gupta",
    },
    {
      title: "Location",
      value: "Kanpur, Uttar Pradesh",
      icon: <FaMapMarkerAlt className="text-[#5A561F] text-xl" />,
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-14 lg:py-16 bg-[#FAF8F1] text-[#2B2B2B]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12"
        >
          <p className="uppercase tracking-[0.2em] text-[#8C8426] font-bold text-sm lg:text-base">
            CONTACT
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4">
            Let's <span className="text-[#5A561F]">Connect</span>
          </h2>

          <div className="w-16 h-1 bg-[#8C8426] rounded-full mx-auto mt-4" />

          <p className="text-[#666666] text-sm lg:text-base mt-5 max-w-2xl mx-auto leading-7">
            I'm always open to internships, full-time opportunities,
            collaborations, freelance work, and exciting tech projects.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              target={
                contact.link.startsWith("http")
                  ? "_blank"
                  : "_self"
              }
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="bg-white border border-[#DDD5B8] rounded-2xl p-5 min-h-[190px] flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl hover:border-[#8C8426] transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#EFE9D2] flex items-center justify-center mb-4">
                {contact.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-[#2B2B2B] mb-2">
                {contact.title}
              </h3>

              {/* Value */}
              <p className="text-xs lg:text-sm text-[#666666] break-words leading-6">
                {contact.value}
              </p>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Contact;