import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { Award, Star, Lightbulb } from "lucide-react";
import { Skill } from "@/app/types";

const levelConfig = {
  Expert: {
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    icon: <Award className="h-3 w-3" />,
    description: "Deep expertise with ability to architect and lead",
  },
  Advanced: {
    color: "text-blue-600 bg-blue-50 border-blue-200",
    icon: <Star className="h-3 w-3" />,
    description: "Strong proficiency with complex problem solving",
  },
  Intermediate: {
    color: "text-amber-600 bg-amber-50 border-amber-200",
    icon: <Lightbulb className="h-3 w-3" />,
    description: "Solid understanding with growing expertise",
  },
} as const;

export default function ProjectCard({
  name,
  icon,
  description,
  yearsOfExperience,
  level,
  projects,
  isExpanded,
  setExpanded,
}: Skill & {
  isExpanded: boolean;
  setExpanded: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      }}
    >
      <Card
        className="py-0 h-full border-zinc-200 backdrop-blur-sm bg-white/80 hover:bg-white/95 transition-all duration-300 cursor-pointer group"
        onClick={() => setExpanded(isExpanded ? null : name)}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="text-2xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
              </motion.div>
              <div>
                <h4 className="font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {name}
                </h4>
                <p className="text-sm text-zinc-500">
                  {yearsOfExperience} year
                  {yearsOfExperience === "1" ? "" : "s"}
                </p>
              </div>
            </div>
            <Badge
              className={`${levelConfig[level].color} border text-xs font-medium flex items-center gap-1`}
            >
              {levelConfig[level].icon}
              {level}
            </Badge>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <p className="text-sm text-zinc-600 leading-relaxed">
                {description}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">Experience:</span>
                <span className="font-medium text-zinc-700">{projects}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-4 flex items-center text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors"
            animate={{
              opacity: isExpanded ? 0 : 1,
            }}
          >
            <span>Click to learn more</span>
            <motion.div
              className="ml-2"
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              →
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
