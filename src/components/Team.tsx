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
    <section className="py-32 bg-[#F9F6F0]" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* LEFT COLUMN: Sticky Section Meta */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/60 border border-slate-200/40 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                Execution Force
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight uppercase leading-[0.95]">
              Meet Our <br /> Core Team
            </h2>

            <div className="w-12 h-[1px] bg-slate-950/20 my-6"></div>

            <p className="text-lg text-slate-600 max-w-sm leading-relaxed font-normal tracking-wide">
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
                    className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/40 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-500"
                  >
                    {/* Top Identity bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 group-hover:bg-slate-950 group-hover:border-slate-950 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-950 tracking-tight leading-snug">
                            {member.role}
                          </h3>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                            {member.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Architectural Role Bio */}
                    <p className="text-slate-600 text-base leading-relaxed mb-8">
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
                            className="bg-slate-50/50 border border-slate-200/40 rounded-xl p-3 text-xs font-semibold text-slate-800 flex items-center gap-2 group-hover:bg-white group-hover:border-slate-300 transition-colors duration-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0"></span>
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
                          className="text-[10px] font-bold uppercase tracking-wide text-slate-500 bg-slate-100/60 px-2.5 py-1 rounded-md"
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
              className="mt-8 bg-slate-950 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[80px] pointer-events-none"></div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <span className="text-white font-bold uppercase tracking-wider text-[11px] block mb-1.5 text-blue-400">
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