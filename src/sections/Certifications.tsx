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
      className="py-32 lg:py-36 bg-[#FAF8F1]"
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
            CERTIFICATIONS
          </p>

          {/* Supporting Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#2B2B2B] mt-5">
            Certifications & Achievements
          </h2>

          {/* Divider */}
          <div className="w-24 h-1.5 bg-[#8C8426] rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Certification Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">

          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl p-9 lg:p-10 min-h-[300px] border border-[#DDD5B8] shadow-md hover:shadow-2xl hover:border-[#8C8426] transition-all duration-300 flex flex-col"
            >

              {/* Icon */}
              <div className="w-18 h-18 lg:w-20 lg:h-20 rounded-2xl bg-[#EFE9D2] flex items-center justify-center mb-7">
                <FaCertificate
                  className="text-[#5A561F]"
                  size={32}
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-[25px] font-bold text-[#2B2B2B] mb-4 leading-snug">
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p className="text-lg text-[#666666] mb-8">
                {certificate.issuer}
              </p>

              {/* Button */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#5A561F] text-base lg:text-lg font-semibold hover:text-[#8C8426] hover:gap-3 transition-all duration-300 mt-auto"
              >
                View Certificate
                <FaExternalLinkAlt size={14} />
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;