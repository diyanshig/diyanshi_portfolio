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
  icon: <FaEnvelope className="text-[#5A561F] text-3xl" />,
  link: "https://mail.google.com/mail/?view=cm&fs=1&to=diyanshig4@gmail.com",
},
    {
      title: "GitHub",
      value: "github.com/diyanshig",
      icon: <FaGithub className="text-[#5A561F] text-3xl" />,
      link: "https://github.com/diyanshig",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/diyanshi-gupta",
      icon: <FaLinkedin className="text-[#5A561F] text-3xl" />,
      link: "https://linkedin.com/in/diyanshi-gupta",
    },
    {
      title: "Location",
      value: "Kanpur, Uttar Pradesh",
      icon: <FaMapMarkerAlt className="text-[#5A561F] text-3xl" />,
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 lg:py-36 bg-[#FAF8F1] text-[#2B2B2B]"
    >
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >

          {/* Main Section Heading */}

          <p className="uppercase tracking-[0.3em] text-[#8C8426] font-black text-4xl sm:text-5xl lg:text-5xl">
            CONTACT
          </p>

          {/* Supporting Heading */}

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-5">
            Let's <span className="text-[#5A561F]">Connect</span>
          </h2>

          {/* Divider */}

          <div className="w-24 h-1.5 bg-[#8C8426] rounded-full mx-auto mt-6" />

          {/* Description */}

          <p className="text-[#666666] text-lg lg:text-xl mt-8 max-w-4xl mx-auto leading-8 lg:leading-9">
            I'm always open to internships, full-time opportunities,
            collaborations, freelance work, and exciting tech projects.
          </p>

        </motion.div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white border border-[#DDD5B8] rounded-3xl p-9 lg:p-10 min-h-[270px] flex flex-col items-center justify-center text-center shadow-md hover:shadow-2xl hover:border-[#8C8426] transition-all duration-300"
            >

              {/* Icon */}

              <div className="w-20 h-20 rounded-2xl bg-[#EFE9D2] flex items-center justify-center mb-7">
                {contact.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl lg:text-[25px] font-bold text-[#2B2B2B] mb-4">
                {contact.title}
              </h3>

              {/* Value */}

              <p className="text-base lg:text-lg text-[#666666] break-words leading-7">
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