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
    <section className="py-32 bg-[#F9F6F0]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* LEFT SIDE: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/60 border border-slate-200/40 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                Capabilities
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight uppercase leading-[0.95]">
              What <br className="hidden lg:block" /> We Do
            </h2>

            {/* Clean geometric line separator */}
            <div className="w-12 h-[1px] bg-slate-950/20 my-6"></div>

            <p className="text-lg text-slate-600 max-w-md leading-relaxed font-normal tracking-wide">
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
                  className="group bg-white rounded-3xl p-8 border border-slate-200/40 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
                >
                  {/* Premium Minimal Icon Frame */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 group-hover:bg-slate-950 group-hover:border-slate-950 transition-all duration-300">
                    <Icon className="w-6 h-6 text-slate-800 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content Block */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-normal text-base">
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
