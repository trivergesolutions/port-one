import { ExternalLink, ArrowRight } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';
import { useRef, useState, useEffect } from 'react';

const projects = [
  {
    name: 'LMS Platform with Live Classes',
    problem: 'Educational platform needed tutor-student booking system with real-time video classes',
    solution: 'Built comprehensive LMS with Zoom integration, time-zone handling, and dual-role dashboards',
    impact: 'Enabled 500+ tutors to schedule and conduct online classes seamlessly across 15+ countries',
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
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 border-b border-slate-200/30 last:border-0 transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'}
            `}
    >
      {/* IMAGE COLUMN (Alternates order on desktop using lg:order) */}
      <div className={`lg:col-span-6 w-full aspect-[4/3] bg-white rounded-3xl border border-slate-200/40 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.01)] overflow-hidden group 
                ${isEven ? 'lg:order-1' : 'lg:order-2'}
                transition-all duration-1000 ease-out delay-100
                ${isVisible ? 'translate-x-0' : isEven ? '-translate-x-8' : 'translate-x-8'}
            `}>
        <div className="w-full h-full bg-slate-50 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-100">
          {/* Project Mockup / Image Placeholder */}
          <img
            src={project.image || "/api/placeholder/800/600"}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-5 h-5 text-slate-900" />
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
          <span className="text-[10px] font-bold tracking-widest uppercase bg-slate-950 text-white px-3 py-1 rounded-md">
            {project.category}
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase bg-slate-100 text-slate-600 border border-slate-200/40 px-3 py-1 rounded-md">
            {project.role}
          </span>
        </div>

        {/* Project Identity */}
        <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight uppercase">
          {project.name}
        </h3>

        {/* Technical Strategy breakdown (Bento Style layout inside row) */}
        <div className="space-y-4 pt-2">
          <div className="border-l-2 border-slate-200 pl-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">The Challenge</div>
            <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div className="border-l-2 border-slate-950 pl-4">
            <div className="text-[11px] font-bold text-slate-950 uppercase tracking-wider mb-0.5">Our Execution</div>
            <p className="text-slate-700 text-sm leading-relaxed">{project.solution}</p>
          </div>

          {/* Highly Refined Editorial Impact Box */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] mt-4">
            <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Measurable Impact
            </div>
            <p className="text-slate-900 font-medium text-base tracking-wide">{project.impact}</p>
          </div>
        </div>

        {/* Tech Stack Footer Tags */}
        <div className="pt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200/40 px-3 py-1.5 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default function Projects() {
  return (
    <section className="py-32 bg-[#F9F6F0]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-20 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/60 border border-slate-200/40 px-3 py-1 rounded-full backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight uppercase leading-[0.95]">
            Featured <br /> Projects
          </h2>
          <div className="w-12 h-[1px] bg-slate-950/20 my-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
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
        <div className="text-center mt-20">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200/80 hover:bg-slate-50 text-slate-900 font-medium tracking-wide rounded-2xl shadow-sm transition-all duration-200 active:scale-[0.99] group">
            View Complete Archives
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
