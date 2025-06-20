"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Professional Experience", value: "1.2 years" },
  { label: "Internship Duration", value: "3 months" },
  { label: "GitHub Projects", value: "10+" },
  { label: "Tech Stack Proficiency", value: "12+" },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Clean white background for readability */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and leading
            high-performing development teams
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Computer Science Master&apos;s Student & Software Engineer
            </motion.h3>
            <motion.div
              className="space-y-4 text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              <p>
                I&apos;m currently pursuing a Master&apos;s degree in Computer
                Science and Engineering at TU Delft, following a Bachelor&apos;s
                with an 8.6 GPA. Alongside my studies, I work professionally as
                a software engineer, where I&apos;ve gained over a year of
                hands-on experience building and maintaining scalable systems in
                production.
              </p>
              <p>
                My internship led to a full-time offer, and I’ve since
                contributed to real-world software projects, collaborating with
                cross-functional teams and practicing agile development. I
                specialize in full-stack development with a strong focus on
                modern web technologies including React, TypeScript, Node.js,
                and cloud infrastructure (Azure).
              </p>
              <p>
                I’m passionate about building efficient, maintainable systems
                and continuously seek to deepen my knowledge through side
                projects, open-source contributions, and academic challenges.
                I&apos;m actively working on expanding my GitHub portfolio to
                reflect my growth as a software engineer.
              </p>
            </motion.div>
          </motion.div>

          {/* Statistics grid with hover animations */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="text-3xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.5 + index * 0.1,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
