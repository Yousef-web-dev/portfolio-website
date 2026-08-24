import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import restaurantImg from "../assets/restaurant.jpg";
import calcImg from "../assets/calc.jpg";
import cafe from "../assets/cafe.jpg";
import todo from "../assets/todo.jpg";

const cardClass =
  "project-card group bg-card border border-border rounded-[20px] overflow-hidden block no-underline text-inherit transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.01] hover:border-accent hover:shadow-[0_24px_60px_rgba(108,99,255,0.2)] cursor-pointer";

export default function Projects() {
  // 1. تفعيل AutoAnimate للشبكة (Grid)
  const [parent] = useAutoAnimate();
  const [filter, setFilter] = useState('all');

  // 2. مصفوفة المشروعات
  const projects = [
    {
      id: "restaurant",
      title: "Restaurant Website 🍽️",
      category: "web",
      type: "Web App",
      link: "https://yousef-web-dev.github.io/grilli-restaurant/",
      img: restaurantImg,
      bgGradient: 'linear-gradient(135deg, #1a1228, #2d1b4e)',
      alt: "restaurant website homepage screenshot",
      desc: "A professional restaurant website with an interactive menu, a reservation system, and a design that reflects the brand's identity.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "calc",
      title: "Advanced Calculator 🧮",
      category: "tool",
      type: "Tool",
      link: "https://yousef-web-dev.github.io/clean-calculator-app/",
      img: calcImg,
      bgGradient: 'linear-gradient(135deg, #0d2137, #1a3a5c)',
      alt: "advanced calculator app interface",
      desc: "A sleek calculator with a modern UI supporting advanced operations, smooth animations, and an intuitive user experience.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "cafe",
      title: "Café Website ☕",
      category: "web",
      type: "Web App",
      link: "https://yousef-web-dev.github.io/coffee-shop-website/#",
      img: cafe,
      bgGradient: 'linear-gradient(135deg, #1a1200, #3d2e00)',
      alt: "cafe website digital menu page",
      desc: "An elegant café website with a digital menu and a warm atmosphere, designed to attract customers and showcase products beautifully.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "todo",
      title: "To-Do List App ✅",
      category: "tool",
      type: "Productivity",
      link: "https://yousef-web-dev.github.io/smart-todo-list/",
      img: todo,
      bgGradient: 'linear-gradient(135deg, #0d1f1a, #0a3028)',
      alt: "to-do list app task management interface",
      desc: "An interactive task management app with add, delete, and filter functionality. Data persists locally via localStorage.",
      tags: ["HTML", "CSS", "JavaScript", "LocalStorage"]
    }
  ];

  // فلترة المشروعات حسب الخيار المحدد
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="px-[5%] py-[100px] bg-surface">
      <div className="font-mono text-[0.72rem] text-neon tracking-[0.2em] uppercase mb-3">// 03. Projects</div>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mb-4 leading-[1.2] tracking-[-0.02em]">My Projects</h2>
      <div className="w-[60px] h-[3px] bg-grad rounded mb-[30px]"></div>

      {/* أزرار التصفية والفلترة */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
            filter === 'all' ? 'bg-accent text-white' : 'bg-card border border-border text-muted hover:border-accent'
          }`}
        >
          All ({projects.length})
        </button>
        <button
          onClick={() => setFilter('web')}
          className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
            filter === 'web' ? 'bg-accent text-white' : 'bg-card border border-border text-muted hover:border-accent'
          }`}
        >
          Web Apps
        </button>
        <button
          onClick={() => setFilter('tool')}
          className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
            filter === 'tool' ? 'bg-accent text-white' : 'bg-card border border-border text-muted hover:border-accent'
          }`}
        >
          Tools
        </button>
      </div>

      {/* شبكة المشروعات الربط عبر ref={parent} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 relative" ref={parent}>
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className={cardClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div 
              className="w-full h-[200px] relative flex items-center justify-center text-[3.5rem] overflow-hidden" 
              style={{ background: project.bgGradient }}
            >
              <img src={project.img} className="absolute inset-0 w-full h-full object-cover" alt={project.alt} />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,99,255,0.55),rgba(0,245,196,0.4))] opacity-0 transition-opacity duration-300 flex items-center justify-center text-[0.88rem] font-bold text-white tracking-[0.08em] font-mono group-hover:opacity-100">
                View Project →
              </div>
            </div>
            <div className="p-6">
              <div className="font-mono text-[0.68rem] text-neon tracking-[0.15em] uppercase mb-2">{project.type}</div>
              <h3 className="text-[1.05rem] font-bold mb-2.5">{project.title}</h3>
              <p className="text-[0.87rem] text-muted leading-[1.7] mb-[18px]">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[0.73rem] text-muted transition-colors hover:text-accent hover:border-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}