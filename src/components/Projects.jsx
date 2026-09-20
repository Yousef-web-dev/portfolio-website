import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import restaurantImg from "../assets/restaurant.webp";
import calcImg from "../assets/calc.webp";
import cafe from "../assets/cafe.webp";
import todo from "../assets/todo.webp";
import grocery from "../assets/grocery.webp";
import ratatouille from "../assets/ratatouille.webp";
import watch from "../assets/watch.webp";

const cardClass =
  "project-card group bg-card border border-border rounded-[20px] overflow-hidden block no-underline text-inherit transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-[0_24px_60px_rgba(108,99,255,0.2)] cursor-pointer will-change-transform";

// مصفوفة المشروعات
const projects = [
  {
    id: "restaurant",
    title: "Grilli Restaurant 🍽️",
    category: "web",
    type: "Web App",
    link: "https://yousef-web-dev.github.io/grilli-restaurant/",
    img: restaurantImg,
    bgGradient: "linear-gradient(135deg, #1a1228, #2d1b4e)",
    alt: "restaurant website homepage screenshot",
    desc: "A professional restaurant website with an interactive menu, a reservation system, and a design that reflects the brand's identity.",
    tags: ["html", "css", "JavaScript"],
  },
  {
    id: "calc",
    title: "CalcMaster 🧮",
    category: "tool",
    type: "Tool",
    link: "https://yousef-web-dev.github.io/clean-calculator-app/",
    img: calcImg,
    bgGradient: "linear-gradient(135deg, #0d2137, #1a3a5c)",
    alt: "advanced calculator app interface",
    desc: "A sleek calculator with a modern UI supporting advanced operations, smooth animations, and an intuitive user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "cafe",
    title: "Brew & Co. ☕",
    category: "web",
    type: "Web App",
    link: "https://yousef-web-dev.github.io/coffee-shop-website/#",
    img: cafe,
    bgGradient: "linear-gradient(135deg, #1a1200, #3d2e00)",
    alt: "cafe website digital menu page",
    desc: "An elegant café website with a digital menu and a warm atmosphere, designed to attract customers and showcase products beautifully.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "todo",
    title: "Taskify ✅",
    category: "tool",
    type: "Productivity",
    link: "https://yousef-web-dev.github.io/smart-todo-list/",
    img: todo,
    bgGradient: "linear-gradient(135deg, #0d1f1a, #0a3028)",
    alt: "to-do list app task management interface",
    desc: "An interactive task management app with add, delete, and filter functionality. Data persists locally via localStorage.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  },
  {
    id: "grocery",
    title: "FreshCart 🛒",
    category: "web",
    type: "Web App",
    link: "https://yousef-web-dev.github.io/grocery-website/",
    img: grocery,
    bgGradient: "linear-gradient(135deg, #1f1c18, #3d2b1f)",
    alt: "grocery e-commerce app interface",
    desc: "A modern e-commerce web app featuring full shopping cart functionality, wishlist management, and real-time state handling using React Context API.",
    tags: ["React", "Context API", "Tailwind CSS", "React Hooks", "Framer Motion", "JavaScript"],
  },
  {
    id: "gusteaux-bistro",
    title: "Gusteaux Bistro 🍷",
    category: "web",
    type: "Web Application",
    link: "https://gusteaux-bistro.vercel.app/",
    img: ratatouille,
    bgGradient: "linear-gradient(135deg, #1f1a17, #3d2c22)",
    alt: "Gusteaux Bistro French restaurant interface",
    desc: "An elegant restaurant web application inspired by French cuisine, featuring an interactive menu, signature dishes, and reservation system.",
    tags: ["Next.js", "Context API", "Tailwind CSS", "React Hooks", "Framer Motion", "JavaScript"],
  },
  {
    id: "bosphorus-horology",
    title: "Bosphorus Horology ⌚",
    category: "web",
    type: "Web Application",
    link: "https://turkish-luxury-watches.vercel.app/",
    img: watch,
    bgGradient: "linear-gradient(135deg, #0d1428, #1a2542)",
    alt: "Bosphorus Horology luxury watches interface",
    desc: "An exclusive luxury watch e-commerce web application inspired by Turkish craftsmanship, featuring real-time timezones, interactive watch illustrations, and seamless UI.",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript", "SVG Animation", "Vercel"],
  },
];

const filters = [
  { id: "all", label: `All (${projects.length})` },
  { id: "web", label: "Web Apps" },
  { id: "tool", label: "Tools" },
];

/* كارت بيميل ثلاثي الأبعاد (3D tilt) مع حركة الماوس */
function ProjectCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 220, damping: 20 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      layout
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
    >
      <div
        className="w-full h-[200px] relative flex items-center justify-center text-[3.5rem] overflow-hidden"
        style={{ background: project.bgGradient }}
      >
        <motion.img
          src={project.img}
          className="absolute inset-0 w-full h-full object-cover"
          alt={project.alt}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,99,255,0.55),rgba(0,245,196,0.4))] opacity-0 transition-opacity duration-300 flex items-center justify-center text-[0.88rem] font-bold text-white tracking-[0.08em] font-mono group-hover:opacity-100">
          View Project →
        </div>
      </div>
      <div className="p-3">
        <div className="font-mono text-[0.68rem] text-neon tracking-[0.15em] uppercase mb-2">
          {project.type}
        </div>
        <h3 className="text-[1.05rem] font-bold mb-2.5">{project.title}</h3>
        <p className="text-[0.87rem] text-muted leading-[1.7] mb-[18px]">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[0.73rem] text-muted transition-colors hover:text-accent hover:border-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="px-[5%] py-[100px] bg-surface">
      <SectionHeading label="// 03. Projects" title="My Projects" barClass="mb-[30px]" />

      {/* أزرار الفلترة — الـ pill بتتحرك بين الأزرار بـ layoutId */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <motion.button
              key={f.id}
              onClick={() => setFilter(f.id)}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-full font-mono text-xs border transition-colors ${
                active
                  ? "border-transparent text-white"
                  : "bg-card border-border text-muted hover:border-accent"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* شبكة المشروعات — AnimatePresence بدل auto-animate */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 relative">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
