import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import slotMachine from "@/app/images/slot-machine.png";
import Image from "next/image";

const projects = [
  {
    title: "Slot Machine Game",
    description:
      "A fun slot machine web application built with Next.js and SQLite. Features include spin mechanics, score tracking, and responsive design. This personal project helped me learn full-stack development and database integration.",
    image: slotMachine,
    technologies: ["Next.js", "Node.js", "SQLite", "TailwindCSS", "Nginx"],
    liveUrl: "https://www.slot-machine.nl/",
    githubUrl: "https://github.com/dannybunschoten/slot_machine",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            A personal project that demonstrates my growing skills in full-stack
            development and modern web technologies.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="border-zinc-200 overflow-hidden">
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`relative px-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl shadow-sm border-zinc-200 border"
                  />
                </div>

                <div
                  className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-zinc-900 mb-3">
                      {project.title}
                    </CardTitle>
                    <p className="text-zinc-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-3 text-sm text-zinc-500">
                      <span className="font-medium">Personal Project</span> •
                      Built to learn full-stack development
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <div>
                      <h4 className="font-semibold text-zinc-900 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-zinc-900 mb-2">
                        Key Learning Outcomes:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Full-stack development with Next.js</li>
                        <li>• Database integration and management</li>
                        <li>• Responsive web design principles</li>
                        <li>• Deployment and hosting workflows</li>
                      </ul>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
