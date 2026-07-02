import { ExternalLink, ArrowRight } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';
import { useRef, useState, useEffect } from 'react';
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";
import project6 from "../assets/project6.webp";

const projects = [
  {
    name: 'LMS Platform with Live Classes',
    problem: 'Educational platform needed tutor-student booking system with real-time video classes',
    solution: 'Built comprehensive LMS with Zoom integration, time-zone handling, and dual-role dashboards',
    impact: 'Enabled 500+ tutors to schedule and conduct online classes seamlessly across 15+ countries',
    image: project1, // Placeholder image for demonstration
    tech: ['React.js', 'ASP.NET Core', 'MySQL', 'Zoom API', 'Stripe'],
    role: 'Full Stack',
    category: 'SaaS Platform'
  },
  {
    name: 'Zitzsum BackOffice System',
    problem: 'Restaurant chain needed centralized dashboard for sales, finance, and invoice management',
    solution: 'Developed admin system with React Query for real-time data sync and comprehensive reporting',
    impact: 'Reduced manual reporting time by 80% and improved financial visibility across 12 locations',
    tech: ['React.js', 'React Query', 'ASP.NET Core', 'MySQL'],
    role: 'Frontend Lead',
    category: 'Enterprise Dashboard'
  },
  {
    name: 'University Quran Learning Platform',
    problem: 'Islamic education platform required course management with flexible payment options',
    solution: 'Created LMS with Stripe/Razorpay integration, WhatsApp automation, and tutor scheduling',
    impact: 'Onboarded 2000+ students with automated enrollment and payment processing',
    image: project3, // Placeholder image for demonstration
    tech: ['Laravel', 'React.js', 'Stripe', 'Razorpay', 'WhatsApp API'],
    role: 'Full Stack',
    category: 'EdTech Platform'
  },
  {
    name: 'Healthcare ERP System',
    problem: 'Hospital needed complaint tracking, inventory management, and role-based access control',
    solution: 'Built multi-module ERP with workflow automation and comprehensive reporting dashboard',
    impact: 'Streamlined operations for 50+ departments and reduced complaint resolution time by 60%',
    tech: ['Laravel', 'MySQL', 'Vue.js', 'Redis'],
    role: 'Backend',
    category: 'ERP System'
  },
  {
    name: 'AI-Powered Quiz Mobile App',
    problem: 'EdTech startup needed engaging mobile quiz app with AI-generated questions',
    solution: 'Developed cross-platform app with Firebase backend and intelligent question generation',
    impact: 'Achieved 50K+ downloads with 4.8★ rating on both app stores',
    tech: ['Flutter', 'Firebase', 'AI/ML APIs', 'Push Notifications'],
    role: 'Mobile Developer',
    category: 'Mobile App'
  },
  {
    name: 'Multi-Vendor Grocery Delivery',
    problem: 'Local business needed Uber-like grocery delivery with real-time tracking',
    solution: 'Built native mobile apps with live order tracking, payment gateway, and vendor dashboard',
    impact: 'Processed 10K+ orders in first 3 months with 95% on-time delivery rate',
    tech: ['React Native', 'Node.js', 'Google Maps', 'Stripe', 'Socket.io'],
    image: project6, // Placeholder image for demonstration
    role: 'Full Stack',
    category: 'eCommerce'
  }
];


// Simple, lightweight Intersection Observer component wrapper for scroll animations

const AnimatedProjectRow = ({ project, index }) => {
  const rowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 border-b border-white/10 last:border-0 transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'}
            `}
    >
      {/* IMAGE COLUMN */}
      <div className={`lg:col-span-6 w-full aspect-[4/3] bg-[#030c22]/40 rounded-3xl border border-white/10 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.2)] overflow-hidden group 
                ${isEven ? 'lg:order-1' : 'lg:order-2'}
                transition-all duration-1000 ease-out delay-100
                ${isVisible ? 'translate-x-0' : isEven ? '-translate-x-8' : 'translate-x-8'}
            `}>
        <div className="w-full h-full bg-[#030c22]/60 rounded-2xl relative overflow-hidden flex items-center justify-center border border-white/5">
          {/* Project Mockup / Image Placeholder */}
          <img
            src={project.image || "/api/placeholder/800/600"}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
          />
          <div className="absolute top-4 right-4 p-3 bg-[#0c368d]/80 backdrop-blur-md rounded-xl border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <ExternalLink className="w-5 h-5 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* CONTENT DETAILS COLUMN */}
      <div className={`lg:col-span-6 space-y-6 
                ${isEven ? 'lg:order-2' : 'lg:order-1'}
                transition-all duration-1000 ease-out delay-200
                ${isVisible ? 'translate-x-0' : isEven ? 'translate-x-8' : '-translate-x-8'}
            `}>
        {/* Meta Labels */}
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-md shadow-[0_0_10px_rgba(34,211,238,0.1)]">
            {project.category}
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase bg-white/5 text-slate-300 border border-white/10 px-3 py-1 rounded-md">
            {project.role}
          </span>
        </div>

        {/* Project Identity */}
        <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
          {project.name}
        </h3>

        {/* Technical Strategy breakdown (Bento Style layout inside row) */}
        <div className="space-y-4 pt-2">
          <div className="border-l-2 border-white/20 pl-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">The Challenge</div>
            <p className="text-slate-300/90 text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div className="border-l-2 border-cyan-500 pl-4">
            <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-0.5">Our Execution</div>
            <p className="text-slate-200 text-sm leading-relaxed">{project.solution}</p>
          </div>

          {/* Highly Refined Editorial Impact Box */}
          <div className="bg-[#030c22]/50 border border-cyan-500/20 rounded-2xl p-5 shadow-[0_4px_30px_rgba(0,0,0,0.15)] mt-4 backdrop-blur-sm">
            <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              Measurable Impact
            </div>
            <p className="text-white font-medium text-base tracking-wide">{project.impact}</p>
          </div>
        </div>

        {/* Tech Stack Footer Tags */}
        <div className="pt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg hover:border-cyan-500/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default function Projects() { // Default fallback array
  return (
    <section className="py-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c368d] to-[#030c22] relative overflow-hidden" id="projects">
      {/* Soft, Elegant Metallic Blue/Cyan Glow to mimic hero setup */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-20 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
            Featured <br /> Projects
          </h2>
          <div className="w-12 h-[1px] bg-white/30 my-6"></div>
          <p className="text-lg text-blue-100/90 leading-relaxed">
            Real-world software architectures engineered to process high load, scale effortlessly, and deliver concrete enterprise-grade transformations.
          </p>
        </div>

        {/* Alternating Animated List */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <AnimatedProjectRow key={index} project={project} index={index} />
          ))}
        </div>

        {/* Secondary Premium Action Button */}
        {/* <div className="text-center mt-20">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white hover:text-[#0c368d] text-white font-medium tracking-wide rounded-2xl shadow-md backdrop-blur-sm transition-all duration-200 active:scale-[0.99] group">
            View Complete Archives
            <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0c368d] group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>
    </section>
  );
}

