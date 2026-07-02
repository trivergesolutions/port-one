import { Mail, Phone, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (

        <section className="relative overflow-clip py-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c368d] to-[#030c22]" id="contact">
            {/* Ambient background glow anchoring the left headings grid */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Responsive Layout Grid Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT SIDE: Headings and Actionable Contact Links */}
                    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]"></span>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">
                                    Initiate Partnership
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
                                Let's Build <br /> Your Product
                            </h2>
                            <div className="w-12 h-[1px] bg-white/30 my-6"></div>
                            <p className="text-lg text-blue-100/80 max-w-md leading-relaxed font-normal tracking-wide">
                                Ready to transform your infrastructure? Get in touch with our engineering team to map out your scale milestones.
                            </p>
                        </div>

                        {/* Premium Minimal Contact Pills Stack */}
                        <div className="space-y-3 max-w-md">
                            {/* Email Action Pill */}
                            <a
                                href="mailto:trivergesolutions@gmail.com"
                                className="group flex items-center justify-between bg-[#030c22]/40 border border-white/10 hover:border-cyan-500/30 p-5 rounded-2xl transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.1)] backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Drop an email</div>
                                        <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">trivergesolutions@gmail.com</div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>

                            {/* Phone Action Pill */}
                            <a
                                href="tel:+916353203220"
                                className="group flex items-center justify-between bg-[#030c22]/40 border border-white/10 hover:border-cyan-500/30 p-5 rounded-2xl transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.1)] backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Call our line</div>
                                        <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">+91 6353203220</div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                        </div>

                        {/* Trust Meta Badges */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 text-slate-400">
                                <MessageSquare className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.3)]" />
                                <span className="text-xs font-medium tracking-wide">24hr Turnaround Response</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                                <Clock className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]" />
                                <span className="text-xs font-medium tracking-wide">Global Timezone Coverage</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: What Happens Next? Onboarding Roadmap Container */}
                    <div className="lg:col-span-7 bg-[#030c22]/40 rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-md">
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-white tracking-wider text-sm font-bold uppercase mb-8 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
                                    Our Onboarding Protocol
                                </h3>

                                {/* Vertical Stepper Process */}
                                <div className="relative border-l border-white/10 ml-4 pl-8 space-y-10">

                                    {/* Step 1 */}
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-cyan-500 border-4 border-[#030c22] shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center" />
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-white text-base">Discovery Strategy Call</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                                                We map out your concrete architecture benchmarks, tech stack limitations, and business milestones.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white/10 border-4 border-[#030c22] border-white/20 flex items-center justify-center" />
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-200 text-base">Proposal & Milestone Mapping</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                                                A clear, transparent project scoping breakdown with precise delivery dates and sprint parameters.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white/5 border-4 border-[#030c22] border-white/10 flex items-center justify-center" />
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-200 text-base">Iterative Development Begins</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                                                Regular codebase handoffs, continuous feedback intervals, and end-to-end transparent visibility.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white/5 border-4 border-[#030c22] border-white/10 flex items-center justify-center" />
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-200 text-base">Deployment & Continuous Maintenance</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                                                Seamless production cutover with ongoing monitoring, infrastructure support, and structural scaling SLA agreements.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Footer Footnote Inside Right Column */}
                            <div className="bg-[#030c22]/50 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-[#030c22]/80 hover:border-cyan-500/20">
                                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                                    <span className="text-cyan-400 font-bold uppercase tracking-wider text-[10px] block mb-1">Zero Lock-In Obligation</span>
                                    Let's start with a low-pressure engineering audit call. If TriVerge isn't the perfect technical fit for your scaling direction, we'll happily point you toward the right resource network.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

