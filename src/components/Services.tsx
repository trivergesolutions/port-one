import { Globe, Layers, Server, Smartphone, LayoutDashboard, Zap } from 'lucide-react';
import Card from './Card';

const services = [
  {
    icon: Globe,
    title: 'Full Stack Web Development',
    description: 'End-to-end web solutions that scale with your business needs',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Layers,
    title: 'SaaS & LMS Platforms',
    description: 'Feature-rich learning and subscription platforms with payment integration',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Server,
    title: 'Backend API Development',
    description: 'Robust, secure APIs built for performance and reliability',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native-feeling cross-platform apps for iOS and Android',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboards & ERPs',
    description: 'Data-driven dashboards that empower decision making',
    color: 'from-slate-600 to-slate-700'
  },
  {
    icon: Zap,
    title: 'Payment & Zoom Integrations',
    description: 'Seamless third-party integrations that just work',
    color: 'from-amber-500 to-orange-500'
  }
];

export default function Services() {
  return (

    <section className="relative overflow-clip py-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c368d] to-[#030c22]" id="services">
      {/* Soft ambient light source anchoring the sticky sidebar */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Responsive Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* LEFT SIDE: Sticky Header (Now sticks perfectly again) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">
                Capabilities
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              What <br className="hidden lg:block" /> We Do?
            </h2>

            {/* Clean geometric line separator */}
            <div className="w-12 h-[1px] bg-white/30 my-6"></div>

            <p className="text-lg text-blue-100/80 max-w-md leading-relaxed font-normal tracking-wide">
              Comprehensive engineering models and development services tailored to scale your production ecosystem from concept to reality.
            </p>
          </div>

          {/* RIGHT SIDE: Scrolling Cards Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-[#030c22]/40 rounded-3xl p-8 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-cyan-500/30 hover:bg-[#030c22]/70 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start backdrop-blur-sm"
                >
                  {/* Premium Tech Icon Frame */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content Block */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-cyan-400">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed font-normal text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>


  );
}
