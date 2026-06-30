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
    <section className="py-32 bg-[#F9F6F0]" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* LEFT SIDE: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/60 border border-slate-200/40 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                Architecture
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight uppercase leading-[0.95]">
              Tech Stack <br className="hidden lg:block" /> & Tools
            </h2>

            {/* Clean geometric line separator */}
            <div className="w-12 h-[1px] bg-slate-950/20 my-6"></div>

            <p className="text-lg text-slate-600 max-w-md leading-relaxed font-normal tracking-wide">
              Modern, battle-tested engineering ecosystems intentionally curated to power high-performance, enterprise-grade digital systems.
            </p>
          </div>

          {/* RIGHT SIDE: Scrolling Categories Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div
                key={category}
                className="group bg-white rounded-3xl p-8 border border-slate-200/40 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-300"
              >
                {/* Premium Minimal Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 group-hover:bg-blue-600 transition-colors duration-300"></span>
                  <h3 className="text-2xl font-bold text-slate-950 tracking-tight uppercase text-sm tracking-wider">
                    {category}
                  </h3>
                </div>

                {/* Clean Minimalist Badges Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium tracking-wide text-slate-700 bg-slate-50 border border-slate-200/60 px-4 py-2 rounded-xl group-hover:bg-slate-950 group-hover:border-slate-950 group-hover:text-white transition-all duration-300"
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
