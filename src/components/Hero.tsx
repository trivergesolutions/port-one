import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';
import heroBg from '../assets/hero-bg.jpg';


export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#F9F6F0] overflow-hidden pt-20">
            {/* Subtle Premium Background Texture */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-10"
                style={{ backgroundImage: `url(${heroBg})` }}
            ></div>

            {/* Soft, Elegant Vignette вместо ярких цветных блогов */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-200/10 rounded-full filter blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">

                {/* Minimal Editorial Badge */}
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200/60 px-4 py-1.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-10 transition-transform hover:scale-[1.02] duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                        Available for Q3 2026 Projects
                    </span>
                </div>

                {/* Editorial Typography */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-950 mb-8 tracking-tight leading-[0.95] uppercase">
                    Building Scalable
                    <span className="block mt-1 text-slate-900 font-light italic normal-case tracking-normal py-1">
                        Web & Mobile Products
                    </span>
                    <span className="block mt-1">
                        That Grow Businesses
                    </span>
                </h1>

                {/* Refined Divider */}
                <div className="w-12 h-[1px] bg-slate-900/20 mb-8"></div>

                {/* Subtitle with better breathing room */}
                {/* <p className="text-lg sm:text-xl text-slate-600 mb-14 max-w-2xl mx-auto leading-relaxed font-normal tracking-wide">
                    A full-stack engineering partner specializing in React, .NET, Laravel, and native mobile apps. We take exceptional digital experiences <span className="text-slate-900 font-medium">from concept to production.</span>
                </p> */}

                {/* Premium High-Contrast Dual Actions */}
                {/* <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white rounded-2xl font-medium tracking-wide shadow-lg hover:shadow-xl active:scale-[0.99] transition-all duration-200 text-center"
                    >
                        Start a Project
                    </a>
                    <a
                        href="#works"
                        className="w-full sm:w-auto px-8 py-4 bg-white/80 hover:bg-white border border-slate-200/80 text-slate-800 rounded-2xl font-medium tracking-wide backdrop-blur-sm active:scale-[0.99] transition-all duration-200 text-center"
                    >
                        View Portfolio
                    </a>
                </div> */}

            </div>
        </section>
    );
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            ></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-8 border border-blue-100">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Available for new projects</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    Building Scalable
                    <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Web & Mobile Products
                    </span>
                    <span className="block mt-2">That Grow Businesses</span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Full-stack development team specializing in React, .NET, Laravel, and Mobile Apps.
                    <span className="block mt-2 font-semibold text-slate-700">From idea to production.</span>
                </p>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group">
            View Our Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group">
            Hire Us
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}

                {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { number: '50+', label: 'Projects Delivered' },
                        { number: '30+', label: 'Happy Clients' },
                        { number: '5+', label: 'Years Experience' },
                        { number: '24/7', label: 'Support Available' }
                    ].map((stat, index) => (
                        <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white">
                            <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                            <div className="text-sm text-slate-600">{stat.label}</div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}
