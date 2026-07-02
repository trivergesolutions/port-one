import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldAlert, Cpu, Layers, ArrowUpRight } from 'lucide-react';

const team = [
  {
    role: 'Technical Director & Systems Architect',
    title: 'The Blueprint Master',
    bio: 'Manages the foundational blueprint of your software. Specializes in designing highly secure, robust, and scalable architectures capable of supporting complex business logic, large user bases, and heavy data loads.',
    capabilities: ['Core System Engineering', 'Scalability Strategy', 'Advanced Technical Audits'],
    tech: ['System Architecture', 'Security Architecture', 'Scale Strategy', 'Data Engineering'],
    icon: ShieldAlert
  },
  {
    role: 'Infrastructure & Backend Engineer',
    title: 'The Integration Specialist',
    bio: 'Ensures your software runs smoothly, securely, and connects seamlessly with other tools. Expert at building stable server environments, creating custom data bridges, and automating complex background workflows to eliminate manual data entry.',
    capabilities: ['Systems Integration', 'Workflow Automation', 'Database Performance'],
    tech: ['API Engineering', 'Workflow Automation', 'Database Optimization', 'Server Architecture'],
    icon: Cpu
  },
  {
    role: 'Digital Experience & Frontend Engineer',
    title: 'The Interface Craftsman',
    bio: 'Transforms complex functions into clean, intuitive, and high-performance user interfaces. Focuses on cross-platform responsiveness, pixel-perfect layouts, and building fast, accessible digital products that users love.',
    capabilities: ['Web & Mobile Implementation', 'User Interface Optimization', 'Cross-Platform Deployment'],
    tech: ['Frontend Architecture', 'UI/UX Engineering', 'Cross-Platform Apps', 'Responsive Systems'],
    icon: Layers
  }
];

export default function Team() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  // Framer Motion Variants for Staggered Drop-In Grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  return (
    <section className="py-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c368d] to-[#030c22]" id="team">
      {/* Ambient cyan glow behind the scrolling team cards */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* LEFT COLUMN: Sticky Section Meta */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">
                Execution Force
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              Meet Our <br /> Core Team
            </h2>

            <div className="w-12 h-[1px] bg-white/30 my-6"></div>

            <p className="text-lg text-blue-100/80 max-w-sm leading-relaxed font-normal tracking-wide">
              A high-precision, senior-level engineering group structured to execute mission-critical applications without layers of management friction.
            </p>
          </div>

          {/* RIGHT COLUMN: Scrolling Staggered Cards */}
          <div className="lg:col-span-8">
            <motion.div
              ref={containerRef}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-1 gap-6"
            >
              {team.map((member, index) => {
                const Icon = member.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="group relative bg-[#030c22]/40 rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-cyan-500/30 hover:bg-[#030c22]/60 transition-all duration-500 backdrop-blur-sm"
                  >
                    {/* Top Identity bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                          <Icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                            {member.role}
                          </h3>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                            {member.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Architectural Role Bio */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                      {member.bio}
                    </p>

                    {/* Capabilities Breakdown */}
                    <div className="space-y-4 mb-8">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Core Functional Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {member.capabilities.map((cap, idx) => (
                          <div
                            key={idx}
                            className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs font-semibold text-slate-200 flex items-center gap-2 hover:border-cyan-500/30 hover:bg-[#0c368d]/20 transition-all duration-300 cursor-default"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] shrink-0"></span>
                            {cap}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Structural Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {member.tech.map((tag, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[10px] font-bold uppercase tracking-wide text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md hover:border-cyan-500/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Methodology Summary Footnote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 bg-[#030c22]/80 border border-cyan-500/20 rounded-3xl p-8 text-white relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-md"
            >
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-[80px] pointer-events-none"></div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal relative z-10">
                <span className="text-cyan-400 font-bold uppercase tracking-wider text-[11px] block mb-1.5 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                  Our Delivery Approach
                </span>
                We completely reject unnecessary corporate layers, account manager games, and artificial communication telephone loops. You work directly alongside senior builders executing at peak velocity to deploy architecture that holds structural permanence.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>

  );
}