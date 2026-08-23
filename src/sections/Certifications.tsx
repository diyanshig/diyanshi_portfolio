import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    link: "https://drive.google.com/file/d/1Ee7uXQxme2olvxtVhBnRp9Pjo-BZffrV/view?usp=sharing",
  },
  {
    title: "Agentblazer Champion",
    issuer: "Salesforce",
    link: "https://www.salesforce.com/trailblazer/l9hcqft1vnibwb5wlo",
  },
  {
    title: "Cybersecurity Foundations (GRC)",
    issuer: "LinkedIn Learning",
    link: "https://drive.google.com/file/d/1KNTE7-eRVC5SpQ-XvIg_0dGrLqM2RQjP/view?usp=sharing",
  },
  {
    title: "Deloitte Cybersecurity Virtual Experience",
    issuer: "Forage",
    link: "https://drive.google.com/file/d/11E0NCy27EfUY-V7KopYLFWXlxRqBRGnW/view?usp=sharing",
  },
  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/drive/u/2/folders/151tjWQUtp-gp0aBxZaTGAQnrMBPyQIyU",
  },
  {
    title: "DBMS",
    issuer: "Hackerrank",
    link: "https://www.hackerrank.com/certificates/iframe/9dbeedbf935d",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-14 lg:py-16 bg-[#FAF8F1]"
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
            CERTIFICATIONS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B2B2B] mt-4">
            Certifications & Achievements
          </h2>

          <div className="w-16 h-1 bg-[#8C8426] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Certification Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">

          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
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
              className="bg-white rounded-2xl p-5 min-h-[200px] border border-[#DDD5B8] shadow-md hover:shadow-xl hover:border-[#8C8426] transition-all duration-300 flex flex-col"
            >

              {/* Icon */}
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#EFE9D2] flex items-center justify-center mb-4">
                <FaCertificate
                  className="text-[#5A561F]"
                  size={24}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-[#2B2B2B] mb-2 leading-snug">
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm lg:text-base text-[#666666] mb-5">
                {certificate.issuer}
              </p>

              {/* Button */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#5A561F] text-sm font-semibold hover:text-[#8C8426] hover:gap-3 transition-all duration-300 mt-auto"
              >
                View Certificate
                <FaExternalLinkAlt size={12} />
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;