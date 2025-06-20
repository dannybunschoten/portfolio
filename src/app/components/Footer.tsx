import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const references = [
  {
    icon: <Github />,
    link: "https://github.com/dannybunschoten",
  },
  { icon: <Linkedin />, link: "https://linkedin.com/in/danny-bunschoten" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-solid px-6 py-20">
      <div className="flex items-center justify-center gap-4">
        {references.map((ref) => {
          return (
            <Link
              href={ref.link}
              key={ref.link}
              className="text-zinc-400 hover:text-zinc-500 size-8"
            >
              {ref.icon}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
