import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
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
            PROJECTS
          </p>

          {/* Supporting Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#2B2B2B] mt-5">
            Featured Projects
          </h2>

          <div className="w-24 h-1.5 bg-[#8C8426] rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl overflow-hidden border border-[#DDD5B8] shadow-md hover:shadow-2xl hover:border-[#8C8426] transition-all duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition duration-700 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-9">

                {/* Project Title */}
                <h3 className="text-2xl lg:text-4xl font-bold text-[#2B2B2B] mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-[#666666] leading-8 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-[#EFE9D2] text-[#5A561F] font-semibold text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-[#5A561F] hover:bg-[#444114] text-white rounded-xl py-3.5 font-semibold text-base transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 border-2 border-[#5A561F] text-[#5A561F] hover:bg-[#5A561F] hover:text-white rounded-xl py-3.5 font-semibold text-base transition duration-300"
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