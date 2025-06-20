"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Cloud,
  Server,
  Target,
  Repeat,
  ClipboardCheck,
  FlaskConical,
  SquareKanban,
} from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiDeno,
  SiSpring,
  SiDocker,
  SiGit,
} from "@icons-pack/react-simple-icons";
import ViteLogo from "@/app/svgIcons/Vite";
import PythonLogo from "@/app/svgIcons/Python";
import PostgresLogo from "@/app/svgIcons/Postgres";
import AzureLogo from "@/app/svgIcons/Azure";

import ProjectCard from "@/app/components/ProjectCard";
import { SkillCategory } from "@/app/types";
import { lcgRandom } from "@/lib/utils";

function generateFloatingSymbols(n: number) {
  const symbols = ["</", "{", "}", "()", "[]", "=>"] as const;
  return Array.from({ length: n }, (_, i) => {
    const randomNumbers = lcgRandom(3, 0.11 * i);
    const symbol = symbols[Math.floor(randomNumbers[0] * symbols.length)];
    const x = Math.floor(randomNumbers[1] * 100) + "%";
    const y = Math.floor(randomNumbers[2] * 100) + "%";
    return { symbol, x, y, id: i };
  });
}
const floatingSymbols = generateFloatingSymbols(100);

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Code2 className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "React",
        level: "Intermediate",
        yearsOfExperience: "2+",
        icon: <SiReact color="default" />,
        description:
          "Functional components, hooks (useState, useEffect, useContext), component composition, state management",
        projects: "Personal projects and work components",
      },
      {
        name: "Next.js",
        level: "Expert",
        yearsOfExperience: "2+",
        icon: <SiNextdotjs color="default" />,
        description:
          "App Router, file-based routing, SSR basics, API routes, deployment",
        projects: "Portfolio site and side projects",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        yearsOfExperience: "2+",
        icon: <SiTypescript color="default" />,
        description:
          "Type annotations, interfaces, basic generics, working with third-party types",
        projects: "Most recent projects",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        yearsOfExperience: "2+",
        icon: <SiTailwindcss color="default" />,
        description:
          "Responsive design, utility classes, custom configurations, component styling",
        projects: "All styling in recent projects",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Expert",
        yearsOfExperience: "4+",
        icon: <SiJavascript color="default" />,
        description:
          "Modern JS features, async/await, modules, bundling, performance optimization",
        projects: "Foundation for all web-projects",
      },
      {
        name: "Vite",
        level: "Advanced",
        yearsOfExperience: "2+",
        icon: <ViteLogo />,
        description:
          "Fast development, hot module replacement, optimized builds, modern tooling",
        projects: "8+ Vite-powered applications",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      {
        name: "Node.js",
        level: "Expert",
        yearsOfExperience: "2+",
        icon: <SiNodedotjs color="default" />,
        description:
          "Express.js, REST API development, middleware, authentication, database integration",
        projects: "Professional backend services and APIs",
      },
      {
        name: "Deno",
        level: "Intermediate",
        yearsOfExperience: "1",
        icon: <SiDeno color="default" />,
        description:
          "Native Typescript support, compile to dependency-free code",
        projects: "Compilation to native executables",
      },
      {
        name: "Python",
        level: "Advanced",
        yearsOfExperience: "4+",
        icon: <PythonLogo />,
        description:
          "Django, FastAPI, data processing, automation scripts, machine learning integration",
        projects: "University projects",
      },
      {
        name: "Java",
        level: "Intermediate",
        yearsOfExperience: "3",
        icon: <SiSpring color="default" />,
        description: "OOP principles, basic Spring Boot, university coursework",
        projects: "University projects",
      },
      {
        name: "PostgreSQL",
        level: "Intermediate",
        yearsOfExperience: "3+",
        icon: <PostgresLogo />,
        description:
          "Complex queries, joins, indexing, stored procedures, PostgreSQL and SQLite",
        projects: "Professional database work and optimization",
      },
      {
        name: "REST APIs",
        level: "Intermediate",
        yearsOfExperience: "1.5",
        icon: <Server className="text-green-600" />,
        description:
          "API design principles, HTTP methods, status codes, JSON handling",
        projects: "Backend services for personal projects",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "Git",
        level: "Advanced",
        yearsOfExperience: "3",
        icon: <SiGit color="default" />,
        description:
          "GitHub Actions, GitLab CI, automated testing, deployment pipelines, monitoring",
        projects: "All projects version controlled",
      },
      {
        name: "Docker",
        level: "Intermediate",
        yearsOfExperience: "1.5",
        icon: <SiDocker color="default" />,
        description:
          "Basic containerization, Dockerfile creation, simple deployments",
        projects: "Learning through personal projects",
      },
      {
        name: "Azure",
        level: "Intermediate",
        yearsOfExperience: "1",
        icon: <AzureLogo />,
        description:
          "App Services, Storage, Functions, databases, deployment pipelines",
        projects: "Professional cloud deployments and services",
      },
      {
        name: "GitHub Actions",
        level: "Intermediate",
        yearsOfExperience: "1",
        icon: <Repeat className="text-blue-600" />,
        description:
          "CI/CD pipelines, automated testing, deployment workflows, workflow optimization",
        projects: "Professional deployment automation",
      },
    ],
  },
  {
    title: "Development Practices",
    icon: <Target className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    skills: [
      {
        name: "Testing",
        level: "Advanced",
        yearsOfExperience: "3",
        icon: <FlaskConical className="text-purple-600" />,
        description:
          "Unit testing with Jest, integration testing, TDD principles, testing frameworks",
        projects: "Professional testing practices and coverage",
      },
      {
        name: "Agile/Scrum",
        level: "Intermediate",
        yearsOfExperience: "1.5",
        icon: <SquareKanban className="text-red-600" />,
        description:
          "Daily standups, sprint planning, retrospectives, user stories",
        projects: "Professional work environment",
      },
      {
        name: "Code Review",
        level: "Advanced",
        yearsOfExperience: "1.5",
        icon: <ClipboardCheck className="text-green-600" />,
        description:
          "Thorough peer reviews, providing constructive feedback, enforcing best practices",
        projects: "Regular reviewer",
      },
      {
        name: "Problem Solving",
        level: "Advanced",
        yearsOfExperience: "3",
        icon: <Target className="text-blue-600" />,
        description:
          "Debugging, algorithmic thinking, breaking down complex problems",
        projects: "University coursework",
      },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-zinc-50">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
            `,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 20% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 60% 60%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {floatingSymbols.map((symbol) => (
          <motion.div
            key={symbol.id}
            className="absolute text-2xl font-mono text-zinc-300 select-none"
            style={{
              left: symbol.x,
              top: symbol.y,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + (symbol.id % 5),
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: (symbol.id % 5) * 0.8,
            }}
          >
            {symbol.symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    {category.title}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-zinc-300 to-transparent rounded-full mt-2"></div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <ProjectCard
                    key={skill.name}
                    setExpanded={setExpanded}
                    isExpanded={expanded === skill.name}
                    {...skill}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
