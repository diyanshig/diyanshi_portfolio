import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 lg:py-20 bg-[#FAF8F1]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <p className="uppercase tracking-[0.25em] text-[#8C8426] font-bold text-sm lg:text-base">
            PROJECTS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B2B2B] mt-4">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-[#8C8426] rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="bg-white rounded-2xl overflow-hidden border border-[#DDD5B8] shadow-md hover:shadow-xl hover:border-[#8C8426] transition-all duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition duration-700 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">

                {/* Project Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#2B2B2B] mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-[#666666] leading-7 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-[#EFE9D2] text-[#5A561F] font-semibold text-xs lg:text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-[#5A561F] hover:bg-[#444114] text-white rounded-lg py-2.5 font-semibold text-sm transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 border-2 border-[#5A561F] text-[#5A561F] hover:bg-[#5A561F] hover:text-white rounded-lg py-2.5 font-semibold text-sm transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;