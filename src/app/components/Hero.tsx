import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { lcgRandom } from "@/lib/utils";

const colors = ["bg-pink-300", "bg-blue-300", "bg-purple-300"] as const;

function generateBackgroundBalls(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const randomNumbers = lcgRandom(3, 0.11 * i);
    const color = colors[Math.floor(randomNumbers[0] * colors.length)];
    const x = Math.floor(randomNumbers[1] * 100) + "%";
    const y = Math.floor(randomNumbers[2] * 100) + "%";
    return { color, x, y, id: i };
  });
}
const backgroundBalls = generateBackgroundBalls(10);

export default function Hero() {
  return (
    <section className="min-h-dvh flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-20 blur-3xl" />

        {backgroundBalls.map((ball) => (
          <FloatingBackgroundBall
            x={ball.x}
            y={ball.y}
            color={ball.color}
            key={ball.id}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Danny Bunschoten
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-zinc-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer building performance-driven solutions and
            intuitive experiences
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-zinc-900 hover:bg-zinc-800 hover:cursor-pointer"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/danny-bunschoten"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild>
                <Link href="/CV Danny Bunschoten.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute left-1/2 bottom-12 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button variant="ghost" size="lg" className="cursor-pointer" asChild>
            <Link href="#about">
              <ArrowDown className="h-6 w-6" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingBackgroundBall({
  x,
  y,
  color,
}: {
  x: string;
  y: string;
  color: "bg-blue-300" | "bg-purple-300" | "bg-pink-300";
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div
        className={`absolute w-4 h-4 ${color} rounded-full opacity-30`}
        style={{
          left: x,
          top: y,
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random(),
        }}
      />
    </motion.div>
  );
}
