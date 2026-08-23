import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaTools,
  FaChevronDown,
  FaGithub,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
} from "react-icons/si";

function Skills() {
  const [open, setOpen] = useState("Languages");

  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-[#8C8426] text-xl" />,
      skills: [
        { name: "C", icon: "💻" },
        { name: "C++", icon: "⚙️" },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        {
          name: "SQL",
          icon: <SiMysql className="text-sky-600" />,
        },
      ],
    },

    {
      title: "Frontend",
      icon: <FaReact className="text-cyan-500 text-xl" />,
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
      ],
    },

    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-600 text-xl" />,
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-700" />,
        },
        { name: "REST APIs", icon: "🔗" },
      ],
    },

    {
      title: "Database",
      icon: <SiMongodb className="text-green-600 text-xl" />,
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-sky-600" />,
        },
      ],
    },

    {
      title: "Tools & Platforms",
      icon: <FaTools className="text-[#8C8426] text-xl" />,
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-red-500" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
        },
        {
          name: "VS Code",
          icon: <VscVscode className="text-blue-500" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-14 lg:py-16 bg-[#FAF8F1] text-[#2D2D2D]"
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
            SKILLS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 text-[#2B2B2B]">
            <span className="text-[#5A561F]">Tech Stack</span>
          </h2>

          <div className="w-16 h-1 bg-[#8C8426] rounded-full mx-auto mt-4" />

          <p className="text-[#666666] text-sm lg:text-base mt-5 max-w-2xl mx-auto leading-7">
            Technologies and tools I use to build modern, scalable and
            responsive applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-4 lg:space-y-5">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl bg-white border border-[#DDD5B8] shadow-md overflow-hidden hover:border-[#8C8426] transition-all duration-300"
            >
              {/* Category Header */}
              <button
                onClick={() =>
                  setOpen(
                    open === category.title
                      ? ""
                      : category.title
                  )
                }
                className="w-full flex justify-between items-center px-5 lg:px-6 py-4"
              >
                <div className="flex items-center gap-3">

                  {category.icon}

                  <h3 className="text-lg lg:text-xl font-bold">
                    {category.title}
                  </h3>

                </div>

                <FaChevronDown
                  className={`text-base lg:text-lg transition-transform duration-300 ${
                    open === category.title
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* Skills */}
              <AnimatePresence>
                {open === category.title && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="grid sm:grid-cols-2 gap-3 p-5">

                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: i * 0.08,
                          }}
                          className="flex items-center gap-3 rounded-xl bg-[#FAF8F1] border border-[#E6DFC4] p-3 lg:p-4 hover:border-[#8C8426] transition-all duration-300"
                        >
                          <div className="text-xl lg:text-2xl">
                            {skill.icon}
                          </div>

                          <span className="text-sm lg:text-base font-semibold">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;