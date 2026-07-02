import Badge from './Badge';

const techStack = {
  Frontend: [
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'React Query',
    'TypeScript',
    'Redux'
  ],
  Backend: [
    'ASP.NET Core',
    'Laravel',
    'REST APIs',
    'JWT Authentication',
    'Node.js',
    'Express'
  ],
  Mobile: [
    'Flutter',
    'React Native',
    'Firebase',
    'Push Notifications',
    'Google Maps',
    'Native APIs'
  ],
  'Database & Tools': [
    'MySQL',
    'PostgreSQL',
    'Git',
    'Postman',
    'Stripe',
    'Razorpay',
    'Zoom API',
    'WhatsApp API'
  ]
};

export default function TechStack() {
  return (
    <section className="py-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c368d] to-[#030c22]" id="tech-stack">
      {/* Ambient cyan glow behind the scrolling stack */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Responsive Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* LEFT SIDE: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">
                Architecture
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              Tech Stack <br className="hidden lg:block" /> & Tools
            </h2>

            {/* Clean geometric line separator */}
            <div className="w-12 h-[1px] bg-white/30 my-6"></div>

            <p className="text-lg text-blue-100/80 max-w-md leading-relaxed font-normal tracking-wide">
              Modern, battle-tested engineering ecosystems intentionally curated to power high-performance, enterprise-grade digital systems.
            </p>
          </div>

          {/* RIGHT SIDE: Scrolling Categories Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div
                key={category}
                className="group bg-[#030c22]/40 rounded-3xl p-8 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-cyan-500/20 hover:bg-[#030c22]/60 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Premium Minimal Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#22d3ee] transition-all duration-300"></span>
                  <h3 className="text-slate-200 tracking-wider text-sm font-bold uppercase group-hover:text-white transition-colors duration-300">
                    {category}
                  </h3>
                </div>

                {/* Clean Minimalist Badges Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium tracking-wide text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
